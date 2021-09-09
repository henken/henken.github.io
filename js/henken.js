var url = window.location.href;
var host = window.location.host;
var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;

console.log('url: ' + url);
console.log('host: ' + host);
console.log('path: ' + path);
console.log('query: ' + query);
console.log('hash: ' + hash);

// favicon
const favicon = document.querySelector('link[rel="shortcut icon"]');
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
	favicon.setAttribute('href','./img/favicon/favicon-dark.svg');
} else {
	favicon.setAttribute('href','./img/favicon/favicon-light.svg');
}

// copyright
var d = new Date();
var year = d.getFullYear();
var copyright = document.querySelector('footer > span');
copyright.innerHTML = '&copy; ' + year;

// section fadein
var section = document.querySelector('section');
setTimeout(function(){
	section.classList.add('active');
},4200);