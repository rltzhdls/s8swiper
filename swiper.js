


var project = new Swiper('.projects_list', {

  loop: true,
  autoplay: {
    delay: 0,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },

  speed: 7000,

  breakpoints: {
    
    200: {
      slidesPerView: 1,
    },

    769: {
      slidesPerView: 5,
    },
  }

});



var systems = new Swiper('.systems__box', {
  slidesPerView: 1,
  initialSlide: 3,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});




var skillsView = new Swiper('.offers__box', {
  
  
  breakpoints: {
    
    200: {
      slidesPerView: 1,
      initialSlide: 1,
    },

    769: {
      slidesPerView: 3,
    },
  }

});




var skillsView = new Swiper('.start__thumbs', {
  slidesPerView: 4,
  threshold: 4,

  on: {
    touchEnd: function(s,e) {
      let range = 4;
      let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY 
                   - s.touches.startY
      if (diff < range || diff > -range) s.allowClick = true;
    }
  },
  
  breakpoints: {
    
    200: {
      slidesPerView: 1,
    },

    769: {
      slidesPerView: 4,
    },
  }

});

var skills = new Swiper('.start__video', {

  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 500,

  threshold: 5,

  on: {
    touchEnd: function(s,e) {
      let range = 5;
      let diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY 
                   - s.touches.startY
      if (diff < range || diff > -range) s.allowClick = true;
    }
  },
  

  autoplay: {
    delay: 6000,
    pauseOnMouseEnter: false,
    disableOnInteraction: false,
  },

  thumbs: {
    swiper: skillsView
  }
});