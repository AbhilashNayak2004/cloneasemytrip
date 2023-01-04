var _Fns = {};
_Fns.ReqTime = new Date();
_Fns.ResTime = new Date();
_Fns.TotalResTime = 0;
_Fns.Origin = "";
_Fns.Destination = "";
_Fns.Adults = null;
_Fns.Childs = null;
_Fns.Infants = null;
_Fns.Cabin = 0;
_Fns.TripType = 0;
_Fns.ReqType = 5;
_Fns.UserName = null;
_Fns.IsDomestic = true;
_Fns.SaveSessionStatus = false;
_Fns.TraceId = null;
_Fns.SegmentsCount = null;
_Fns.Error = null;
_Fns.Browser =  Object.keys(navigator.userAgent)[0];
_Fns.TransactionId = null;
_Fns.IPAdress = null;
_Fns.DepDate = null;
_Fns.ArrDate = null;
_Fns.EmailID = null;
_Fns.DeviceId = null;
_Fns.MobileNumber = null;
_Fns.Version = null;
_Fns.ReqFare = "";
_Fns.ResFare = "";
_Fns.LowestFare = "";
_Fns.AirpricePosition = null;
_Fns.cSID = null;
_Fns.cVID = null;
_Fns.cTID = null;
_Fns.cID = null;
_Fns.UserID = null;
_Fns.IsOneWay = false;
_Fns.RequestURL = window.location.href;
var cookieName = "Analaytics"
var URL1 = "https://flightservice.easemytrip.com/EmtAppService/Analytics/PushEvent";
_Fns.PushEvent = function() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        url: URL1,
        aysnc: true,
        data: JSON.stringify(_Fns),
        success: function(response) {},
        beforeSend: function(XMLHttpRequest) {},
        error: function(xmlHttpRequest, status, err) {}
    });
}