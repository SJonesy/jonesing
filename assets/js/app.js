$(document).ready(function() {
  $('#fullpage').fullpage({
    verticalCentered: true,
    resize : true,
    sectionsColor : ['#2e2e2e', '#53868B', '#2e2e2e', '#e2e2e2'],
    anchors:['firstSlide', 'secondSlide', 'thirdSlide', 'fourthSlide'],
    scrollingSpeed: 700,
    easing: 'easeInQuart',
    menu: false,
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['firstSlide', 'secondSlide'],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    autoScrolling: true,
    scrollOverflow: false,
    css3: false,
    paddingTop: '0px',
    paddingBottom: '10px',
    normalScrollElements: '#element1, .element2',
    normalScrollElementTouchThreshold: 5,
    keyboardScrolling: true,
    touchSensitivity: 15,
    continuousVertical: false,
    animateAnchor: true,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function (anchorLink, index) {
      if (anchorLink === 'secondSlide') {

      }
    },
    afterRender: function(){
      setTimeout(function(){$('.section.hi .say_hi').css('opacity', 1);}, 1000);
      setTimeout(function(){$('.section.hi .my_name').css('opacity', 1);}, 2000);
      setTimeout(function(){$('.section.hi .down_arrow').css('opacity', 1);}, 5000);
    },
    afterResize: function(){},
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction){
      console.log("SLIDE LEAVE");
    }
  });
});
