function setCookie(name, value, exp) {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }
  function getCookie(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
  }
  var afterLoaderModuleNames = getCookie('afterLoaderModuleNames');
  var module_name = prompt('module name? (e.g. lodash,jquery)', afterLoaderModuleNames ? afterLoaderModuleNames : '');
  setCookie('afterLoaderModuleNames', module_name);
  var modules = module_name.split(',');
  for(var i=0; i<modules.length; i++){
      var s = document.createElement( 'script' );
      s.setAttribute('src', 'https://bundle.run/'+modules[i]);
      s.setAttribute('onload', `console.log('loaded :', '${modules[i]}')`);
      try{
          document.body.appendChild( s );
      } catch(e){
          debugger;
      }
      console.log(modules[i]+'를 로딩 중입니다. 오류가 발생하면 다음 주소를 직접 방문해서 코드를 붙여넣기 해주세요. https://bundle.run/ '+modules[i]);
  }