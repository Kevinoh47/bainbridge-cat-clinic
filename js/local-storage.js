if (window.localStorage) {
  var txtUsername = document.getElementById('username');
  var txtEmail = document.getElementById('email');
  var txtFeedbackTopic = document.getElementById('feedback-topic');
  var txtPermissionYes = document.getElementById('permission-yes');
  var txtPermissionNo = document.getElementById('permission-no');
  var txtfeedbackText = document.getElementById('feedback-text');
  var txtSubscribeAll = document.getElementById('subscribe-all');
  var txtSubscribeOcassional = document.getElementById('subscribe-ocassional');

  txtUsername.value = localStorage.getItem('username');
  txtEmail.value = localStorage.getItem('email');
  txtFeedbackTopic.value = localStorage.getItem('feedback-topic');
  txtPermissionYes.value = localStorage.getItem('permission-yes');
  txtPermissionNo.value = localStorage.getItem('permission-no');
  txtfeedbackText.value = localStorage.getItem('feedback-text');
  txtSubscribeAll.value = localStorage.getItem('subscribe-all');
  txtSubscribeOcassional.value = localStorage.getItem('subscribe-ocassional');

  txtUsername.addEventListener('input', function () {
    localStorage.setItem('username', txtUsername.value);
  });
  txtEmail.addEventListener('input', function () {
    localStorage.setItem('email', txtEmail.value);
  });
  txtFeedbackTopic.addEventListener('input', function () {
    localStorage.setItem('feedback-topic', txtFeedbackTopic.value);
  });
  txtPermissionYes.addEventListener('input', function () {
    localStorage.setItem('permission-yes', txtPermissionYes.value);
  });
  txtPermissionNo.addEventListener('input', function () {
    localStorage.setItem('permission-no', txtPermissionNo.value);
  });
  txtfeedbackText.addEventListener('input', function () {
    localStorage.setItem('feedback-text', txtfeedbackText.value);
  });
  txtSubscribeAll.addEventListener('input', function () {
    localStorage.setItem('subscribe-all', txtSubscribeAll.value);
  });
  txtSubscribeOcassional.addEventListener('input', function () {
    localStorage.setItem('subscribe-ocassional', txtSubscribeOcassional.value);
  });
}
