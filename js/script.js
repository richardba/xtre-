$(document).on("click", ".star", function (event) {
    var $this = $(this);
    var i=$this.attr('value');
    $('#rating').val(i)
    for(i;i>0;i--)
    {
        $(".star[value="+i+"]").toggleClass('star_active star');


    }
    event.preventDefault();

});
$(document).on("click", ".star_active", function (event) {
    var $this = $(this);
    var i=parseInt($this.attr('value'))+1;
    $('#rating').val(i-1)
    for(i;i<=5;i++)
    {
        $(".star_active[value="+i+"]").toggleClass('star star_active');
    }
    event.preventDefault();
});