(function(){
  var hdr=document.querySelector('.hdr'); if(!hdr) return;
  var burger=hdr.querySelector('.burger'), items=hdr.querySelectorAll('.nd');
  function closeAll(except){items.forEach(function(d){if(d!==except){d.classList.remove('open');var t=d.querySelector('.nd-t');if(t)t.setAttribute('aria-expanded','false');}});}
  items.forEach(function(d){var t=d.querySelector('.nd-t');t.addEventListener('click',function(e){e.stopPropagation();var o=!d.classList.contains('open');closeAll(d);d.classList.toggle('open',o);t.setAttribute('aria-expanded',o?'true':'false');});});
  if(burger) burger.addEventListener('click',function(e){e.stopPropagation();var o=!hdr.classList.contains('open');hdr.classList.toggle('open',o);burger.setAttribute('aria-expanded',o?'true':'false');if(!o)closeAll();});
  document.addEventListener('click',function(e){if(!hdr.contains(e.target)){closeAll();hdr.classList.remove('open');if(burger)burger.setAttribute('aria-expanded','false');}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeAll();hdr.classList.remove('open');if(burger)burger.setAttribute('aria-expanded','false');}});
})();
