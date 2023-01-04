function SetCountryDefault()
	{
	try{
	    var code=getCookie("ccode");
		var country="India";
		if(getCookie("ccode").split(',').length>1)
		{
	     	code=getCookie("ccode").split(',')[0];
			country=getCookie("ccode").split(',')[1];
			switch(code.toUpperCase()){
				case "IN":
				country="India";
				break;
				case "AE":
				country="UAE";
				break;
				case "UK":
				country="Uni.Kingdom";
				break;
				case "TH":
				country="Thailand";
				break;
				default:
				code="IN";
				country="India";
				break;
			}
		}
		else 
		{
			code="IN";
			country='India';
		}
		var img=`<img src="https://flight.easemytrip.com/Content/img/flag/flag_${code}.svg" width="18">`.toString();
		$("#divCCaption").html(img+country);
		$(".caption").html(img+country);
		
		if(document.getElementById("spnFlgImgHead")!=null){
		   document.getElementById("spnFlgImgHead").innerHTML=img;	
			
		}
		if(document.getElementById("spnCC")!=null)
		{
			document.getElementById("spnCC").innerHTML=country;
		}
		$(".ccaption").removeClass("selected");
		$("."+code).addClass("selected");
		
		if(window.location.href.split('?')[0]!='https://www.easemytrip.com/'){
			//$("#lanCurr").hide();
			//$(".boder_tps").hide();
			//$("#lanCountry").width("100%")
		}
		if(window.location.href.split('?')[0]=="https://www.easemytrip.com/c/ae" || window.location.href.split('?')[0]=="https://www.easemytrip.com/c/ae/flights.html"){
		//if(window.location.href=="https://www.easemytrip.com/c/ae"){
		//	setCookie("CUR_CODE","AED",1);
		}
		else if(window.location.href.split('?')[0]=="https://www.easemytrip.com/c/th/flights.html"){
			//setCookie("CUR_CODE","THB",1);
		}
		else if(window.location.href=="https://www.easemytrip.com/c/uk" || window.location.href=="https://www.easemytrip.co.uk"){
			//setCookie("CUR_CODE","GBP",1);
		}
		else{
			//	setCookie("CUR_CODE","INR",1);
		}
	
	}catch(e){}
		
		//$("#spnFlgImg").html(img);
		//$("#spnCC").html(code);
	}
	function SetCountryCode1(code_,country_)
	{
	try{
		var mainWeb="https://www.easemytrip.com";
		SetCookieByDomain("ccode",code_+","+country_,365);
		if(code_!="IN"){
			window.location.href=mainWeb+"/c/"+code_.toLowerCase()+"?rdt=true";
		}
		else{
			window.location.href=mainWeb+"?rdt=true";
		}
		//location.reload();
      }catch(e){
		  
	  }
	}
	
	function SetCountryCode(code_,country_)
{
    try{
        var objDomain = {};
        objDomain["IN"]="https://www.easemytrip.com";
        objDomain["AE"]="https://www.easemytrip.ae";
        objDomain["TH"] ="https://www.easemytrip.co.th";
        objDomain["UK"] ="https://www.easemytrip.co.uk";

        var hostName =window.location.hostname;
        var mainWeb="https://www.easemytrip.com";
        SetCookieByDomain("ccode",code_+","+country_,365);
        if(code_=="AE" && false){
            window.location.href=mainWeb+"/c/"+code_.toLowerCase()+"?rdt=true";
        }
        else{
            window.location.href=objDomain[code_.toUpperCase()]+"?rdt=true";
        }
        //location.reload();
    }catch(e){
          
    }
}
	function OpenBox(){
		//$(".lang_slct").show();
		$(".lang_slct").toggle();
	}
	
function SetCookieByDomain(cname, cvalue, exdays) {
    var host = window.location.hostname.split('.');
	host.shift();
    var hostName = "";
    hostName = "." + host[0];
    for (var i = 1; i < host.length; i++) {
        hostName += "." + host[i];
    }
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=" + hostName + ";path=/";
}
SetCountryDefault();




	function OpenBoxCountry(){
		$(".main_pannl").hide();
		$("#mySidenav_v3,#opct3,#appBox,.stick_bottom").hide();
		
		//mySidenav_v3
		$("#divCountryPopup").show();
	}
	function OpenBoxCountryListing(){
		
		$("#mySidenav_v3,#opct3,#mainDiv").hide();
		
		//mySidenav_v3
		$("#divCountryPopup").show();
	}
	function BackToMainPage()
	{
		$(".main_pannl").show();
		$("#mainDiv,.stick_bottom").show();
		$("#divCountryPopup").hide();
		
	}

function DeleteCookieDomain(CK_NAME_){
	document.cookie = CK_NAME_ + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}

$(document).ready(function() {
			$('body').not($(".lang_country_slct")).on('click', function(event){
			//do some code here i.e 
			 if (!$(event.target).closest('.lang_cnt_view').length && !$(event.target).closest('.lang_slct').length ) {
  if(document.getElementsByClassName("lang_slct")[0]!=null &&( document.getElementsByClassName("lang_slct")[0].style.display=="" || document.getElementsByClassName("lang_slct")[0].style.display=="block"))
				{
				  $(".lang_slct").hide();
				}
  }
				
			
			});
								 });