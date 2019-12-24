/* main.js */
$(function(){

    /* 메뉴 열림/닫힘 */
    $('.right_gnb').mouseover(function(){
        $('#sub_menu').slideDown();
    });
    $('section').mouseover(function(){
        $('#sub_menu').slideUp();
    });
    $('header, section').click(function(){
        $('#sub_menu').slideUp();
    });
    
    /* 배너 bx-slider */
    $('.bx-slider').bxSlider({
        /* 여기에 옵션 설정 */
        mode: 'fade', // 효과설정
        auto: true, // 자동재생
        easing: "ease-in-out", // 가속도(timing-function)
        pause: 6000, // 정지시간(대기)
        controls: false, // prev, next 표시/비표시
        pager: true, // 하단 인디케이터
        resopnsive: false,
    });

    /* 제품 리트 내 이미지 슬라이더 */
    var count = 1; // 이미지 번호
    /* 인터벌 함수 (함수, 재생시간ms) */
    setInterval(function(){

        if(count > 1 ) count = 0;
        // 모든 이미지 비표시
        $('.s_slider a').removeClass('show')
        // 현재 이미지만 표시
        $('.s_slider.1 > a').eq(count).addClass('show');
        $('.s_slider.2 > a').eq(count).addClass('show');
        $('.s_slider.3 > a').eq(count).addClass('show');
        $('.s_slider.4 > a').eq(count).addClass('show');
        $('.s_slider.5 > a').eq(count).addClass('show');
        $('.s_slider.6 > a').eq(count).addClass('show');
        $('.s_slider.7 > a').eq(count).addClass('show');
        $('.s_slider.8 > a').eq(count).addClass('show');
        $('.s_slider.9 > a').eq(count).addClass('show');
        $('.s_slider.10 > a').eq(count).addClass('show');
        $('.s_slider.11 > a').eq(count).addClass('show');
        $('.s_slider.12 > a').eq(count).addClass('show');
        $('.s_slider.13 > a').eq(count).addClass('show');
        $('.s_slider.14 > a').eq(count).addClass('show');
        $('.s_slider.15 > a').eq(count).addClass('show');
        count++;
    }, 5000);

    /* 리스트 슬라이더 */
    $('.best').click(function(){
        $('.product_list').removeClass('show');
        $('.product_list.1').addClass('show');
        $('.btn_slider ul li').removeClass('show');
        $('.best').addClass('show');
    });
    $('.new').click(function(){
        $('.product_list').removeClass('show');
        $('.product_list.2').addClass('show');
        $('.btn_slider ul li').removeClass('show');
        $('.new').addClass('show');
    });
    $('.sale').click(function(){
        $('.product_list').removeClass('show');
        $('.product_list.3').addClass('show');
        $('.btn_slider ul li').removeClass('show');
        $('.sale').addClass('show');
    });
});