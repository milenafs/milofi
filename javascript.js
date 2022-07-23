$(function(){
    var musica1 = "Musics/music1.mp3";
    var musica2 = "Musics/music2.mp3";
    var musica3 = "Musics/music3.mp3";
    var musica4 = "Musics/music4.mp3";
    var musica5 = "Musics/music5.mp3";
    var musica6 = "Musics/music6.mp3";
    var musica7 = "Musics/music7.mp3";
    var musica8 = "Musics/music8.mp3";
    var musica9 = "Musics/music9.mp3";
    var musica10 = "Musics/music10.mp3";
    var musica11 = "Musics/music11.mp3";
    var musica12 = "Musics/music12.mp3";
    var musica13 = "Musics/music13.mp3";
    var musica14 = "Musics/music14.mp3";
    var musica15 = "Musics/music15.mp3";
    var musica16 = "Musics/music16.mp3";
    var musica17 = "Musics/music17.mp3";
    var musica18 = "Musics/music18.mp3";
    var musica19 = "Musics/music19.mp3";
    var musica20 = "Musics/music20.mp3";
    var musica21 = "Musics/music21.mp3";
    var musicaAtual;
    var nomeMusica;
    var cantor;
    var idmus = null;
    var tocando = false;
    $("img").click(function(){
        if($(this).attr("id") == idmus){ //is its the same song
            PlayMusic($(this));
        }else{
            if(idmus != null){ // changed song
                musicaAtual.pause();
                tocando = false
                $(".moldura").animate({
                    opacity: "1",
                    width: "140px"
                }, 500);
                $(".moldura").css("background-color","#f1f1f160")
            }

            idmus = $(this).attr("id");
            if(idmus == "mus1"){
                //$('body').css("background-image",'url(https://i.pinimg.com/originals/7d/53/6f/7d536ff8d123c1012001251b67d6fdbf.gif)')
                nomeMusica = "Epiphany";
                cantor = "Smyang Piano";
                musicaAtual = new Audio(musica1)}
            else if(idmus == "mus2"){
                //$('body').css("background-image",'url(https://i.pinimg.com/originals/db/ce/9c/dbce9cb8ea4ecdbeeb8faecbec1f2ae1.gif)')
                nomeMusica = "Promise";
                cantor = "Smyang Piano";
                musicaAtual = new Audio(musica2)}
            else if(idmus == "mus3"){
                //$('body').css("background-image",'url(https://wallpaperaccess.com/full/3517019.gif)')
                nomeMusica = "Serendipity";
                cantor = "Smyang Piano";
                musicaAtual = new Audio(musica3)}
            else if(idmus == "mus4"){
                //$('body').css("background-image",'url(https://cdn.statically.io/img/i.pinimg.com/originals/41/e4/9e/41e49e944ea42004632b68e85dba25c7.gif)')
                nomeMusica = "Winter Bear";
                cantor = "Smyang Piano";
                musicaAtual = new Audio(musica4)}
            else if(idmus == "mus5"){
                //$('body').css("background-image",'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kWtjig5Bk4L9udbPDEdvTEMPbwT3mVGm9A&usqp=CAU)')
                nomeMusica = "Sweet Night";
                cantor = "Smyang Piano";
                
                musicaAtual = new Audio(musica5)}
            else if(idmus == "mus6"){
                //$('body').css("background-image",'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kWtjig5Bk4L9udbPDEdvTEMPbwT3mVGm9A&usqp=CAU)')
                nomeMusica = "Rain";
                cantor = "Nature";
                musicaAtual = new Audio(musica6)}
            else if(idmus == "mus7"){
                //$('body').css("background-image",'url(https://wallpaperaccess.com/full/2641063.gif)')
                nomeMusica = "Without Love";
                cantor = "Titus";
                musicaAtual = new Audio(musica7)}
            else if(idmus == "mus8"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Strangers";
                cantor = "Biosphere";
                musicaAtual = new Audio(musica8)}
            else if(idmus == "mus9"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Psycho";
                cantor = "Smyang Piano";
                musicaAtual = new Audio(musica9)}
            else if(idmus == "mus10"){
                //$('body').css("background-image",'url(https://64.media.tumblr.com/dbcda2262f200f5359f81338584389a9/tumblr_pilfxkyr921we9f2ro2_r2_1280.gifv)')
                nomeMusica = "Zero O'Clock";
                cantor = "Smyang Piano";
                musicaAtual = new Audio(musica10)}
            else if(idmus == "mus11"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Candy";
                cantor = "Bigbadbeats";
                musicaAtual = new Audio(musica11)}
            else if(idmus == "mus12"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Swim";
                cantor = "Colin";
                musicaAtual = new Audio(musica12)}
            else if(idmus == "mus13"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Of Course I Love You";
                cantor = "CIKI";
                musicaAtual = new Audio(musica13)}
            else if(idmus == "mus14"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Eternal Youth";
                cantor = "RUDE";
                musicaAtual = new Audio(musica14)}
            else if(idmus == "mus15"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Canon in D";
                cantor = "Brooklyn Duo";
                musicaAtual = new Audio(musica15)}
            else if(idmus == "mus16"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Black Swan";
                cantor = "Smyang Piano";
                musicaAtual = new Audio(musica16)}
            else if(idmus == "mus17"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Death Bed";
                cantor = "Lofi fruits music";
                musicaAtual = new Audio(musica17)}
            else if(idmus == "mus18"){
                //$('body').css("background-image",'url()')
                nomeMusica = "5:32pm";
                cantor = "The Deli";
                musicaAtual = new Audio(musica18)}
            else if(idmus == "mus19"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Lovely";
                cantor = "Eric Godlow";
                musicaAtual = new Audio(musica19)}
            else if(idmus == "mus20"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Lofi-Chill 7";
                cantor = "Max Rolls";
                musicaAtual = new Audio(musica20)}
            else if(idmus == "mus21"){
                //$('body').css("background-image",'url()')
                nomeMusica = "Still With You";
                cantor = "Smyang Piano";
                musicaAtual = new Audio(musica21)}
            /*$(this).parents(".moldura").css("background-color","rgba(240, 255, 255, 0.521)")*/
            PlayMusic($(this))
        }
    })
    $(".btn-prev").click(function(){
        var molduras = $(".moldura")
        var pos = molduras.index($(this).parents(".info").parents(".moldura"))
        if(pos == 0)
            pos = molduras.length -1
        else
            pos--;
        $(".moldura").eq(pos).children("img").trigger("click");
    })  
    $(".btn-pause").click(function(){
        PlayMusic($(this).parents(".info").parents(".moldura").children("img"))
    })
    $(".btn-next").click(function(){
        var molduras = $(".moldura")
        var pos = molduras.index($(this).parents(".info").parents(".moldura"))
        if(pos == molduras.length -1)
            pos = 0
        else
            pos++;
        $(".moldura").eq(pos).children("img").trigger("click");
    })

    function PlayMusic(img){
        if(tocando == false){
            musicaAtual.play();
            musicaAtual.loop = true;
            tocando = true;
            $(".moldura").animate({
                opacity: "0.5"
            }, 500);
            img.parents(".moldura").children(".info").children(".nome").html(nomeMusica + "<br><spam style=\"font-size:15px\">" + cantor + "</spam>");
            img.parents(".moldura").children(".info").children(".btn-pause").html("pause")
            /*$(this).parents(".moldura").css("background-color","rgba(240, 255, 255, 0.521)")*/
            $(".moldura").animate({
                opacity: "0.5"
            }, 500);
            img.parents(".moldura").animate({
                opacity: "1",
                width:"300px"
            }, 500);
        }else{
            musicaAtual.pause();
            tocando = false;
            img.parents(".moldura").children(".info").children(".btn-pause").html("play_arrow")
            
            $(".moldura").animate({
                opacity: "1"
            }, 500);
            $(".moldura").css("background-color","#f1f1f160")
        }
    }
})