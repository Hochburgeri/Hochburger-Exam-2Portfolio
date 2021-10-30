//navbar
(function($){
    $(function(){
  
      $('.navbar ul li a:not(:only-child)').click(function(e){
        $(this).siblings('.nav-dropdown').toggle();
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
  
      $('html').click(function(){
        $('.nav-dropdown').hide();
      });
  
      $('#nav-toggle').click(function(){
        $('.navbar ul').slideToggle();
      });
  
      $('#nav-toggle').on('click', function(){
        this.classList.toggle('active');
      });
  
    });
  })(jQuery);

//form submit button
function clicked_on() {
  document.getElementById("s-click").innerHTML = "Thanks";
}