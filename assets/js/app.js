$(document).ready(function() {
  $('#fullpage').fullpage({
    verticalCentered: true,
    resize : true,
    sectionsColor : ['#ccc', '#fff'],
    anchors:['firstSlide', 'secondSlide'],
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
    paddingTop: '3em',
    paddingBottom: '10px',
    normalScrollElements: '#element1, .element2',
    normalScrollElementTouchThreshold: 5,
    keyboardScrolling: true,
    touchSensitivity: 15,
    continuousVertical: false,
    animateAnchor: true,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction){}
  });
});