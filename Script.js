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
$(function(){

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
                
                musicaAtual = new Audio(musica1)}
            else if(idmus == "mus2"){
                
                musicaAtual = new Audio(musica2)}
            else if(idmus == "mus3"){
               
                musicaAtual = new Audio(musica3)}
            else if(idmus == "mus4"){
               
                musicaAtual = new Audio(musica4)}
            else if(idmus == "mus5"){
                
                musicaAtual = new Audio(musica5)}
            else if(idmus == "mus6"){
                
                musicaAtual = new Audio(musica6)}
            else if(idmus == "mus7"){
               
                musicaAtual = new Audio(musica7)}
            else if(idmus == "mus8"){
               
                musicaAtual = new Audio(musica8)}
            else if(idmus == "mus9"){
                
                musicaAtual = new Audio(musica9)}
            else if(idmus == "mus10"){
             
                musicaAtual = new Audio(musica10)}
            else if(idmus == "mus11"){
               
                musicaAtual = new Audio(musica11)}
            else if(idmus == "mus12"){
               
                musicaAtual = new Audio(musica12)}
            else if(idmus == "mus13"){
              
                musicaAtual = new Audio(musica13)}
            else if(idmus == "mus14"){
               
                musicaAtual = new Audio(musica14)}
            else if(idmus == "mus15"){
               
                musicaAtual = new Audio(musica15)}
            else if(idmus == "mus16"){
               
                musicaAtual = new Audio(musica16)}
            else if(idmus == "mus17"){
             
                musicaAtual = new Audio(musica17)}
            else if(idmus == "mus18"){
              
                musicaAtual = new Audio(musica18)}
            else if(idmus == "mus19"){
              
                musicaAtual = new Audio(musica19)}
            else if(idmus == "mus20"){
             
                musicaAtual = new Audio(musica20)}
            else if(idmus == "mus21"){
                
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