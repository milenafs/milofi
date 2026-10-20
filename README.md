# MiLofi+ 🎧🎵

> A lofi player to leave open in a tab: 21 tracks, one cover each, nothing else on the page.

**[Open the site](https://milenafs.github.io/milofi/)** · [Figma](https://www.figma.com/file/PLjLUCkWP5M4HOQAMoc9ZR/MiLofi%2B?type=design&node-id=2-2&mode=design&t=spYjUJeALSZrgK53-0)

<video src="https://raw.githubusercontent.com/milenafs/milofi/main/demo.mp4" controls muted loop playsinline width="100%">
  <a href="demo.mp4">demo.mp4</a>
</video>

## What it does

- Click a cover to play it. The card opens in place into a small player with previous, pause and next, and every other card dims.
- The grid is cut to your window: the covers grow to fill it and there is nothing to scroll to. A phone, or a window too short to show every cover at a readable size, falls back to two columns and scrolls.
- The wallpaper is colour only — a dark base under two washes of soft gradients that drift at different speeds — and a pointer trail follows the cursor behind the cards.

## Running it locally

```bash
git clone git@github.com:milenafs/milofi.git
cd milofi
python3 -m http.server 8000
```

Then open <http://localhost:8000>. There is no build step: it is plain HTML, CSS and JavaScript, with jQuery and the fonts coming from a CDN. Opening `index.html` straight from the file system works too, though some browsers refuse to load the audio that way.

## Adding a song

Drop the file in `Musics/` and add one entry to the `tracks` list at the top of `javascript.js`:

```js
{ title: "Epiphany", artist: "Smyang Piano", file: "music1.mp3", cover: "https://..." }
```

That list is the only place a track is written down — the card and the player are both built from it, so nothing else needs touching.

## Layout notes

`javascript.js` sizes the cards and publishes `--card`, `--card-open`, `--gap-y` and `--grid` as CSS variables; `style.css` measures the cover, the info panel and every type size in them. It picks the column count whose square card is largest while the whole grid still fits the window, and skips any count that would leave no room for a card to open, so playing something never starts the page scrolling.

## Credits

Music by the artists credited on each card. Cover art collected on Pinterest.
