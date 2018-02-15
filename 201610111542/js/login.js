(function() {

  var url = "http://192.168.56.101/";

  $(document).ready(function(){

    var catch_key = function(event){
　　　　if(event.keyCode == 13){
          sign_in(function(){
            $(document).unbind(event, catch_key);
          });
　　　　}
　　}
    $(document).keydown(catch_key);

    $('#login_submit').click(function(){
      sign_in(function(){
        $(document).unbind(event, catch_key);
      })
    });
  });

  function sign_in(cb){
    var username = $('#login_username').val();
    var password = $('#login_password').val();
    $.post(url + "test.php", {
      email: username,
      password: password
    }, function(data) {
      if(data == "Login failed"){
        //failed
        $("#login_feedback").html("Incorrect username or password");
      }else{
        //succeeded
        $("#login_feedback").html("");
        $('#header_username').html(username);
        $('#main_container').show();
        $('.login-container').fadeOut(300, function(){
          $(this).hide();
        });
        if(typeof cb === "function") cb();
      }
      console.log(data);
    });


  }







}.call(this));
