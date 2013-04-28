window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
  var msg = {};
  msg.errorMsg = errorMsg;
  msg.url = url;
  msg.lineNumber = lineNumber;

  console.log(msg);

  /*
  $.ajax({
    url: 'http://localhost:5000/',
    data: msg
  }).done(function ( data ) {
    if(console && console.log ) {
      console.log(data);
      alert('error: ' + msg);
    }
  }).fail(function () {
    alert("error");
  });
  */

};

if(!window.jQuery) {

  $.ajaxError(function(event, jqxhr, settings, exception) {
    alert("error");
  });

  $.ajaxSetup({
    error: function (jqXHR, textStatus, errorThrown) {
      alert("error");
    }
  });

}