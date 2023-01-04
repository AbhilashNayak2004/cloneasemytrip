var URLOTPLGN = "https://flightservice.easemytrip.com/EmtAppService/";
var forgotFlag=false;
function LoginWithOtp() {
    var LogInUser = {};
    LogInUser._mobile =   $("#txtMobileOTP").val();
	//txtMobileOTP
    if (validateEmailCommon($("#txtMobileOTP").val()) || isValidPhone($("#txtMobileOTP").val())) {
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: URLOTPLGN + "UserRagister/LoginOtpSend",
            aysnc: false,
            data: JSON.stringify(LogInUser),
            success: function (response) {
                $("#RegWait1").hide();
                document.getElementById("regNumberOTP").innerHTML = $("#txtMobileOTP").val();
                if (response == "True") {
                    $(".logn-detal").hide();
                     forgotFlag = true;
                    $("#for_pas").hide();
                  //  $(".se-m").hide();
                    $("#divOTPLogin").hide();
                    $("#divOTPLOGININT").hide();
                    //divEnterOTP  divEnterOTPINT
                    $("#divEnterOTP").show();
                    $("#divEnterOTPINT").show();
                    $(".se-m1").hide();
                }
                else {
                   // alert("Email is not registered please register");
				   $("#divOTPLOGININT").hide();
				   $(".btn_register ").click();
				   $("#txtEmail").val($("#txtMobileOTP").val());
				 //  OpenLoginPop();
                }
            },
            beforeSend: function (XMLHttpRequest) {
                ReqTimeOfSearch = (new Date()).getTime();
            },
            error: function (xmlHttpRequest, status, err) {
                $("#sendWait").hide();
            }
        });

    } else {
        $("#RegValid1").show();
        $("#RegWait1").hide();
        $("#sendWait").hide();
        alert("Please enter Valid Email/Phone");
        return false;
    }
}
var otp1="";
function ConfirmOtp_login() {
    $('#resendotp').prop("disabled", true);
    var no_email = $("#txtMobileOTP").val();
   var RegNO = $("#txtMobileOTP").val();
    $('#otpError').hide();
	otp1=document.getElementById("txtMobOTP").value;
    if (otp1 == "") {
        alert("OTP is required");
        $('#otpError').show();
        return false;
    }

    if (otp1 != null && otp1.length != "6") {
        $("#errorotp").fadeIn(1000);
        $("#errorotp").fadeOut(4000);
        return false;
    }
    $('#otpmsg1InvOtp').hide();
    $("#RegCWait1").show();
    $("#errorCAlter1").hide();
    $('#otpmsg').hide();
    $('#otpmsg1').hide();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        url: URLOTPLGN + "UserRagister/ConfirmOTP_Login",
        aysnc: false,
        data:"{'_mobile':'" +$("#txtMobileOTP").val() + "','_OTP':'" + otp1 + "'}",
        success: function (httpData) {
		httpData=	JSON.parse(httpData);
            if (httpData != "") {
                localStorage.setItem("_IdentifyUserDetails", JSON.stringify(httpData));
                $("#SignInWait1").hide();
                if (document.getElementById('easeFareDetails1_promodiv') != null) {
                    document.getElementById('easeFareDetails1_promodiv').innerHTML = "";
                }
                else if (document.getElementById('PromoCode1') != null) {
                    document.getElementById('PromoCode1').innerHTML = ""
                }
				if (httpData.split('|')[0].indexOf("not valid user") > -1 || httpData.split('|')[0].indexOf("Contact no is not available")>-1 || httpData.split('|')[0].indexOf("Enter the valid OTP")>-1){
                //if (httpData.split('|')[0].indexOf("not valid user") > -1) {
					if(httpData.split('|')[0].indexOf("Enter the valid OTP")>-1)
				   {
					    $("#loginFailedError").html("Enter valid OTP");
					    $("#loginFailedError").show();
						
						$("#divErrMsg").html("Enter valid OTP");
					    $("#divErrMsg").show();
						 $("#DivWaitmsg").hide();
						
				   }
				   else if(httpData.split('|')[0].indexOf("Your OTP has been expired")>-1)
				   {
					    $("#loginFailedError").html("Your OTP has been expired");
					    $("#loginFailedError").show();
						
						$("#divErrMsg").html("Your OTP has been expired");
					    $("#divErrMsg").show();
						 $("#DivWaitmsg").hide();
					   //Your OTP has been expired
				   }
                    $("#SignInWait").hide();
                    $("#loginFailedError").show();
                    $("#alertsignin1").show();
                    return false;
                }
                else {
                    $('#hid').hide();
                    $('#divBckLogin').hide();
                    $('#otplogin').hide();
                    $(".tr-m").removeClass("blur");
                    $('.container_loader').hide();
                    $("#alertsignin1").hide();
					if(httpData.split('res').length>1)
				   {
					   var loginCk=httpData.split('res')[1];
					   createCookie_D("XFFGHTYUOP@#$",loginCk,365);
				   }
                }
                $('#divBckLogin').hide();
                $('#divLoginSigin').click();
                if (httpData == "Enter the valid OTP" || httpData.indexOf("Enter the valid OTP")>=0) {
                    alert("Enter the valid OTP");
                    // $('#divBckLogin').hide();
                    $("#alertsignin1").hide();
                }
                else {
                    PrintUserDtl(httpData, 'Y');
					$("#divEnterOTP").hide();
                    //SignIn(httpData.split('|')[1], httpData.split('|')[2]);
                }
            }
            else {
                $("#SignInWait1").hide();
                $("#alertsignin1").show();
                return false;
            }
            otp1 = '';
        },
        beforeSend: function (XMLHttpRequest) {
            ReqTimeOfSearch = (new Date()).getTime();
        },
        error: function (xmlHttpRequest, status, err) {
            $("#SignInWait1").hide();
            $("#alertsignin1").hide();
            $("#errorAlter1").show();
        }
    });
   
}
function ResendOTPOnLogin() {
    var a = document.getElementById("regNumberOTP").innerHTML;
    myTimerClockInt = setInterval(function () { StartTimer() }, 1000);
    document.getElementById("spnResendCall").style.display = "none";
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        url: URLOTPLGN + "UserRagister/ResendOTP",
        aysnc: false,
        data: "{_mobile:'" + a + "'}",
        success: function (response) {
            $('#divReOtp').show();
            $('#waitReOtp').hide();
            if (document.getElementById("aOtpCall") != null) {
                setInterval(function () { document.getElementById("aOtpCall").style.display = "block"; }, 180000);
            }
            if (document.getElementById("divTimer") != null) {
                document.getElementById("divTimer").style.display = "block";
            }
            alert("otp send succesfully");
        },
        beforeSend: function (XMLHttpRequest) {
            ReqTimeOfSearch = (new Date()).getTime();
        },
        error: function (xmlHttpRequest, status, err) {
            $('#divReOtp').show();
            $('#waitReOtp').hide();
            document.getElementById("spnResendCall").style.display = "block";
        }
    });
}
var myTimerClockInt = null;
function SendOTPCall() {
    var no = $("#txtMobileOTP").val();//document.getElementById("regNumberOTP").innerHTML;
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        url: URLOTPLGN + "UserRagister/SendOtpCall",
        aysnc: false,
        data: "{_mobile:'" + no + "'}",
        success: function (response) {
            $('#divReOtp').show();
            $('#waitReOtp').hide();
            if (document.getElementById("aOtpCall") != null) {
                setInterval(function () { document.getElementById("aOtpCall").style.display = "block"; }, 180000);
            }
            alert("otp send succesfully");
        },
        beforeSend: function (XMLHttpRequest) {
            ReqTimeOfSearch = (new Date()).getTime();
        },
        error: function (xmlHttpRequest, status, err) {
            $('#divReOtp').show();
            $('#waitReOtp').hide();
        }
    });
}
var TimerClock = 60;
function StartTimer() {
    TimerClock--;
    if (TimerClock == 0) {
        clearInterval(myTimerClockInt);
        document.getElementById("aOtpCall").style.display = "block";
    }
    document.getElementById("spnClock").innerHTML = TimerClock;
}
function createCookie_D(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + ";domain=.easemytrip.com;path=/";
}
function OpenOTPLogin()
{
	$("#divLogin").hide();
	$("#divOTPLOGININT").show();
}