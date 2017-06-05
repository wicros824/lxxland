$(document).ready(function() {

    function cal_opacity(min,max,scroll_height){
        min = min.toFixed(1);
        max = max.toFixed(1);
        scroll_height = scroll_height.toFixed(1);

        var distance = max - min;
        var child = scroll_height - min;

        if(child < 0){
            child = 0;
        }else if(child > distance){
            child = distance
        }

        return (child/distance).toFixed(1);
    };

    function property_opacity($property,number,scroll_height,width){
        if (number <=scroll_height && scroll_height <= (number+500)){
            $property.css("opacity",cal_opacity((number+100),(number+400),scroll_height))
        }
    };

    $('.love').addClass("loveanime");

    var lalaland_flag = 0;
    var muma_flag = 0;
    var haishi_flag = 0;
    var buyaopaiwo_flag = 0;
    var coldplay_flag = 0;

    var scroll_height = 0;

    $(document).scroll(function(){

        var width = $(window).width();

        scroll_height = $(document).scrollTop();


        $(".title").html(scroll_height);

        if (0 <=scroll_height && scroll_height <= 400){
            $('#pre_row').css("opacity",cal_opacity(100,300,scroll_height))
        }

        property_opacity($('#tucheng_row'),2250,scroll_height);

        if (3000 <=scroll_height && scroll_height <= 3800){

            var a = 3000;

            var b = 3700

            a = a.toFixed(1);
            b = b.toFixed(1);
            var scroll_height_f = scroll_height.toFixed(1);

            var c = b - a;
            var d = scroll_height_f - a;

            if(d < 0){
                $('#futejia').css("left",width-(width * 0));
            }else if(d > c){
                $('#futejia').css("left",'');
            }else{
                $('#futejia').css("left",width-(width * (d/c).toFixed(1)));
            }
        }

        property_opacity($('#yuanxiao_row'),0,scroll_height);

        property_opacity($('#val_row'),0,scroll_height);

        property_opacity($('#firstdate_row'),0,scroll_height);

        var lalaland=document.getElementById("lalaland");
        if(6500 <=scroll_height && scroll_height <= 7500){
            if(lalaland_flag == 0){
                lalaland.play();
                lalaland_flag = 1;
            }
        }else{
            if(lalaland_flag == 1){
                lalaland.pause();
                lalaland_flag = 0;
            }
        }

        property_opacity($('#motianlun_row'),0,scroll_height);

        property_opacity($('#disneyred_row'),0,scroll_height);

        property_opacity($('#muma_row'),0,scroll_height);

        var muma=document.getElementById("muma");
        if(9100 <=scroll_height && scroll_height <= 10100){
            if(muma_flag == 0){
                muma.play();
                muma_flag = 1;
            }
        }else{
            if(muma_flag == 1){
                muma.pause();
                muma_flag = 0;
            }
        }

        property_opacity($('#longmao_row'),0,scroll_height);

        property_opacity($('#icecream_row'),0,scroll_height);

        property_opacity($('#skytree_row'),0,scroll_height);

        property_opacity($('#liancang_row'),0,scroll_height);

        property_opacity($('#suizuguan_row'),0,scroll_height);

        var haishi=document.getElementById("haishi");
        if(14500 <=scroll_height && scroll_height <= 15500){
            if(haishi_flag == 0){
                haishi.play();
                haishi_flag = 1;
            }
        }else{
            if(haishi_flag == 1){
                haishi.pause();
                haishi_flag = 0;
            }
        }

        property_opacity($('#jnr_row'),15200,scroll_height);

        var buyaopaiwo=document.getElementById("buyaopaiwo");
        if(16600 <=scroll_height && scroll_height <= 17600){
            if(buyaopaiwo_flag == 0){
                buyaopaiwo.play();
                buyaopaiwo_flag = 1;
            }
        }else{
            if(buyaopaiwo_flag == 1){
                buyaopaiwo.pause();
                buyaopaiwo_flag = 0;
            }
        }

        property_opacity($('#coldplay_row'),17300,scroll_height);

        var coldplay=document.getElementById("coldplay");
        if(18200 <=scroll_height && scroll_height <= 18900){
            if(coldplay_flag == 0){
                coldplay.play();
                coldplay_flag = 1;
            }
        }else{
            if(coldplay_flag == 1) {
                coldplay.pause();
                coldplay_flag = 0
            }
        }


    })

    $(document).on("click", "#button1", function() {
        $('#button1').addClass('hide');
        $('#heart').removeClass('hide');
        $('#heart').addClass('filterdiv');
        $('#heart').one('webkitAnimationEnd', function() {
            $('#heart').removeClass('filterdiv');
            $('#heart').text('click!');
            $('#heart').addClass('hvr-bounce-in');
            $('#heart').on('click', function() {
                $('#heart').removeClass('hvr-bounce-in');
                $('#heart').text('');
                $('#heart').addClass('animated rollOut').one('webkitAnimationEnd', function() {
                    $(this).addClass('hide');
                    $(this).removeClass('animated rollOut');
                });
                setTimeout((function() {
                    $('#cat').removeClass('hide');
                    $('#cat').addClass('catanime').one('webkitAnimationEnd', function() {
                        $(this).removeClass('catanime');
                        $(this).addClass('animated tada');
                        $('#miao').removeClass('hide');
                        $('#miao').addClass('miaoanime');
                    });
                }), 200);
            });
        });
    });

});
