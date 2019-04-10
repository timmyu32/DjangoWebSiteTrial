
var x = 1;
var gameOn = true;

for(var i= 0; i < 42; i++){
    $('td').eq(i).html('<img src="http://www.sclance.com/pngs/gray-circle-png/gray_circle_png_605175.png" alt="' + x + '" height="80px" width="80px">');
    x++;
}

$('table').css('margin', 'auto');

$('td').val("empty");



$('td').on('mouseenter', function(){
    //Horizontal Check From left
    if (gameOn){
    for(var i=0; i<= 4; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i+1).val()) && 
             (value == $('td').eq(i+2).val()) && 
             (value == $('td').eq(i+3).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }

    for(var i=7; i<= 11; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i+1).val()) && 
             (value == $('td').eq(i+2).val()) && 
             (value == $('td').eq(i+3).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }

    for(var i=14; i<= 18; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i+1).val()) && 
             (value == $('td').eq(i+2).val()) && 
             (value == $('td').eq(i+3).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }

    for(var i=21; i<= 25; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i+1).val()) && 
             (value == $('td').eq(i+2).val()) && 
             (value == $('td').eq(i+3).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }

    for(var i=28; i<= 32; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i+1).val()) && 
             (value == $('td').eq(i+2).val()) && 
             (value == $('td').eq(i+3).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }

    for(var i=35; i<= 39; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i+1).val()) && 
             (value == $('td').eq(i+2).val()) && 
             (value == $('td').eq(i+3).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }
    //Verical 
    for(var i=41; i>= 7; i--){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i-7).val()) && 
             (value == $('td').eq(i-14).val()) && 
             (value == $('td').eq(i-21).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }
    //Diagonal (l --> r)
    for(var i=21; i<= 25; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i-6).val()) && 
             (value == $('td').eq(i-12).val()) && 
             (value == $('td').eq(i-18).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }

    for(var i=28; i<= 32; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i-6).val()) && 
             (value == $('td').eq(i-12).val()) && 
             (value == $('td').eq(i-18).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }

    for(var i=35; i<= 39; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i-6).val()) && 
             (value == $('td').eq(i-12).val()) && 
             (value == $('td').eq(i-18).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }



    //Diagonal (r --> l)
    for(var i=3; i<= 7; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i+6).val()) && 
             (value == $('td').eq(i+12).val()) && 
             (value == $('td').eq(i+18).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }

    for(var i=10; i<= 14; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i+6).val()) && 
             (value == $('td').eq(i+12).val()) && 
             (value == $('td').eq(i+18).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false; 
                } 
        }
    }

    for(var i=17; i<= 21; i++){
        var value = $('td').eq(i).val();
        if( (value == $('td').eq(i+6).val()) && 
             (value == $('td').eq(i+12).val()) && 
             (value == $('td').eq(i+18).val()) ){
            if ( value != "empty"){
                alert("WINNER"); 
                gameOn = false;
                } 
        }
    }



}})




// Column One event listner
$('.col1').on('click', function(){
    var columnElemnts = $('.col1');
    var i = 1;

    if (columnElemnts.eq(0).val() == "empty"){

    while (i < 7){
        if (columnElemnts.eq((-1) * i).val() == "empty"){
            if ( $('h3').text() == "Player One's Turn" ){
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img/1764103.jpg" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedRed");
                $('h3').text("Player Two's Turn");
                break;
            }else{
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img1/689474.png" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedBlue");
                $('h3').text("Player One's Turn")
                break;
            }
        }else{
            i++;
        }
    }   
  }
}
)

$('.col2').on('click', function(){
    var columnElemnts = $('.col2');
    var i = 1;

    if (columnElemnts.eq(0).val() == "empty"){

    while (i < 7){
        if (columnElemnts.eq((-1) * i).val() == "empty"){
            if ( $('h3').text() == "Player One's Turn" ){
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img/1764103.jpg" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedRed");
                $('h3').text("Player Two's Turn");
                break;
            }else{
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img1/689474.png" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedBlue");
                $('h3').text("Player One's Turn")
                break;
            }
        }else{
            i++;
        }
    }   
  }
}
)

$('.col3').on('click', function(){
    var columnElemnts = $('.col3');
    var i = 1;

    if (columnElemnts.eq(0).val() == "empty"){

    while (i < 7){
        if (columnElemnts.eq((-1) * i).val() == "empty"){
            if ( $('h3').text() == "Player One's Turn" ){
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img/1764103.jpg" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedRed");
                $('h3').text("Player Two's Turn");
                break;
            }else{
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img1/689474.png" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedBlue");
                $('h3').text("Player One's Turn")
                break;
            }
        }else{
            i++;
        }
    }   
  }
}
)

$('.col4').on('click', function(){
    var columnElemnts = $('.col4');
    var i = 1;

    if (columnElemnts.eq(0).val() == "empty"){

    while (i < 7){
        if (columnElemnts.eq((-1) * i).val() == "empty"){
            if ( $('h3').text() == "Player One's Turn" ){
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img/1764103.jpg" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedRed");
                $('h3').text("Player Two's Turn");
                break;
            }else{
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img1/689474.png" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedBlue");
                $('h3').text("Player One's Turn")
                break;
            }
        }else{
            i++;
        }
    }   
  }
}
)

$('.col5').on('click', function(){
    var columnElemnts = $('.col5');
    var i = 1;

    if (columnElemnts.eq(0).val() == "empty"){

    while (i < 7){
        if (columnElemnts.eq((-1) * i).val() == "empty"){
            if ( $('h3').text() == "Player One's Turn" ){
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img/1764103.jpg" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedRed");
                $('h3').text("Player Two's Turn");
                break;
            }else{
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img1/689474.png" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedBlue");
                $('h3').text("Player One's Turn")
                break;
            }
        }else{
            i++;
        }
    }   
  }
}
)

$('.col5').on('click', function(){
    var columnElemnts = $('.col5');
    var i = 1;

    if (columnElemnts.eq(0).val() == "empty"){

    while (i < 7){
        if (columnElemnts.eq((-1) * i).val() == "empty"){
            if ( $('h3').text() == "Player One's Turn" ){
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img/1764103.jpg" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedRed");
                $('h3').text("Player Two's Turn");
                break;
            }else{
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img1/689474.png" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedBlue");
                $('h3').text("Player One's Turn")
                break;
            }
        }else{
            i++;
        }
    }   
  }
}
)

$('.col6').on('click', function(){
    var columnElemnts = $('.col6');
    var i = 1;

    if (columnElemnts.eq(0).val() == "empty"){

    while (i < 7){
        if (columnElemnts.eq((-1) * i).val() == "empty"){
            if ( $('h3').text() == "Player One's Turn" ){
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img/1764103.jpg" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedRed");
                $('h3').text("Player Two's Turn");
                break;
            }else{
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img1/689474.png" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedBlue");
                $('h3').text("Player One's Turn")
                break;
            }
        }else{
            i++;
        }
    }   
  }
}
)


$('.col7').on('click', function(){
    var columnElemnts = $('.col7');
    var i = 1;

    if (columnElemnts.eq(0).val() == "empty"){

    while (i < 7){
        if (columnElemnts.eq((-1) * i).val() == "empty"){
            if ( $('h3').text() == "Player One's Turn" ){
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img/1764103.jpg" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedRed");
                $('h3').text("Player Two's Turn");
                break;
            }else{
                columnElemnts.eq((-1) * i).html('<img src="http://clipart-library.com/img1/689474.png" alt="none" height="80px" width="80px">');
                columnElemnts.eq((-1) * i).val("occupiedBlue");
                $('h3').text("Player One's Turn")
                break;
            }
        }else{
            i++;
        }
    }   
  }
}
)

