const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});
const revealTargets=document.querySelectorAll(".project,.skill-card,.education-card,.about-copy");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
revealTargets.forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(22px)";
  el.style.transition="opacity .7s ease, transform .7s ease";
  observer.observe(el);
});
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click",()=>{
    const nav=document.querySelector(".nav-wrap");
    nav.classList.remove("open");
  });
});
