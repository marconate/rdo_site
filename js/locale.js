$(function() {
    var language = navigator.language || navigator.browserLanguage;
    if (!language) return;
    var urlpath = window.location.pathname;

    if ((language.indexOf('en') > -1) && (urlpath.indexOf('en') < 0)) {
        document.location.href = 'en';
        return;
    } else {
        if ((language.indexOf('es') > -1) && (urlpath.indexOf('es') < 0)) {
            document.location.href = 'es';
            return;
        }
    }
});