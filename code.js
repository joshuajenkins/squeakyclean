(function(){
  var el = document.createElement('div');
  el.id = 'squeky-clean';
  el.style.position = 'fixed';
  el.style.backgroundColor = 'transparent';
  el.style.top = 0;
  el.style.right = 0;
  el.style.bottom = 0;
  el.style.left = 0;
  el.style.zIndex = 99999;
  document.body.appendChild(el);
}());