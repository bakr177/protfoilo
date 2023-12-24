
alert('If you are facing a problem with the site, please change the page size to 67%.')

function SendMail() {
  var templateParams = {
      from_name: document.getElementById("fullName").value,
      email_id: document.getElementById("email_id").value,
      message: document.getElementById("message").value
  };

  emailjs.send("service_4m35pjw", "template_aw446js", templateParams)
      .then(function(response) {
          alert('SUCCESS! ' + response.status + ', ' + response.text);
      }, function(error) {
          alert('FAILED... ' + error);
      });
}

function scrollToAbout() {
    var aboutPage = document.getElementById("about-page");
    aboutPage.scrollIntoView({behavior: "smooth"});
}

window.onload = function() {
    var contactPage = document.getElementById("Contact-page");
}




ScrollReveal({ distance: '150px' });
ScrollReveal().reveal('.about-page,.tex,.logo,.lianee,.liane,.scroll-down,.servises-page', { origin: 'bottom' });


ScrollReveal({ distance: '150px' });
ScrollReveal().reveal('.p-line,.Contact-page', { origin: 'left' });