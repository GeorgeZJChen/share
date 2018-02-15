(function() {

  var url = "http://192.168.56.101/";

  $(document).ready(function(){

    $('#login_submit').click(function(){
      var username = $('#login_username').val();
      var password = $('#login_password').val();
      console.log(username+", "+password);
      $.post(url + "test.php", {
        email: username,
        password: password
      }, function(data) {
        if(data == "Login failed"){
          alert(data);
        }else{
          $('#header_username').html(username);
          $('#main_container').show();
          $('.login-container').fadeOut(300, function(){
            $(this).hide();
          });
        }
        console.log(data);
      });


  });

  });









}.call(this));
