var el=document.getElementById('dis');

function showImg(){
    el.style.display='block'
}

document.getElementById('r').onmouseover=showImg
document.getElementById('r').onmouseout = function(){
    el.style.display='none'
}