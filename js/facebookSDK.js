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
