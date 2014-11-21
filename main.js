$(window).load(function() {
    
    $(".square").hide().each(function(i) {

        if(i < 3) {
            $(this).css({"display": "block", "opacity": "0"}).delay(100).animate({"opacity": "1", "bottom": "0px"}, 1000);
        } else if (i < 6) {
            $(this).css({"display": "block", "opacity": "0"}).delay(200).animate({"opacity": "1", "bottom": "0px"}, 1000);
        } else {
            $(this).css({"display": "block", "opacity": "0"}).delay(300).animate({"opacity": "1", "bottom": "0px"}, 1000);
        }

    });

})