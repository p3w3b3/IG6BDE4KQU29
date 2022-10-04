window.GLR = {
appId: 'efb00929-7682-4b9c-b533-1cf2001dc8c6'
};

(function(w, d, s){
var j = document.createElement(s); j.async = 1; j.type = 'text/javascript'; j.src = 'https://widget.eu.karehq.com/latest.js';
w.GLR = w.GLR || {};
d.getElementsByTagName("head")[0].appendChild(j);
})(window, document, "script");

document.onreadystatechange = function () {
  if (document.readyState == "complete") {

kare.onEscalate(function(callbackEvent, messageBody) {
Intercom('show');
kare.close()
});

  }
}
