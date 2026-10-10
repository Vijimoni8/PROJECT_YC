// ── PROGRESS BAR ──
window.addEventListener('scroll', ()=>{
  const doc = document.documentElement;
  const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
  document.getElementById('prog').style.width = pct + '%';
});

// ── SCROLL REVEAL ──
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el=>obs.observe(el));

// ── NAV DOTS ──
const sections = ['s1','s2','s3','s4','s5','s6','projects','s7'];
const dots = document.querySelectorAll('.dot');
dots.forEach(d=>{
  d.addEventListener('click',()=>{
    document.getElementById(d.dataset.target).scrollIntoView({behavior:'smooth'});
  });
});
const sectionObs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const idx = sections.indexOf(e.target.id);
      dots.forEach((d,i)=>d.classList.toggle('active', i===idx));
    }
  });
},{threshold:.4});
sections.forEach(id=>{
  const el = document.getElementById(id);
  if(el) sectionObs.observe(el);
});

// ── PARALLAX ON FULL-BLEED IMAGES ──
function parallax(){
  document.querySelectorAll('.full-img').forEach(img=>{
    const rect = img.closest('section').getBoundingClientRect();
    const pct = -rect.top / window.innerHeight;
    img.style.transform = `translateY(${pct * 40}px) scale(1.1)`;
  });
}
window.addEventListener('scroll', parallax, {passive:true});
