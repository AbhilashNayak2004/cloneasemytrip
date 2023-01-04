function GetIndexPageSearch(userid_) {
	try{
		
		var userDetails = "";
    if (document.getElementById('hddUserDtl') != null) {
        userDetails = document.getElementById('hddUserDtl').value;
    }
    var emailId = "";
    var phoneNo = "";
    if (localStorage.getItem("_boutIdentify") != null) {
        userDetails = JSON.parse(localStorage.getItem("_boutIdentify")).split('|');
    }
    if (userDetails != null && userDetails != '' && userDetails.length > 0 && userDetails[0].trim() != "not valid user") {
        emailId = userDetails[1];
        phoneNo = userDetails[2];
        if (phoneNo == "0" || phoneNo == 0) {
            phoneNo = "";
        }
    }
    var IPAdress = getCookie("UserIP");
	if(IPAdress=="")
	{
		/*  $.ajax({
        type: 'GET',
        url: 'https://api.ipify.org/?format=json',
        dataType: 'json',
        async: false,
        success: function(data) {
            IPAdress = data.ip;
            DeleteCookie("UserIP");
            setCookie("UserIP", IPAdress, 365);
        }
    }); */
	}
    _Fns.ResTime = new Date();
	_Fns.UserName = "EASEMYTRIPIN";
		    _Fns.UserID = "EASEMYTRIPIN";
	if(userid_!="" && userid_!=undefined)
	{
		  _Fns.UserName = "EASEMYTRIPMOB";
		    _Fns.UserID = "EASEMYTRIPMOB";
	}
    //_Fns.UserName = "EASEMYTRIPIN";
    _Fns.IPAdress = IPAdress;
    _Fns.EmailID = emailId;
    _Fns.MobileNumber = phoneNo;
	var netcore=fetchCookie ();
	var emtAna=getCookie(cookieName);
	if(emtAna!="" && emtAna!=null)
	{
		var obj=JSON.parse(emtAna);
       _Fns.cID = obj!=null?obj.visiterID:"";
	}
	
	_Fns.cSID=netcore.visit;
    _Fns.UserID = emailId;
	_Fns.cTID=netcore.ck;
    _Fns.cVID =netcore.uuid; //_taq.vid;
    try {
        ViewContent("", "", "", "", "", "", "", "");
    } catch (e) {console.log(e +" easemytrip1");}
    setCookie("VisiterID", netcore.uuid, "365");
    _Fns.PushEvent();
	}catch(e){
		console.log(e +" easemytrip2");
	}
    
}
function fetchCookie () {
    var cookieHandle = '__stp';
    var sessionData = '',
    name = cookieHandle + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0) {
            sessionData = c.substring(name.length, c.length);
            if (sessionData) {
                try {
                    sessionData = JSON.parse(sessionData);
                } catch (e){}
            }
        }
    }
   return sessionData;
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.easemytrip.com;path=/";
}

function DeleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function SearchThread() {
    try {
        if (document.getElementById("FromSector") != null && document.getElementById("FromSector").value != "" && document.getElementById("Editbox13") != null && document.getElementById("Editbox13").value != "" && document.getElementById("ddate") != null && document.getElementById("ddate").value != "" && document.getElementById("FromSector").value.split('-')[0] != document.getElementById("Editbox13").value.split('-')[0]) {
            var obj = {};
            obj.org = document.getElementById("FromSector").value.split('-')[0];
            obj.dept = document.getElementById("Editbox13").value.split('-')[0];
            obj.adt = "1";
            obj.chd = "0";
            obj.inf = "0";
            obj.deptDT = document.getElementById("ddate").value.split('/')[2] + "-" + document.getElementById("ddate").value.split('/')[1] + "-" + document.getElementById("ddate").value.split('/')[0];
            obj.arrDT = null;
            if (document.getElementById("FromSector").value.indexOf("India") >= 0) {
                obj.isDomestic = "false";
            }
            obj.isOneway = "true";
            obj.airline = "Any";
            obj.Cabin = "0";
            obj.currCode = "INR";
            obj.appType = 1;
            obj.isSingleView = false;
            obj.IpAddress = "182.75.77.58";
            obj.userid = "";
            obj.cVID = "";
            obj.cID = "";
            //var req = {
            //    "org": "DEL", "dept": "BLR", "adt": "1", "chd": "0", "inf": "0", "deptDT": "2018-11-30", "arrDT": null,
            //    "isDomestic": "false", "isOneway": "true", "airline": "undefined", "Cabin": "0", "currCode": "INR", "appType": 1,
            //    "isSingleView": false, "IpAddress": "182.75.77.58", "userid": "",
            //    "cVID": "JVJ5S1RsCqSImDzw", "cID": "42b75bdc-4120-436f-a83e-6de4e22bf742"
            //};
          /*   $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                url: "https://flightservice.easemytrip.com/EmtAppService/AirAvail/AirSearchAdvance",
                aysnc: true,
                data: JSON.stringify(obj),
                success: function(response) {},
                beforeSend: function(XMLHttpRequest) {

                },
                error: function(xmlHttpRequest, status, err) {
                    //alert(err + " " + status + " " + xmlHttpRequest);
                }
            }); */
        }
    } catch (e) {

    }

}

function SignUP(email_, Phone_) {

    var IPAdress = "";
    $.ajax({
        type: 'GET',
        url: 'https://api.ipify.org/?format=json',
        dataType: 'json',
        async: false,
        success: function(data) {
            IPAdress = data.ip
        }
    });
    _Fns.ReqType = 10;
    _Fns.UserName = "EASEMYTRIPIN";
    _Fns.IPAdress = IPAdress;
    _Fns.EmailID = email_;
    _Fns.MobileNumber = Phone_;


    _Fns.UserID = email_;

    _Fns.PushEvent();

}