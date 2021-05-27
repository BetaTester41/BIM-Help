function inject(href, name) {
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('script');
  link.src = href;
  link.id = name;
  head.appendChild(link);
}

inject(chrome.runtime.getURL("inject.js"), "inject");

var assign = setInterval(checkAssign, 512);
var injectLoop = setInterval(injectStart, 512);

function injectStart() {
  if (typeof(document.getElementsByClassName("check dark")[0]) != 'undefined' && document.getElementsByClassName("check dark")[0] != null) {
    document.body.insertAdjacentHTML("afterbegin", `<style>#anwser{height:100%;width:100%;object-fit:contain}#steps{color:#333 !important}.modal-body{width:100%;background-color:#fff}.modal.modal-fullscreen .modal-dialog, .modal.modal-fullscreen .modal-content{bottom:0;left:0;position:absolute;right:0;top:0}.modal.modal-fullscreen .modal-dialog{margin:0;width:100%;animation-duration:0.6s}.modal.modal-fullscreen .modal-content{border:none;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:inherit;-moz-box-shadow:inherit;-o-box-shadow:inherit;box-shadow:inherit}.modal.modal-fullscreen.force-fullscreen .modal-body{padding:0}.modal.modal-fullscreen.force-fullscreen .modal-header, .modal.modal-fullscreen.force-fullscreen .modal-footer{left:0;position:absolute;right:0}.modal.modal-fullscreen.force-fullscreen .modal-header{top:0}.modal.modal-fullscreen.force-fullscreen .modal-footer{bottom:0}</style><div class="modal fade modal-fullscreen footer-to-bottom" id="steps" tabindex="-1" role="dialog" aria-labelledby="steps" aria-hidden="true"><div class="modal-dialog animated fadeInDown"><div class="modal-content"><div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 style="margin: 0;line-height: 1.42857143;">Step By Step Help</h4></div><div class="modal-body"><center><img id="assign" src="https://assets.materialup.com/uploads/673bb553-7bdb-4252-bd3d-3f5eca2e590c/preview.png"></center></div><div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Done</button></div></div></div></div>`);
    document.getElementsByClassName("check dark")[0].insertAdjacentHTML('beforebegin',
      `<button onclick="getSome()" class="dark" style="display: block;border: 1px solid #4e91cb!important;color:#293644!important;background-color: #fff!important;">step by step</button>`);
    clearInterval(injectLoop);
    console.log('Button Inject Successful')
  }
}

function checkAssign() {
  var assignName = document.getElementsByClassName("chapter")[0].textContent.includes("Section Exercises");
  if (assignName) {
    setInterval(injectLoop, 512);
    clearInterval(assign);
    console.log('This is a homework assignment')
  } else {
    console.log('This is not a homework assignment!')
  }
}

var clearLoop = clearInterval(assign);
window.onload = (event) => {
  setTimeout(assign, 1);
  setTimeout(clearLoop, 120000);
}
