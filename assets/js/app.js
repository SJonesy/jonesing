$(document).ready(function() {
  $('#fullpage').fullpage({
    verticalCentered: true,
    resize : true,
    sectionsColor : ['#2e2e2e', '#FFFFFF', '#2e2e2e', '#e2e2e2'],
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
        var terminal = $('.section.terminal .screen');

        terminal.text('');

        var cowthinkInput = 'cowthink "I\'m a software developer"\n';
        var cow = [ '     __________________________    '
                  , '    ( I\'m a software developer )  '
                  , '     --------------------------    '
                  , '            o   ^__^               '
                  , '             o  (oo)\\_______      '
                  , '                (__)\\       )\\/\\'
                  , '                    ||----w |      '
                  , '                    ||     ||    \n' ];
        var prompt = '    steve@anonymous:~$ ';
        var echoInput = ' echo "and also.. (press down arrow key)"\n';
        var echoOutput = '    and also.. (press down arrow key)';

        var inputs = [];

        inputs.push('\n');
        inputs.push( prompt );
        inputs = inputs.concat( cowthinkInput.split('') );
        inputs.push( cow.join('\n')          );
        inputs.push( prompt                  );
        inputs = inputs.concat( echoInput.split('')     );
        inputs.push( echoOutput              );

        var timeout = function (inputs, delay, iterator) {
          var text   = terminal.text();

          setTimeout(function() {
            terminal.text(text + inputs.shift());
            if (inputs.length > 0) {
              timeout(inputs, delay);
            }
          }, delay);
        }

        timeout(inputs, 50)
      }
      if (anchorLink === 'thirdSlide') {
        setTimeout(function(){$('.section.god .heading').css('opacity', 1);}, 500);
      }
    },
    afterRender: function(){
      setTimeout(function(){$('.section.hi .say_hi').css('opacity', 1);}, 1000);
      setTimeout(function(){$('.section.hi .my_name').css('opacity', 1);}, 2000);
      setTimeout(function(){$('.section.hi .down_arrow').css('opacity', 1);}, 4000);
    },
    afterResize: function(){},
    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    },
    onSlideLeave: function(anchorLink, index, slideIndex, direction){
      console.log("SLIDE LEAVE");
    }
  });
});
