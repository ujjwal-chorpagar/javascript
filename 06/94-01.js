var p = document.createElement('P');
p.textContent = 'A new paragraph';
p.style.fontsize = '17px';

var li = document.querySelector('li');
var a = li.firstElementChild;
liinsertBefore(p,a);