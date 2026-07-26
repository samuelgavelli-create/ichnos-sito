/* ICHNOS — menu condiviso. Collegare con:
   <script src="menu.js"></script>  */

(function(){
  const barra = document.getElementById('ichnav');
  const tasto = document.getElementById('ichnavTasto');
  const menu  = document.getElementById('ichnavMenu');

  function chiudi(){
    tasto.setAttribute('aria-expanded','false');
    tasto.setAttribute('aria-label','Apri il menu');
    menu.classList.remove('aperto');
    document.body.style.overflow = '';
  }
  tasto.addEventListener('click', function(){
    const aperto = tasto.getAttribute('aria-expanded') === 'true';
    if (aperto) return chiudi();
    tasto.setAttribute('aria-expanded','true');
    tasto.setAttribute('aria-label','Chiudi il menu');
    menu.classList.add('aperto');
    document.body.style.overflow = 'hidden';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', chiudi));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') chiudi(); });

  let ultimo = 0;
  addEventListener('scroll', function(){
    const y = scrollY;
    if ((y > 40) !== (ultimo > 40)) barra.classList.toggle('ridotta', y > 40);
    ultimo = y;
  }, {passive:true});
})();
