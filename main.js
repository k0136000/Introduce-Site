function Date_now(){
  let now = new Date();
  alert(now);
}
let dateBtn = document.getElementById("dateBtn");
let refreshBtn = document.getElementById("refresh");
let transBtn=document.getElementById("transBtn");
let intro=document.getElementById("intro");
let myName=document.getElementById("name");
let server=document.getElementById("server");
let daegu=document.getElementById("daegu");
let real=document.getElementById("real");
let exp=document.getElementById("Exp");
let printing=document.getElementById("3d");
let fus=document.getElementById("fus");
let py=document.getElementById("py");
let ard=document.getElementById("ard");
let more=document.getElementById("more");
let copy=document.getElementById("copy");
let bono=document.getElementById("bono"); 
let txtId=[transBtn,intro,myName,server,daegu,real,exp,printing,fus,py,ard,more,copy,bono,dateBtn,refreshBtn];
let transKor=["한글","소개","민규","서버","대구","레알 마드리드","경력","3D 프린팅","퓨전360","파이썬","아두이노","더 많은 정보들..","저작권자 김민규의 모든 권리 보유","보노보노","현재시각","새로고침"];
let transEng=["ENGLISH","Introduce","MIN GYU","Server","Daegu","Real Madrid","Experience","3Dprinter","Fusion360","Python","Arduino","More information..","Copyright MIN GYU All rights reserved.","bonobono","DATE","REFRESH"];
let langState = true; //true는 영어 false는 한글
function translate(){
  if(langState === true){
    for(let i of txtId){
     let n=txtId.indexOf(i);
     i.innerHTML=transKor[n];
    }
    langState = false;
  }
  else{         
    for(let i of txtId){
     let n=txtId.indexOf(i);
      i.innerHTML=transEng[n];
     }
     langState = true;
  }
}
let titleImg=document.getElementById("title-img");

function bonobono(){   
    titleImg.src="img/bonobono.png";
    document.querySelector("body").style.backgroundColor="#2DABEE";
    myName.innerHTML="헛소리 하지마 임마";        
} 

$('#dateBtn').click(Date_now);
$('#transBtn').click(translate);
$('#bono').click(bonobono);
$('#refresh').click(window.location.reload);
