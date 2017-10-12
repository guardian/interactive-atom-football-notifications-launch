var el = document.createElement('script');
el.src = '<%= path %>/app.js';
document.body.appendChild(el);


var iframeBody = document.querySelector('body');
var parentBody = parent.document.querySelector('body');

iframeBody.setAttribute('class', parentBody.getAttribute('class'));
