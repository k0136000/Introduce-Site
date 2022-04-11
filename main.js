
function Date_now()
{
  let now = new Date();
  alert(now);
}

let trans_btn = document.getElementById("trans_btn");
let intro = document.getElementById("intro");
let name = document.getElementById("name");
let server = document.getElementById("server");
let daegu = document.getElementById("daegu");
let real = document.getElementById("real");
let exp = document.getElementById("Exp");
let printing = document.getElementById("3d");
let fus = document.getElementById("fus");
let py = document.getElementById("py");
let ard = document.getElementById("ard");
let more = document.getElementById("more");
let copy = document.getElementById("copy");


trans_btn.addEventListener('click',translate);

let txt_id = [trans_btn,intro,name,server,daegu,real,exp,printing,fus,py,ard,more,copy];
let trans_kor=["한글","소개","민규","서버","대구","레알 마드리드","경력","3D 프린팅","퓨전360","파이썬","아두이노","더 많은 정보들..","저작권자 김민규의 모든 권리 보유"];
let trans_eng=["ENGLISH","Introduce","MIN GYU","Server","Daegu","Real Madrid","Experience","3Dprinter","Fusion360","Python","Arduino","More information..","Copyright MIN GYU All rights reserved."];
function translate()
{
  if(trans_btn.innerHTML == "ENGLISH")
  {
   for(let i of txt_id)
   {
     let n = txt_id.indexOf(i);
     i.innerHTML = trans_kor[n];
   }
  }
  else
  {         
    for(let i of txt_id)
    {
     let n = txt_id.indexOf(i);
      i.innerHTML = trans_eng[n];
     }
  }
}
let bono = document.getElementById("bono"); 
bono.addEventListener('click',bonobono);
let titleimg = document.getElementById("title_img");


function bonobono()
{   
    titleimg.src = "bonobono.png";
    document.querySelector("body").style.backgroundColor="#2DABEE";
    name.innerHTML = "헛소리 하지마 임마"    
} 
