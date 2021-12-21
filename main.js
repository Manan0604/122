x = 0;
y = 0;
draw_circle="";
draw_rect="";
draw_square="";
draw_hexagon="";
draw_decagon="";
draw_apple="";
speak_data="";
to_number="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening please speak";
    recognition.start();
}

function preload(){
    apple=loadImage("apple.png");
}

function speak(){
    var synth=window.speechSynthesis;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data="";
}

recognition.onresult=function(event){

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML="The Speech has been recognized as: "+content;

    if(content=="apple"){
        document.getElementById("status").innerHTML="Started Drawing Apple";
        to_number=Number(content);
        console.log(to_number);
        draw_apple="set";
    }

    if (content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing circle";
        draw_circle="set";
    }

    if (content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing rectangle";
        draw_rect="set";
    }

    if (content=="square"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing square";
        draw_square="set";
    }

    if (content=="decagon"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing decagon";
        draw_decagon="set";
    }

    if (content=="hexagon"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started drawing hexagon";
        draw_hexagon="set";
    }
}

    function setup(){
        screenWidth = window.innerWidth;
        screenHeight=window.innerHeight;
        canvas=createCanvas(screenWidth,screenHeight-150);
        canvas.position(0,150);
    }

    function draw(){

        if(draw_apple=="set"){
            document.getElementById("status").innerHTML=to_number + "Apple is Drawn";
            draw_apple="";
            speak_data=to_number+"Apple is Drawn"
            speak();
            for(var i=1; i<= to_number; i++){
                x=Math.floor(Math.random()*700);
                y=Math.floor(Math.random()*400);
                image(apple,x,y,50,50);
            }
        }
        
        if(draw_circle=="set"){
            radius = Math.floor(Math.random()*100);
            circle(x,y,radius);
            document.getElementById("status").innerHTML="Circle is drawn. ";
            draw_circle="";
        }

        if(draw_rect=="set"){
            rect(x,y,70,50);
            document.getElementById("status").innerHTML="Rectangle is drawn. ";
            draw_rect="";
        }

        if(draw_square=="set"){
            square(x,y,50);
            document.getElementById("status").innerHTML="Square is drawn. ";
            draw_square="";
        }

        if(draw_decagon=="set"){
            polygon(x,y,70,10);
            document.getElementById("status").innerHTML="Decagon is drawn. ";
            draw_decagon="";
        }

        if(draw_hexagon=="set"){
            polygon(x,y,70,6);
            document.getElementById("status").innerHTML="Hexagon is drawn. ";
            draw_hexagon="";
        }
    }

    function polygon(x, y, radius, npoints) {
        let angle = TWO_PI / npoints;
        beginShape();
        for (let a = 0; a < TWO_PI; a += angle) {
          let sx = x + cos(a) * radius;
          let sy = y + sin(a) * radius;
          vertex(sx, sy);
        }
        endShape(CLOSE);
      }