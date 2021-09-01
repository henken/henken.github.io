// favicon
const favicon = document.querySelector('link[rel="shortcut icon"]');
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
	favicon.setAttribute('href','./img/favicon/favicon-dark.svg');
} else {
	favicon.setAttribute('href','./img/favicon/favicon-light.svg');
}
