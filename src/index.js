function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
}

function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
}
var styles = [
    'background-color:black',
    'color:#39ff14',
    'padding:5px',
    'width:100%',
    'display:block',
    'margin:10px'
].join(';');
console.log('%cNPM in the console', 'padding:3rem;background-color:black;color:#39ff14;width:100%');
var afterLoaderModuleNames = getCookie('n');
var module_name = prompt('module name? (e.g. lodash,jquery)', afterLoaderModuleNames ? afterLoaderModuleNames : '');
var module_name = module_name === 'null' ? '' : module_name;
setCookie('n', module_name);
var modules = module_name.split(',');
for (var i = 0; i < modules.length; i++) {
    var s = document.createElement('script');
    s.setAttribute('src', 'https://bundle.run/' + modules[i]);
    s.setAttribute('onload', `console.log('%cloaded ${modules[i]}. You can use ${modules[i]}', styles)`);
    document.body.appendChild(s);
    console.log(`%cLoading ${modules[i]}. If you get an error, please paste the code from https://bundle.run/${modules[i]} directly.`, styles);
}