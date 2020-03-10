


  $(document).ready(function() {
    $('#contact-form').submit(function(e) {
      var name = document.getElementById('inputName');
        email = document.getElementById('inputEmail');
        message = document.getElementById('inputMessage');
  
      if (!name.value || !email.value || !message.value) {
        alertify.error("Please check your entries");
        return false;
      } else {
        $.ajax({
           method: 'POST',
           url: 'https://formspree.io/nsifferath@hotmail.com',
           data: $('#contact-form').serialize(),
           datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        artify.success("Message sent");
      }
    });
  });