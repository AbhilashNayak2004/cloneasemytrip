
        /* (function () {
            var app = {
                launchApp: function (href_) {
                    window.location.replace("easemytrip://SplashScreenActivity?url=" + href_);
                    this.timer = setTimeout(this.openWebApp, 1000);
                },
                openWebApp: function () {
                    window.location.replace("https://play.google.com/store/apps/details?id=com.easemytrip.android");
                }
            };
			 function Routing(obj) {
             app.launchApp("");
        }
        })(); */
       
	   var app = {
            launchApp: function (href_) {
					  if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
         window.location.href = 'https://play.google.com/store/apps/details?id=com.easemytrip.android';
     }
     if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
         window.location.href = hrefMOBTOAPP;
     }
                window.location.replace("easemytrip://SplashScreenActivity?url=" + href_);
                this.timer = setTimeout(this.openWebApp, 1000);
            },
            openWebApp: function () {
				  if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
         window.location.href = 'https://play.google.com/store/apps/details?id=com.easemytrip.android';
     }
     if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
         window.location.href = 'https://itunes.apple.com/in/app/easemytrip-flight-booking/id1053030595?mt=8';
     }
               // window.location.replace("https://play.google.com/store/apps/details?id=com.easemytrip.android");
            }
        };
		var hrefMOBTOAPP=null;
        function Routing(obj) {
			hrefMOBTOAPP=obj;
			
			if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1)
			{
				  window.location.href =hrefMOBTOAPP;
			}
			else{
				if(document.getElementById("myModal_hl")!=null )
				{
					if(getCookie("USRPRF")=="W")
					{
						OpenWEb();
					}else if(getCookie("USRPRF")=="A"){
						OpenAppp();
					}else{
						document.getElementById("myModal_hl").style.display="block";
					}
					
				}
				else{
					  window.location.href =hrefMOBTOAPP;
				}
			}
			
        //    app.launchApp(obj);
        }
		
		function OpenWEb()
		{setCookie("USRPRF", "W", 2);
		         if(document.getElementById("myModal_hl")!=null )
				{
					document.getElementById("myModal_hl").style.display="none";
					
				}
			window.location.href=hrefMOBTOAPP;
		}
		function OpenAppp()
		{setCookie("USRPRF", "A", 2);
	         	if(document.getElementById("myModal_hl")!=null )
				{
					document.getElementById("myModal_hl").style.display="none";
					
				}
			 app.launchApp(hrefMOBTOAPP);
		}