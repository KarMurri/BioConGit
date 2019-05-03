//aquí empieza SDK de facebook
console.log('entre a SDK');
window.fbAsyncInit = function() {
    FB.init({
      appId            : '2610429415851014',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.3'
    });
};

FB.login(function(response) {
  checkLoginState();
}, {scope: 'email'});

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      alert('Por favor inicie sesi&oacute');
    }
}

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name + ', email: '+ response.email);
      alert('Successful login for: ' + response.name + ', email: '+ response.email);
    });
}
