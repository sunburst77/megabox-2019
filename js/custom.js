(function($){


// 배너 이미지 슬라이더
const swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
});

// 영화차트 이미지 슬라이드
const swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 4,
  spaceBetween: 24,
  mousewheel: {
    invert: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    delay: 6000,
  },
  breakpoints: {
    600: {
        slidesPerView: 1.4,
        spaceBetween: 24
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 24
    },
    960: {
        slidesPerView: 3,
        spaceBetween: 24
    }
  }
});


// 영화차트 탭 메뉴
let movBtn = $('.movie_title > ul > li');
let movCont = $('.movie_chart > div > div');

movCont.hide().eq(0).show();

movBtn.click(function(e) {
  e.preventDefault();
  var target = $(this);
  var index = target.index();
  movBtn.removeClass('active');
  target.addClass('active');
  movCont.hide().eq(index).show();
});


// 공지사항 탭메뉴
const tabMenu = $('.notice');

// 컨텐츠 내용을 숨겨주세요
tabMenu.find('ul > li > ul').hide();
tabMenu.find('li.active > ul').show();

function tabList(e) {
  e.preventDefault();
  var target = $(this);
  target.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
  // 버튼을 클릭하면 형제 ul을 보여주고
  // 부모의 li 태그에 클래스를 추가하고
  // 형제 li태그의 클래스를 제거하고
  // 제거한 자식의 ul 태그를 숨겨줌
}
tabMenu.find('ul > li > a').click( tabList).focus(tabList);


// $(window).scroll(function() {
//   let target = $(this);
//   let top_pos = target.scrollTop();
//   // console.log(top_pos);
//   if ( top_pos > 180 ) {
//     $('#header').addClass('fixed');
//   } else {
//     $('#header').removeClass('fixed');
//   }
// });


})(jQuery);  