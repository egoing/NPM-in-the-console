javascript:(function()%7B%22use%20strict%22%3Bfunction%20setCookie(e%2Co%2Ct)%7Bvar%20l%3Dnew%20Date%3Bl.setTime(l.getTime()%2B24*t*60*60*1e3)%2Cdocument.cookie%3De%2B%22%3D%22%2Bo%2B%22%3Bexpires%3D%22%2Bl.toUTCString()%2B%22%3Bpath%3D%2F%22%7Dfunction%20getCookie(e)%7Bvar%20o%3Ddocument.cookie.match(%22(%5E%7C%3B)%20%3F%22%2Be%2B%22%3D(%5B%5E%3B%5D*)(%3B%7C%24)%22)%3Breturn%20o%3Fo%5B2%5D%3Anull%7Dvar%20styles%3D%5B%22background-color%3Ablack%22%2C%22color%3A%2339ff14%22%2C%22padding%3A5px%22%2C%22width%3A100%25%22%2C%22display%3Ablock%22%2C%22margin%3A10px%22%5D.join(%22%3B%22)%3Bconsole.log(%22%25cNPM%20in%20the%20console%22%2C%22padding%3A3rem%3Bbackground-color%3Ablack%3Bcolor%3A%2339ff14%3Bwidth%3A100%25%22)%3Bvar%20module_name%2CafterLoaderModuleNames%3DgetCookie(%22n%22)%3BsetCookie(%22n%22%2Cmodule_name%3D%22null%22%3D%3D%3D(module_name%3Dprompt(%22module%20name%3F%20(e.g.%20lodash%2Cjquery)%22%2CafterLoaderModuleNames%7C%7C%22%22))%3F%22%22%3Amodule_name)%3Bfor(var%20modules%3Dmodule_name.split(%22%2C%22)%2Ci%3D0%3Bi%3Cmodules.length%3Bi%2B%2B)%7Bvar%20s%3Ddocument.createElement(%22script%22)%3Bs.setAttribute(%22src%22%2C%22https%3A%2F%2Fbundle.run%2F%22%2Bmodules%5Bi%5D)%2Cs.setAttribute(%22onload%22%2C%22console.log('%25cloaded%20%22%2Bmodules%5Bi%5D%2B%22.%20You%20can%20use%20%22%2Bmodules%5Bi%5D%2B%22'%2C%20styles)%22)%2Cdocument.body.appendChild(s)%2Cconsole.log(%22%25cLoading%20%22%2Bmodules%5Bi%5D%2B%22.%20If%20you%20get%20an%20error%2C%20please%20paste%20the%20code%20from%20https%3A%2F%2Fbundle.run%2F%22%2Bmodules%5Bi%5D%2B%22%20directly.%22%2Cstyles)%7D%7D)()