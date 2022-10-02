let music=new Audio("music.mp3");
music.play();

// Movement of Eagle
document.onkeydown=function(e){
    if(e.keyCode==38){
        eagl=document.querySelector(".eagle");
        eagleup=parseInt(window.getComputedStyle(eagl,null).getPropertyValue('top'));
        if(eagleup==50){
              eagle.style.top=eagleup;
        }
        else {
            console.log(eagleup);
            eagl.style.top=(eagleup-10)+'px';
        }
    }
    if(e.keyCode==40){
        eagl=document.querySelector(".eagle");
        eagledown=parseInt(window.getComputedStyle(eagl,null).getPropertyValue('top'));
        if(eagledown==490){
            eagle.style.top=eagledown;
      }
      else {
          
          eagl.style.top=(eagledown+10)+'px';
      }     
    }
    if(e.keyCode==39){
        eagl=document.querySelector(".eagle");
        eagleright=parseInt(window.getComputedStyle(eagl,null).getPropertyValue('left'));
        if(eagleright==1180){
            eagle.style.left=eagleright;
      }
      else {
          console.log(eagleright);
          eagl.style.left=(eagleright+10)+'px';
      }     
    }
    if(e.keyCode==37){
        eagl=document.querySelector(".eagle");
        eagleleft=parseInt(window.getComputedStyle(eagl,null).getPropertyValue('left'));
        if(eagleleft==0){
            eagle.style.left=eagleleft;
      }
      else {
          console.log(eagleleft);
          eagl.style.left=(eagleleft-10)+'px';
      }     
    }
}
//  Checking Collision
 let flag=0;
 let flag2=0;
setInterval(() => {
    eagle=document.querySelector(".eagle");
    cloud=document.querySelector(".cloud");
    cloud2=document.querySelector(".cloud2");
    cloud3=document.querySelector(".cloud3");
    // eagle
    ey=parseInt(window.getComputedStyle(eagle,null).getPropertyValue("top"))
    ex=parseInt(window.getComputedStyle(eagle,null).getPropertyValue("left"))
  //  !st cloud
    cy=parseInt(window.getComputedStyle(cloud,null).getPropertyValue("top"))
    cx=parseInt(window.getComputedStyle(cloud,null).getPropertyValue("left"))
  // Third cloud
    c2x=parseInt(window.getComputedStyle(cloud2,null).getPropertyValue("left"))
    c2y=parseInt(window.getComputedStyle(cloud2,null).getPropertyValue("top"))
    // Middle Cloud
    c3x=parseInt(window.getComputedStyle(cloud3,null).getPropertyValue("left"))
    c3y=parseInt(window.getComputedStyle(cloud3,null).getPropertyValue("top"))
    OffsetX=Math.abs(ex-cx);
    OffsetY=Math.abs(ey-cy);
    OffsetX2=Math.abs(c2x-ex);
    OffsetY2=Math.abs(ey-c2y);
    OffsetX3=Math.abs(c3x-ex);
    OffsetY3=Math.abs(ey-c3y);
    
    if((OffsetX<95 && OffsetY<78)||(OffsetX2<95&&OffsetY2<75)||(OffsetX3<95 && OffsetY3<75)){
        cloud.style.animationPlayState='paused';
       cloud2.style.animationPlayState='paused';
       cloud3.style.animationPlayState='paused';
        flag=1;
   
        document.onkeydown = (evt) => {
            const cancelKeypress = /^(37|38|39|40)$/.test(evt.keyCode.toString());
            if (cancelKeypress) {
              evt.preventDefault()
            }
          };
   gameOver=document.querySelector(".gameOver").innerHTML="GAME OVER (Reload to play)";
  
     
    }
   
}, 1);

    let Score=0
  // Changing position of 1st cloud
    let count1=1;
setInterval(() => {
    
    cloud=document.querySelector(".cloud");
 
    
   if(flag==0){
     if(cloud.style.animationPlayState='running' ){
        Score+=5;
    }
}
if(flag==0){
  top1=parseInt(window.getComputedStyle(cloud,null).getPropertyValue('top'));
  if(count1==1){
     cloud.style.top=(top1+60)+'px';
  }
  if(count1==2){
    cloud.style.top=(top1-70)+'px';
 }
 if(count1==3){
    cloud.style.top=(top1+40)+'px';
    count1=0;
 }
 if(count1==4){
    cloud.style.top=(top1-40)+'px';
 }
 if(count1==5){
   cloud.style.top=(top1+10)+'px';
   count1=0;
}

    score=document.querySelector('.score');
    score.innerHTML="Score : "+Score;
  count1++;
}
},6000);
// Changing position of 3rd cloud
let count2=1;
setInterval(() => {
    
    cloud2=document.querySelector(".cloud2");

    
   if(flag==0){
     if(cloud2.style.animationPlayState='running' ){
        Score+=5;
    }
}
if(flag==0){
top1=parseInt(window.getComputedStyle(cloud2,null).getPropertyValue('top'));
if(count2==1){
   cloud2.style.top=(top1+90)+'px';
}
if(count2==2){
  cloud2.style.top=(top1-100)+'px';
}
if(count2==3){
  cloud2.style.top=(top1+30)+'px';
  
}

if(count2==4){
    cloud2.style.top=(top1+70)+'px';
    
  }
  
if(count2==5){
    cloud2.style.top=(top1-90)+'px';
    count2=0;
  }
    score=document.querySelector('.score');
    score.innerHTML="Score : "+Score;
    count2++;
}
}, 7000);
// Changing position of Middle cloud
let count3=1;
setInterval(() => {
    
    cloud3=document.querySelector(".cloud3");

    
   if(flag==0){
     if(cloud3.style.animationPlayState='running' ){
        Score+=5;
    }
}
if(flag==0){
top1=parseInt(window.getComputedStyle(cloud3,null).getPropertyValue('top'));
if(count3==1){
   cloud3.style.top=(top1+80)+'px';
}
if(count3==2){
  cloud3.style.top=(top1-50)+'px';
}
if(count3==3){
  cloud3.style.top=(top1-50)+'px';
  
}
if(count3==4){
    cloud3.style.top=(top1+50)+'px';
  }
  if(count3==5){
    cloud3.style.top=(top1-30)+'px';
    count3=0;
  }
    score=document.querySelector('.score');
    score.innerHTML="Score : "+Score;
 count3++;
}
}, 9000);   
