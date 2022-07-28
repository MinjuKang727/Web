//let direction = 'left'
// $('.btn.left').click(function(){
//     let loc = parseInt($('#horse').css('right'));
//     if (loc < 1200){
//         loc += 50
//         $('#horse').css('right',loc+'px');
//     };
// });

// $('.btn.right').click(function(){
//     let loc = parseInt($('#horse').css('right'));
//     if (loc > 0){
//         loc -= 50
//         $('#horse').css('right',loc+'px');
//     };
// });

// $(document).keydown(function(event){
//     if (event.keyCode == 37 || event.which == 37){
//         // 왼쪽키 눌렀을때
//         let loc = parseInt($('#horse').css('right'));
//         if (direction == 'right') {
//             $('#horse').css('transform','scaleX(1)');
//             direction = 'left'
//         }
//         if (loc < 1200){
//             $('#horse').css('right',loc+50+'px');
//         };
//     }else if(event.keyCode == 39 || event.which == 39){
//         // 오른쪽 키 눌렀을 때
//         let loc = parseInt($('#horse').css('right'));

//         // 방향에 따라 사진 반전
//         if (direction == 'left') {
//             $('#horse').css('transform','scaleX(-1)');
//             direction = 'right'
//         }
//         if (loc > 0){
//             $('#horse').css('right',loc-50+'px');
//         };
//     }else if(event.keyCode == 32 || event.which == 32){
//         // 스페이스바 눌렀을 때
//         let loc = parseInt($('#horse').css('bottom'));
//         if (loc < 550){
//             $('#horse').css('bottom',loc+150+'px');
//             setTimeout(() => {
//                 $('#horse').css('bottom','200px');
//             }, 300);
           
            
//         };
//     };

// })

// 키보드 방향키로 말의 위치를 이동
$('body').on('keydown',(event)=>{
    let move = parseInt($('#horse').css('right'));

    if(event.keyCode == 37){
        if(move < 1200){
            move += 50
            $('#horse').css('right', move+'px')
        }
    }else if(event.keyCode == 39){
        if(move > 0){
            move -= 50
            $('#horse').css('right', move+'px')
        }
    }else if (event.keyCode == 32){
        // animate() 함수
        // css 속성들을 이용해서 애니메이션을 수행하는 것
        // 단, 수치형 속성값으로만 가능하다
        // ex ) width, height, left 등 가능
        // background-color 등 불가능

        // .animate(css속성들, 속도)
        $('#horse').animate({bottom:'400px'},'slow')
        $('#horse').animate({bottom:'200px'},'slow')
    }
})


// 당근을 먹자!
//let carrot = parseInt((Math.random())+1);