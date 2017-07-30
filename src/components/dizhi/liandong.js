
window.onload=function(){


    var name1 = document.getElementById("name1");
    var address = document.getElementById("address");
    var phone= document.getElementById("phone");
    var email = document.getElementById("email");
    var cancel=document.querySelector(".cancel");
    var kongbai=document.querySelector(".kongbai");
    var add=document.querySelector(".more img");
    var add1=document.querySelector(".more1 img")
    var save=document.querySelector(".save");
    var zhezhao1=document.querySelector('.zhezhao1');
    var zhezhao2=document.querySelector('.zhezhao2');
    var zhezhao3=document.querySelector('.zhezhao3');
    var zhezhao4=document.querySelector('.zhezhao4');
    var choose1=document.querySelector('.choose1');
    var xingming=document.querySelector('.xingming');
    add.onclick=function(){
        kongbai.style.display='none';
    }
    cancel.onclick=function(){
        kongbai.style.display='block';
    }

    save.onclick=function(){
        if(name1.value===""){
          zhezhao1.style.display="block";
            setTimeout(function(){
                zhezhao1.style.display="none";
            },1000)
        }
        else if(name1.value!==''&&phone.value===''){
            zhezhao2.style.display="block";
            setTimeout(function(){
                zhezhao2.style.display="none";
            },1000)
        }
        else if(name1.value!==''&&phone.value!==''&&address.value===''){
            zhezhao3.style.display="block";
            setTimeout(function(){
                zhezhao3.style.display="none";
            },1000)
        }
        else if(name1.value!==''&&phone.value!==''&&address.value!==''&&email.value===''){
            zhezhao4.style.display="block";
            setTimeout(function(){
                zhezhao4.style.display="none";
            },1000)
        }
        else{
            choose1.style.display='block';
        }
    }
    add1.onclick=function(){
        choose1.style.display='none';
        }


}










