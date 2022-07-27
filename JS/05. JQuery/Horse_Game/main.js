let direction = 'left'
// $('.btn.left').click(function(){
//     let loc = parseInt($('#horse').css('right'));
//     if (loc < 1200){
//         $('#horse').css('right',loc+50+'px');
//     };
// });

// $('.btn.right').click(function(){
//     let loc = parseInt($('#horse').css('right'));
//     if (loc > 0){
//         $('#horse').css('right',loc-50+'px');
//     };
// });

$(document).keydown(function(event){
    if (event.keyCode == 37 || event.which == 37){
        // 왼쪽키 눌렀을때
        let loc = parseInt($('#horse').css('right'));
        if (direction == 'right') {
            $('#horse').css('transform','scaleX(1)');
            direction = 'left'
        }
        if (loc < 1200){
            $('#horse').css('right',loc+50+'px');
        };
    }else if(event.keyCode == 39 || event.which == 39){
        // 오른쪽 키 눌렀을 때
        let loc = parseInt($('#horse').css('right'));

        // 방향에 따라 사진 반전
        if (direction == 'left') {
            $('#horse').css('transform','scaleX(-1)');
            direction = 'right'
        }
        if (loc > 0){
            $('#horse').css('right',loc-50+'px');
        };
    }else if(event.keyCode == 32 || event.which == 32){
        // 스페이스바 눌렀을 때
        let loc = parseInt($('#horse').css('bottom'));
        if (loc < 550){
            $('#horse').css('bottom',loc+150+'px');
            setTimeout(() => {
                $('#horse').css('bottom','200px');
            }, 300);
           
            
        };
    };

})