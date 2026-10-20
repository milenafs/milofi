$(function () {
    // Single source of truth: one entry per track, in display order.
    // To add a song, add an object here -- the card and the player are both
    // built from this list.
    var MUSIC_DIR = "songs/";
    var EMPTY_LABEL = "nome da musica";
    var OPEN_CLASS = "open";
    var CARD_MARGIN = 10;    // px, the side margin on .flex-container > div in style.css
    var TARGET_CARD = 210;   // px, the card size the column count aims for when scrolling
    var MIN_COLS = 2;        // a phone gets two columns, never one
    var MAX_COLS = 10;       // past this the covers are too small to read
    var MIN_CARD = 70;       // px, floor for a very narrow screen
    var FIT_MIN_CARD = 110;  // px, smallest card worth fitting the whole grid on
                             // screen for; under it the page scrolls instead
    var MAX_ROW_GAP = 40;    // px, cap on the margin that spreads the rows out
    var BOTTOM_GAP = 10;     // px kept clear under the last row
    var OPEN_SLACK = 2;      // spare slots: an open card takes two of them, and
                             // can leave a third empty when it wraps to a new row
    // An open card is a cover beside an info panel, so it spans two columns:
    // two cards plus the margins that would have sat between them.
    var INFO_GAP = CARD_MARGIN * 2;
    var CLOSE_SPEED = 150;   // ms to collapse the card that was open
    var OPEN_SPEED = 200;    // ms to expand the card being opened
    var SCAN_GAP = 8;        // ms, about half a frame: throttles the sweep below

    var tracks = [
        { title: "Epiphany", artist: "Smyang Piano", file: "music1.mp3", cover: "https://i.pinimg.com/564x/89/53/00/8953008f5a46f0573d7f2abfcae6412b.jpg" },
        { title: "Promise", artist: "Smyang Piano", file: "music2.mp3", cover: "https://i.pinimg.com/564x/30/ec/fb/30ecfb82b30a2475b1adddda1c5fd616.jpg" },
        { title: "Serendipity", artist: "Smyang Piano", file: "music3.mp3", cover: "https://i.pinimg.com/236x/d2/01/d3/d201d3002a36ae021bbca788c0627409.jpg" },
        { title: "Winter Bear", artist: "Smyang Piano", file: "music4.mp3", cover: "https://i.pinimg.com/236x/30/af/a1/30afa1baaab06f9495d2877ceda3554d.jpg" },
        { title: "Sweet Night", artist: "Smyang Piano", file: "music5.mp3", cover: "https://i.pinimg.com/236x/05/4b/ea/054beaef962bf50e44e4ba41954217c1.jpg" },
        { title: "Rain", artist: "Nature", file: "music6.mp3", cover: "https://i.pinimg.com/originals/41/b4/0b/41b40b553a9ac9100b5372cc464ac1dd.gif" },
        { title: "Without Love", artist: "Titus", file: "music7.mp3", cover: "https://i.pinimg.com/564x/52/2c/4e/522c4ea5b6066de6564d509608a66383.jpg" },
        { title: "Strangers", artist: "Biosphere", file: "music8.mp3", cover: "https://i.pinimg.com/236x/dc/90/cc/dc90cc0279247c04f99f0f07e1359100.jpg" },
        { title: "Psycho", artist: "Smyang Piano", file: "music9.mp3", cover: "https://i.pinimg.com/236x/53/1c/e0/531ce0f67f91b16d9b6e67c690a96e84.jpg" },
        { title: "Zero O'Clock", artist: "Smyang Piano", file: "music10.mp3", cover: "https://i.pinimg.com/236x/20/6c/76/206c76ac5938f6e38ab27f7b2d7391f1.jpg" },
        { title: "Candy", artist: "Bigbadbeats", file: "music11.mp3", cover: "https://i.pinimg.com/236x/0f/36/9a/0f369a52803a19db5c01ec71db8961e1.jpg" },
        { title: "Swim", artist: "Colin", file: "music12.mp3", cover: "https://i.pinimg.com/236x/fe/8e/d6/fe8ed650218816d28c8951c1b0b3a950.jpg" },
        { title: "Of Course I Love You", artist: "CIKI", file: "music13.mp3", cover: "https://i.pinimg.com/236x/07/df/fa/07dffa32b92ab8be197334f2b210d0d8.jpg" },
        { title: "Eternal Youth", artist: "RUDE", file: "music14.mp3", cover: "https://i.pinimg.com/236x/71/1c/d9/711cd9aa8932d3d3299d89b0506f7215.jpg" },
        { title: "Canon in D", artist: "Brooklyn Duo", file: "music15.mp3", cover: "https://i.pinimg.com/236x/cf/c3/38/cfc3381e10fb1b81c952bf4b99852939.jpg" },
        { title: "Black Swan", artist: "Smyang Piano", file: "music16.mp3", cover: "https://i.pinimg.com/originals/fb/d1/99/fbd199227854960de6131bb7e8d3774d.gif" },
        { title: "Death Bed", artist: "Lofi fruits music", file: "music17.mp3", cover: "https://i.pinimg.com/originals/e7/07/11/e707118b1c26dc36cd7fdd0c279bfaf4.gif" },
        { title: "5:32pm", artist: "The Deli", file: "music18.mp3", cover: "https://i.pinimg.com/236x/2f/45/a7/2f45a72558532f99f02de34624491ff2.jpg" },
        { title: "Lovely", artist: "Eric Godlow", file: "music19.mp3", cover: "https://i.pinimg.com/236x/c1/9d/29/c19d2927ce62d27688bf6c2ca3a5ab55.jpg" },
        { title: "Lofi-Chill 7", artist: "Max Rolls", file: "music20.mp3", cover: "https://i.pinimg.com/originals/a5/f0/5f/a5f05f2b8326abd955c787d446e30366.gif" },
        { title: "Still With You", artist: "Smyang Piano", file: "music21.mp3", cover: "https://i.pinimg.com/originals/6d/10/80/6d1080a7f06beb941e500898bf0fed5c.gif" }
    ];

    var $list = $(".flex-container");
    var players = [];       // Audio per track, created the first time it plays
    var current = null;     // index of the loaded track
    var playing = false;
    var cardWidth;          // collapsed card size, measured from the screen
    var openWidth;          // width of the card that is playing

    // --- sizing -----------------------------------------------------------
    //
    // The grid is cut to the screen rather than to a fixed card width: it takes
    // the whole window, so there is nothing to scroll to and the cards grow as
    // large as that allows. Where every card cannot be shown at a readable size
    // -- a phone, or a short window -- the cards are sized from the width alone
    // and the page scrolls, as it used to.
    //
    // Both sizes are published as CSS variables, which style.css builds the
    // cover, the info panel and the type sizes from.

    function columnCount(available) {
        var columns = Math.round(available / TARGET_CARD);
        return Math.min(MAX_COLS, Math.max(MIN_COLS, columns));
    }

    // Height between the top of the grid and the bottom of the window. Measured
    // from the document, so it does not change with how far the page is scrolled.
    function spaceForGrid() {
        var top = $list[0].getBoundingClientRect().top + window.pageYOffset;
        return window.innerHeight - top - BOTTOM_GAP;
    }

    // The largest square slot that still shows every card at once. Each column
    // count implies a row count, and the slot has to fit both the width a column
    // leaves and the height a row does, so the best of them is the one where
    // those two come closest. Returns null when even that is too small to read.
    //
    // Only column counts that leave OPEN_SLACK slots free in the last row are
    // considered: opening a card costs a slot, and the grid must not grow a row
    // under it, or the page would start scrolling as soon as something plays.
    function fittedSlot(availableWidth, availableHeight) {
        var best = null;

        for (var columns = MIN_COLS; columns <= tracks.length; columns++) {
            var rows = Math.ceil(tracks.length / columns);
            if (rows !== Math.ceil((tracks.length + OPEN_SLACK) / columns)) {
                continue;
            }

            var side = Math.min(availableWidth / columns, availableHeight / rows);
            // On a tie the wider grid wins: same card, less empty margin.
            if (!best || side >= best.side) {
                best = { side: side, rows: rows, columns: columns };
            }
        }

        return best && best.side - CARD_MARGIN * 2 >= FIT_MIN_CARD ? best : null;
    }

    // Whatever height the rows leave over is shared out between them, so the
    // grid reaches the bottom of the screen instead of sitting in a band at the
    // top. Only the vertical margin grows; the side margins set the columns.
    function rowGap(rows) {
        var spare = spaceForGrid() - rows * (cardWidth + CARD_MARGIN * 2);
        var extra = Math.max(0, Math.floor(spare / (rows * 2)));
        return CARD_MARGIN + Math.min(MAX_ROW_GAP, extra);
    }

    function sizeCards() {
        // Measured from the container, not the grid: the grid carries the
        // max-width set below, so measuring it would feed its own answer back in.
        var available = $list.parent().width() || window.innerWidth;
        var fit = fittedSlot(available, spaceForGrid());
        var slot = fit ? fit.side : available / columnCount(available);

        cardWidth = Math.max(MIN_CARD, Math.floor(slot) - CARD_MARGIN * 2);
        openWidth = cardWidth * 2 + INFO_GAP;   // cover beside the info panel

        var root = document.documentElement.style;
        root.setProperty("--card", cardWidth + "px");
        root.setProperty("--card-open", openWidth + "px");
        root.setProperty("--gap-y", (fit ? rowGap(fit.rows) : CARD_MARGIN) + "px");
        // Without this the row would simply take as many cards as its width
        // allows, which is more columns than the height was divided into.
        root.setProperty("--grid", fit ? fit.columns * (cardWidth + CARD_MARGIN * 2) + "px" : "none");
    }

    sizeCards();

    // jQuery leaves an inline width on every card it has animated, so those
    // have to be re-stated at the new size when the screen changes.
    $(window).on("resize", function () {
        sizeCards();
        $list.children(".moldura").each(function () {
            this.style.width = ($(this).hasClass(OPEN_CLASS) ? openWidth : cardWidth) + "px";
        });
        rememberPositions();
    });

    // --- build the cards --------------------------------------------------

    tracks.forEach(function (track) {
        $list.append(
            $("<div>", { "class": "moldura" }).append(
                $("<img>", { src: track.cover, alt: track.title }),
                $("<div>", { "class": "info" }).append(
                    $("<p>", { "class": "nome", text: EMPTY_LABEL }),
                    button("btn-prev", "skip_previous"),
                    button("btn-pause", "play_arrow"),
                    button("btn-next", "skip_next")
                )
            )
        );
    });

    function button(className, icon) {
        return $("<span>", {
            "class": "material-symbols-rounded " + className,
            text: icon
        });
    }

    // --- events -----------------------------------------------------------

    $list.on("click", "img, .btn-pause", function () {
        select(indexOfCard(this));
    });

    $list.on("click", ".btn-prev, .btn-next", function () {
        var step = $(this).hasClass("btn-prev") ? -1 : 1;
        var pos = indexOfCard(this) + step;
        select((pos + tracks.length) % tracks.length);
    });

    // --- player -----------------------------------------------------------

    function select(i) {
        if (i === current && playing) {
            pause();
        } else {
            play(i);
        }
    }

    function play(i) {
        closeOthers(i);
        current = i;
        playing = true;
        playerFor(i).play();

        var track = tracks[i];
        var $card = cardFor(i);
        $card.children(".info").children(".nome")
            .html(track.title + '<br><span class="artist">' + track.artist + "</span>");
        $card.children(".info").children(".btn-pause").text("pause");
        $card.addClass(OPEN_CLASS);

        layout(i, true);
    }

    function pause() {
        playerFor(current).pause();
        playing = false;
        cardFor(current).children(".info").children(".btn-pause").text("play_arrow");
        layout(current, false);
    }

    // Closes every open card except the one at `keep`: stops its audio and
    // puts its label and icon back. The width is handled by layout().
    function closeOthers(keep) {
        $list.children(".moldura." + OPEN_CLASS).each(function () {
            var i = $(this).index();
            if (i === keep) {
                return;
            }
            release(i);
        });
    }

    function release(i) {
        var player = players[i];
        if (player) {
            player.pause();
            player.currentTime = 0;
        }

        var $card = cardFor(i);
        $card.children(".info").children(".nome").text(EMPTY_LABEL);
        $card.children(".info").children(".btn-pause").text("play_arrow");
        $card.removeClass(OPEN_CLASS);
    }

    // Animates the cards into place: the open ones collapse first, and only
    // once they are closed does `active` expand. Each card gets a single
    // animation with its full target state -- animating the set in two passes
    // lets the second .stop() kill the first and leaves a card half open.
    function layout(active, dimOthers) {
        var $cards = $list.children(".moldura");
        var $active = $cards.eq(active);
        var $others = $cards.not($active);

        rememberPositions();

        // The card being closed and the one being opened move together. They
        // are disjoint sets, each with a single animation covering its whole
        // target state, so neither .stop() cuts the other one short.
        $others.stop(true).animate({
            opacity: dimOthers ? "0.5" : "1",
            width: cardWidth + "px"
        }, { duration: CLOSE_SPEED, step: scanThisFrame });

        $active.stop(true).animate({
            opacity: "1",
            width: openWidth + "px"
        }, { duration: OPEN_SPEED, step: scanThisFrame });
    }

    // --- smooth reflow ----------------------------------------------------
    //
    // While a card grows or shrinks, the cards beside it slide along with it
    // one frame at a time, which already looks smooth. What does not is a card
    // wrapping to another row: it leaves its slot and reappears somewhere else
    // in a single frame, and every card after it shifts a slot too. So each
    // frame we look for a card that moved too far to have just drifted, put it
    // back where it was, and let the CSS transition carry it over.

    var positions = [];     // layout position of each card, as of the last frame
    var lastScan = 0;

    function rememberPositions() {
        positions = $list.children(".moldura").map(function () {
            // offsetLeft/offsetTop are layout positions: unlike getBoundingClientRect
            // they ignore the transform a card may still be sliding under.
            return { left: this.offsetLeft, top: this.offsetTop };
        }).get();
    }

    // jQuery calls step once per animated property per card -- forty times a
    // frame here -- so sweep at most once every half frame.
    function scanThisFrame() {
        var now = Date.now();
        if (now - lastScan < SCAN_GAP) {
            return;
        }
        lastScan = now;
        slideWrappedCards();
    }

    function slideWrappedCards() {
        var moves = [];
        var wrapped = false;

        $list.children(".moldura").each(function (i) {
            var was = positions[i];
            var left = this.offsetLeft;
            var top = this.offsetTop;

            if (was) {
                var dx = was.left - left;
                var dy = was.top - top;
                if (dx || dy) {
                    moves.push({ card: this, dx: dx, dy: dy });
                }
                if (dy) {
                    wrapped = true;     // only a change of row moves a card vertically
                }
            }
            positions[i] = { left: left, top: top };
        });

        // Cards drifting sideways as their neighbour grows already look smooth,
        // and how far they drift per frame depends on the frame rate, so that
        // is no way to spot a jump. A card changing rows is: it happens in one
        // frame, and it deals every card after it a new slot at the same moment,
        // so when one wraps, slide everything that moved with it.
        if (!wrapped) {
            return;
        }
        moves.forEach(function (move) {
            slideFrom(move.card, move.dx, move.dy);
        });
    }

    // Drops the card back at its old spot with no transition, then hands it
    // back to the stylesheet, which glides it to where it now belongs.
    function slideFrom(card, dx, dy) {
        card.style.transition = "none";
        card.style.transform = "translate(" + dx + "px, " + dy + "px)";
        void card.offsetWidth;      // flush, so the move below is animated
        card.style.transition = "";
        card.style.transform = "";
    }

    function playerFor(i) {
        if (!players[i]) {
            players[i] = new Audio(MUSIC_DIR + tracks[i].file);
            players[i].loop = true;
        }
        return players[i];
    }

    function cardFor(i) {
        return $list.children(".moldura").eq(i);
    }

    function indexOfCard(element) {
        return $(element).closest(".moldura").index();
    }
})


// --- pointer trail --------------------------------------------------------
//
// A ribbon of colour that follows the pointer across the wallpaper and fades
// behind it. It lives on a fixed canvas under the cards, so nothing it draws
// can be clicked. Points are kept with the time they were made and the whole
// trail is redrawn each frame, which keeps the canvas transparent -- fading by
// painting over it would need an opaque background to paint with.

$(function () {
    var TRAIL_LIFE = 650;    // ms a point takes to fade out
    var TRAIL_WIDTH = 22;    // px, stroke width at the pointer
    var MAX_POINTS = 70;     // longest ribbon we keep
    var HEAD_GLOW = 26;      // px radius of the blob at the pointer itself

    var canvas = document.getElementById("trail");
    if (!canvas || !canvas.getContext) {
        return;
    }
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    var ctx = canvas.getContext("2d");
    var points = [];
    var frame = null;

    // The canvas is sized in device pixels and scaled back to CSS pixels, so
    // the ribbon is not soft on a retina screen.
    function resize() {
        var ratio = window.devicePixelRatio || 1;
        canvas.width = Math.round(window.innerWidth * ratio);
        canvas.height = Math.round(window.innerHeight * ratio);
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    resize();
    $(window).on("resize", resize);

    // Hue drifts with time rather than with the pointer, so a slow movement
    // still lays down a mix of colours instead of one flat streak.
    function hueNow(now) {
        return 200 + 70 * Math.sin(now / 1400);
    }

    function addPoint(x, y) {
        var now = Date.now();
        points.push({ x: x, y: y, t: now, hue: hueNow(now) });
        if (points.length > MAX_POINTS) {
            points.shift();
        }
        if (frame === null) {
            frame = window.requestAnimationFrame(draw);
        }
    }

    function draw() {
        frame = null;

        var now = Date.now();
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        // Drop what has faded out before drawing, so the trail stops once the
        // pointer does and the loop below has nothing left to do.
        while (points.length && now - points[0].t > TRAIL_LIFE) {
            points.shift();
        }

        // "lighter" adds the segments together where they overlap, which is
        // what makes the ribbon glow where it doubles back on itself.
        ctx.globalCompositeOperation = "lighter";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (var i = 1; i < points.length; i++) {
            var from = points[i - 1];
            var to = points[i];
            var fade = 1 - (now - to.t) / TRAIL_LIFE;
            var colour = "hsla(" + to.hue.toFixed(0) + ", 95%, 72%, ";

            ctx.strokeStyle = colour + (fade * 0.45).toFixed(3) + ")";
            ctx.lineWidth = TRAIL_WIDTH * fade;
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.lineTo(to.x, to.y);
            ctx.stroke();
        }

        drawHead(now);
        ctx.globalCompositeOperation = "source-over";

        if (points.length) {
            frame = window.requestAnimationFrame(draw);
        }
    }

    // A soft blob at the newest point, so the ribbon has something to come from.
    function drawHead(now) {
        var head = points[points.length - 1];
        if (!head) {
            return;
        }

        var fade = 1 - (now - head.t) / TRAIL_LIFE;
        var glow = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, HEAD_GLOW);
        glow.addColorStop(0, "hsla(" + head.hue.toFixed(0) + ", 95%, 80%, " + (fade * 0.5).toFixed(3) + ")");
        glow.addColorStop(1, "hsla(" + head.hue.toFixed(0) + ", 95%, 80%, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(head.x, head.y, HEAD_GLOW, 0, Math.PI * 2);
        ctx.fill();
    }

    $(document).on("mousemove", function (event) {
        addPoint(event.clientX, event.clientY);
    });

    // A finger drags a trail too; the page itself scrolls as usual.
    $(document).on("touchmove", function (event) {
        var touch = event.originalEvent.touches[0];
        if (touch) {
            addPoint(touch.clientX, touch.clientY);
        }
    });
});
