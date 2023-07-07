let x = 1;
$(document).ready(function(){
    $('.no').click(function(){
        if(x==1){
            $('.no').css({left:"60%"});
            x=0;
        }
        else if(x==0){
            $('.no').css({left:"35%"});
            x=1;
        }
    });
    $('.yes').click(function(){
        $(".s1").css({left:"20%"},{transition:"0.3s"});
    })
});