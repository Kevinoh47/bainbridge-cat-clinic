if (window.localStorage) {
  var txtUsername = document.getElementById('username');
  var txtEmail = document.getElementById('email');
  var txtPhone = document.getElementById('phone');
  var txtFeedbackTopic = document.getElementById('feedback-topic');
  var txtPermissionYes = document.getElementById('permission-yes');
  var txtPermissionNo = document.getElementById('permission-no');
  var txtFeedbackText = document.getElementById('feedback-text');
  var txtSubscribeAll = document.getElementById('subscribe-all');
  var txtSubscribeOcassional = document.getElementById('subscribe-ocassional');
  var txtPetInfo = document.getElementById('pet-info');

  if (txtUsername) {
    txtUsername.value = localStorage.getItem('username');
    txtUsername.addEventListener('input', function () {
      localStorage.setItem('username', txtUsername.value);
    });
  }
  if (txtEmail) {
    txtEmail.value = localStorage.getItem('email');
    txtEmail.addEventListener('input', function () {
      localStorage.setItem('email', txtEmail.value);
    });
  }
  if (txtPhone) {
    txtPhone.value = localStorage.getItem('phone');
    txtPhone.addEventListener('input', function () {
      localStorage.setItem('phone', txtPhone.value);
    });
  }
  if (txtFeedbackTopic) {
    txtFeedbackTopic.value = localStorage.getItem('feedback-topic');
    txtFeedbackTopic.addEventListener('input', function () {
      localStorage.setItem('feedback-topic', txtFeedbackTopic.value);
    });
  }
  if (txtPermissionYes) {
    txtPermissionYes.value = localStorage.getItem('permission-yes');
    txtPermissionYes.addEventListener('input', function () {
      localStorage.setItem('permission-yes', txtPermissionYes.value);
    });
  }
  if (txtPermissionNo) {
    txtPermissionNo.value = localStorage.getItem('permission-no');
    txtPermissionNo.addEventListener('input', function () {
      localStorage.setItem('permission-no', txtPermissionNo.value);
    });
  }
  if (txtFeedbackText) {
    txtfeedbackText.value = localStorage.getItem('feedback-text');
    txtfeedbackText.addEventListener('input', function () {
      localStorage.setItem('feedback-text', txtfeedbackText.value);
    });
  }
  if (txtSubscribeAll) {
    txtSubscribeAll.value = localStorage.getItem('subscribe-all');
    txtSubscribeAll.addEventListener('input', function () {
      localStorage.setItem('subscribe-all', txtSubscribeAll.value);
    });
  }
  if (txtSubscribeOcassional) {
    txtSubscribeOcassional.value = localStorage.getItem('subscribe-ocassional');
    txtSubscribeOcassional.addEventListener('input', function () {
      localStorage.setItem('subscribe-ocassional', txtSubscribeOcassional.value);
    });
  }
  if (txtPetInfo) {
    txtPetInfo.value = localStorage.getItem('pet-info');
    txtPetInfo.addEventListener('input', function () {
      localStorage.setItem('pet-info', txtPetInfo.value);
    });
  }
}
