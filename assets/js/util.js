export default {

  resize: function(callback) {
    window.addEventListener('resize', callback);
    callback();
  },

  scroll: function(callback) {
    window.addEventListener('scroll', callback);
    callback();
  },

  // FIXME: 작동 안함
  throttled(delay, fn) {
    let lastCall = 0;
    return function (...args) {
      const now = (new Date).getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    }
  },

  // FIXME: 작동 안함
  debounced(delay, fn) {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    }
  },

  wait: function(dur) {
    return new Promise(resolve => setTimeout(resolve, dur));
  },

  movePage: function(pageIndex) {
    switch (pageIndex) {
      case 1:
        location.href = '/ko/precious-piece';
        break;
      case 2:
        location.href = '/ko/our-state';
        break;
      case 3:
        location.href = '/ko/good-news';
        break;
      case 4:
        location.href = '/ko/what-should-do';
        break;
      default:

    }
  },

  initLayout(vueComponent) {
    let self = this;

    // FIXME: wait for resource using promise
    // this.setCurrent();

    this.resize(function() {
      self.windowHeight = window.innerHeight;

      let slides = document.querySelectorAll('.fullpage-slide');
      slides.forEach(function(obj, i) {
        obj.style.height = `${self.windowHeight}px`;
        // obj.style.background = `white`;
        let wrap = obj.querySelector('.l-wrap');
        if(wrap) {
          wrap.style.height = `${self.windowHeight}px`;
        }
      });

      vueComponent.$store.commit('setLength', slides.length);
    });
  }

}
