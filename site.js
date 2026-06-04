(function () {
  var root = document.documentElement;
  var scale = 1;
  var MIN = 0.9, MAX = 1.4, STEP = 0.1;
  function apply() { root.style.setProperty('--fs', scale.toFixed(2)); }
  var up = document.getElementById('fontUp');
  var down = document.getElementById('fontDown');
  var reset = document.getElementById('fontReset');
  if (up) up.addEventListener('click', function(){ scale = Math.min(MAX, scale + STEP); apply(); });
  if (down) down.addEventListener('click', function(){ scale = Math.max(MIN, scale - STEP); apply(); });
  if (reset) reset.addEventListener('click', function(){ scale = 1; apply(); });
})();
(function () {
  var btn = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  if (!btn || !nav) return;
  btn.addEventListener('click', function(){
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
})();
