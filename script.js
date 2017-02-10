var muz;
var k = 0;
var choose = 4;
var p = new Audio()
p.src = 'promo.mp3';
p.play();
function music(muz){

  switch(muz){
    case 1:
        mo = 0;
        document.getElementById("activecasseta").style.display = "block";
        document.getElementById("cass").style.backgroundImage = "url(img/menu/casseta.png)";
        if(choose != 1){
            p.pause();
            p.currentTime = 0;
            k = 0;
        }
        if(k == 0){
            document.getElementById("myzuka").style.top = "-150px";
            document.getElementById("openclose").style.backgroundImage = "url(img/menu/closed.png)";
            p.src = 'promo1.mp3';
            p.play();
            k = 1;
            choose = 1;
        }
        else{
            document.getElementById("activecasseta").style.display = "none";
            p.pause();
            p.currentTime = 0;
            k = 0;
        }
    break;
    case 2:
        mo = 0;
        document.getElementById("activecasseta").style.display = "block";
        document.getElementById("cass").style.backgroundImage = "url(img/menu/casseta2.png)";
        if(choose != 2){
            p.pause();
            p.currentTime = 0;
            k = 0;
        }
        if(k == 0){
            document.getElementById("myzuka").style.top = "-150px";
            document.getElementById("openclose").style.backgroundImage = "url(img/menu/closed.png)";
            p.src = 'promo2.mp3';
            p.play();
            k = 1;
            choose = 2;
        }
        else{
            document.getElementById("activecasseta").style.display = "none";
            p.pause();
            p.currentTime = 0;
            k = 0;
        }
    break;
    case 3:
        mo = 0;
        document.getElementById("activecasseta").style.display = "block";
        document.getElementById("cass").style.backgroundImage = "url(img/menu/casseta3.png)";
        if(choose != 3){
            p.pause();
            p.currentTime = 0;
            k = 0;
        }
        if(k == 0){
            document.getElementById("myzuka").style.top = "-150px";
            document.getElementById("openclose").style.backgroundImage = "url(img/menu/closed.png)";
            p.src = 'promo3.mp3';
            p.play();
            k = 1;
            choose = 3;
        }
        else{
            document.getElementById("activecasseta").style.display = "none";
            p.pause();
            p.currentTime = 0;
            k = 0;
        }
    break;
    case 4:
        document.getElementById("activecasseta").style.display = "none";
        document.getElementById("myzuka").style.top = "-150px";
        document.getElementById("openclose").style.backgroundImage = "url(img/menu/closed.png)";
        document.getElementById("cass").style.backgroundImage = "none";
            p.pause();
            p.currentTime = 0;
            k = 0;
            mo = 0;
    break;
  }
}
var o = 0;
function sounds(){
  if(o == 0){
    document.getElementById("openclose").style.backgroundImage = "url(img/menu/open.png)";
    document.getElementById("activecasseta").style.display = "none";
    p.pause();
    p.currentTime = 0;
    k = 0;
    o = 1;
  }
  else{
   document.getElementById("openclose").style.backgroundImage = "url(img/menu/closed.png)";
   o = 0;
  }
}
var mo = 0;
function opensound(){
   if(mo == 0){
        document.getElementById("myzuka").style.top = "0px";
        mo = 1;
   }
   else{
        document.getElementById("myzuka").style.top = "-150px";
        mo = 0;
   }
}
var left = 0;
function slidright(){
  switch(left){
    case 0:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/1.jpg)";
        left++;
        break;
    case 1:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/2.jpg)";
        left++;
        break;
    case 2:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/3.jpg)";
        left++;
        break;
    case 3:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/4.jpg)";
        left++;
        break;
    case 4:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/5.jpg)";
        left++;
        break;
    case 5:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/0.jpg)";
        left = 0;
        break;
  }
}
function slidleft(){
  switch(left){
    case 0:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/5.jpg)";
        left = 5;
        break;
    case 1:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/0.jpg)";
        left--;
        break;
    case 2:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/1.jpg)";
        left--;
        break;
    case 3:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/2.jpg)";
        left--;
        break;
    case 4:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/3.jpg)";
        left--;
        break;
    case 5:
        document.getElementById("slider").style.backgroundImage = "url(img/gallery/4.jpg)";
        left--;
        break;
  }
}
var ws = new Audio()
ws.src = 'wolf.mp3';
function wolfspeak(){
    ws.pause();
    ws.currentTime = 0;
    ws.play();
}
p.volume = 1;
var vol;
function fvolume(vol){
  switch(vol){
    case 1: p.volume+=0.05; break;
    case 2: p.volume-=0.05; break;
  }

}