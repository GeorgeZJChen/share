(function() {

  var url = "http://192.168.56.101/";

  $(document).ready(function(){

    if(checkSession())
      showSignInView(0);
    else
      showMainView(window.username);

    $('#nav_sign_out').click(function(){
      signOut()
    });

    $('#login_submit').click(function(){
      signIn()
    });
  });

  function checkSession(){

    return true;
  }


  function showSignInView(ms){
    $('#nav_username').html("Sign in");
    $('#nav_account_dropdown').addClass('disabled').attr("onclick", 'location.reload()');
    $('#nav_account_btn').removeClass('caret');
    $('.login-container').fadeIn(ms, function(){
      $('#main_container').hide();
    });

  }

  function showMainView(username){
    $('#nav_username').html(username);
    $('#nav_account_dropdown').removeClass('disabled').removeAttr('onclick');
    $('#nav_account_btn').addClass('caret');
    $('.dropdown-toggle').dropdown();

    $('#main_container').show();
    $('.login-container').fadeOut(300);
    $('#login_submit').unbind('click');
  }

  /*
  Sends a post request to sign in, and changes the view if succeeded.
  Arguments:
  -cb callback function, called when sign in succeeded
  Returns: null
  */
  function signIn(){
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
        //header
        showMainView(username);

        window.username = username;
      }
      console.log(data);
    });

  }

  function signOut(){
    signOutSession();
    showSignInView();
  }

  //TODO
  function signOutSession(){

  }



}.call(this));
