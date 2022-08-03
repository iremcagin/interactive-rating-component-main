//  <script src="http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
// <script  type="text/javascript" src="main.js"></script>
//<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

$( document ).ready(function() {
    $(".container2").hide();
    $(".vote").on("click",function(){
        
        /* change all votes colors to default */
        $( ".vote" ).each(function() {
            $(this).css("background-color","rgba(49, 55, 63, 0.768)");
            $(this).css("color","hsl(216, 12%, 54%)");
        });

        /* change the new vote's color to selected color. */
        $(this).css("background-color","hsl(216, 12%, 54%)");
        $(this).css("color","white");

        var voted = $(this).val();

        /* if submit button is clicked */
        $(".submit").on("click",function(){
            /* clear inside the box */
            $(".content1").empty();
           
           $("#number").text(voted);
           $("#number").css("margin-left","5px");
           $("#number").css("margin-right","5px");

            /* put new content */
            $(".container1").hide();
            $(".container2").show();

        });
    }); 
});









