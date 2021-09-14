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
    var idmus = null;
    var tocando = false;
    $("img").click(function(){
        if($(this).attr("id") == idmus){ //is its the same song
            if(tocando == false){
                musicaAtual.play();
                musicaAtual.loop = true;
                tocando = true;
                /*$(this).parents(".moldura").css("background-color","rgba(240, 255, 255, 0.521)")*/
                $(".moldura").animate({
                    opacity: "0.5"
                }, 500);
                $(this).parents(".moldura").animate({
                    opacity: "1"
                }, 500);
            }else{
                musicaAtual.pause();
                tocando = false;
                $(".moldura").animate({
                    opacity: "1"
                }, 500);
                $(".moldura").css("background-color","#f1f1f160")
            }
        }else{

            if(idmus != null){
                musicaAtual.pause();
                $(".moldura").animate({
                    opacity: "1"
                }, 500);
                $(".moldura").css("background-color","#f1f1f160")
            }

            idmus = $(this).attr("id");
            if(idmus == "mus1"){
                $('body').css("background-image",'url(https://i.pinimg.com/originals/7d/53/6f/7d536ff8d123c1012001251b67d6fdbf.gif)')
                musicaAtual = new Audio(musica1)}
            else if(idmus == "mus2"){
                $('body').css("background-image",'url(https://i.pinimg.com/originals/db/ce/9c/dbce9cb8ea4ecdbeeb8faecbec1f2ae1.gif)')
                musicaAtual = new Audio(musica2)}
            else if(idmus == "mus3"){
                $('body').css("background-image",'url(https://wallpaperaccess.com/full/3517019.gif)')
                musicaAtual = new Audio(musica3)}
            else if(idmus == "mus4"){
                $('body').css("background-image",'url(https://cdn.statically.io/img/i.pinimg.com/originals/41/e4/9e/41e49e944ea42004632b68e85dba25c7.gif)')
                musicaAtual = new Audio(musica4)}
            else if(idmus == "mus5"){
                $('body').css("background-image",'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kWtjig5Bk4L9udbPDEdvTEMPbwT3mVGm9A&usqp=CAU)')
                musicaAtual = new Audio(musica5)}
            else if(idmus == "mus6"){
                $('body').css("background-image",'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7kWtjig5Bk4L9udbPDEdvTEMPbwT3mVGm9A&usqp=CAU)')
                musicaAtual = new Audio(musica6)}
            else if(idmus == "mus7"){
                $('body').css("background-image",'url(https://wallpaperaccess.com/full/2641063.gif)')
                musicaAtual = new Audio(musica7)}
            else if(idmus == "mus8"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica8)}
            else if(idmus == "mus9"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica9)}
            else if(idmus == "mus10"){
                $('body').css("background-image",'url(https://64.media.tumblr.com/dbcda2262f200f5359f81338584389a9/tumblr_pilfxkyr921we9f2ro2_r2_1280.gifv)')
                musicaAtual = new Audio(musica10)}
            else if(idmus == "mus11"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica11)}
            else if(idmus == "mus12"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica12)}
            else if(idmus == "mus13"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica13)}
            else if(idmus == "mus14"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica14)}
            else if(idmus == "mus15"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica15)}
            else if(idmus == "mus16"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica16)}
            else if(idmus == "mus17"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica17)}
            else if(idmus == "mus18"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica18)}
            else if(idmus == "mus19"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica19)}
            else if(idmus == "mus20"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica20)}
            else if(idmus == "mus21"){
                $('body').css("background-image",'url()')
                musicaAtual = new Audio(musica21)}
            /*$(this).parents(".moldura").css("background-color","rgba(240, 255, 255, 0.521)")*/
            $(".moldura").animate({
                opacity: "0.5"
            }, 500);
            $(this).parents(".moldura").animate({
                opacity: "1"
            }, 500);
            musicaAtual.play();
            musicaAtual.loop = true;
            tocando = true;
        }
    })
})