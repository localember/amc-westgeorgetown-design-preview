(function(){
  var bar=document.getElementById('scta');
  /* threshold: the hero; on pages without one, the first section (capped at one screen for very long legal pages) */
  var hero=document.querySelector('main > section.hero, main > section.phero')||document.querySelector('main > section')||document.querySelector('main');
  if(!bar||!hero) return;
  document.body.classList.add('has-scta');
  var cur=null;
  function set(on){if(on===cur)return;cur=on;bar.classList.toggle('on',on);document.body.classList.toggle('scta-on',on);}
  function chk(){var r=hero.getBoundingClientRect();set(Math.min(r.bottom,r.top+window.innerHeight)<0);}
  window.addEventListener('scroll',chk,{passive:true});
  window.addEventListener('resize',chk);
  chk();
})();
