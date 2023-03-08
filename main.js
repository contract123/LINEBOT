+(function (window, document) {

  'use strict';

  function line_ifttt(event, key, v1, v2, v3) {
    var obj = {};
    if (v1 != "''" || v1.length > 0) {
      obj.value1 = v1;
    }
    if (v2 != "''" || v1.length > 0) {
      obj.value2 = v2;
    }
    if (v3 != "''" || v1.length > 0) {
      obj.value3 = v3;
    }
    var uri = 'https://maker.ifttt.com/trigger/' + event + '/with/key/' + key;
    $.post(uri, obj, function (e) {
      console.log(e);
    });
  }

  function line_notify(data) {
    $.post('https://script.google.com/macros/s/AKfycbx8CHul0yv0cPv-5DJLDz9hY1kZqQjm_7iLckjwKGEsjmtOuOc/exec',
      data,
      function(e){
		console.log(e);
      });
  }
  
  function line_bot(data) {
    $.post('https://script.google.com/macros/s/AKfycbxa34pt_zA5bcaSObcjqv3DCT3p3NDRKy8vMeZeN2Ao0T1nGvcyg4zKG6MujXzz91Xoew/exec',
      data,
      function(e){
		console.log(e);
      });
  }

  window.line_ifttt = line_ifttt;
  window.line_notify = line_notify;
  window.line_bot = line_bot;

}(window, window.document));
