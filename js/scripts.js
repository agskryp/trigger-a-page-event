window.onload = function(e) {
  e.preventDefault();

  var hash     = document.location.hash;
  var selector = document.querySelector( 'a[href="' + hash + '"]' );

  if( hash !== '' && selector ) {
    selector.click();
  }  
}
