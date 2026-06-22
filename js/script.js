
AOS.init({duration:1000});
setTimeout(()=>document.getElementById('loader').style.display='none',1800);
document.getElementById('darkToggle').onclick=()=>document.body.classList.toggle('dark');
const btn=document.getElementById('topBtn');
btn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
