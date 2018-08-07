export default {

  // 라우팅을 위해 앱 초기화 시 여기에 라우터를 넣는다.
  receivedRouter: null,

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

  routePage: function(pageIndex, direction = null) {
    console.log(direction);
    if(direction === 'reverse') {
      sessionStorage.routeDirection = 'reverse';
    }

    switch (pageIndex) {
      case 1:
        // location.href = '/ko/precious-piece';
        this.receivedRouter.push('/ko/precious-piece');
        break;
      case 2:
        // location.href = '/ko/our-state';
        this.receivedRouter.push('/ko/our-state');
        break;
      case 3:
        // location.href = '/ko/good-news';
        this.receivedRouter.push('/ko/good-news');
        break;
      case 4:
        // location.href = '/ko/what-should-do';
        this.receivedRouter.push('/ko/what-should-do');
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
  },

  async initPagePosition(vueComponent) {

    if(sessionStorage.routeDirection && sessionStorage.routeDirection === 'reverse') {
      sessionStorage.routeDirection = null;
      vueComponent.$store.commit('setIndex', vueComponent.$store.state.length - 1);
    } else {
      vueComponent.$store.commit('setIndex', 0);
    }

    let wrap = document.querySelector('.fullpage-wrapper');
    let pos = -(vueComponent.$store.state.index * window.innerHeight);
    wrap.style.transform = `translate3d(0, ${pos}px, 0)`;

    await this.wait(100);
    wrap.style.transition = 'all 0.8s ease';
  },

  async updateLayout(vueComponent) {

    let slides = document.querySelectorAll('.fullpage-slide');
    let slide = slides[vueComponent.$store.state.index];

    // FIXME: go to util.js
    if ( (' ' + slide.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' white-tone ') > -1 ) {
      vueComponent.$store.commit('setTone', 'white-tone');
    } else {
      vueComponent.$store.commit('setTone', '');
    }

    await this.wait(500);

    slides.forEach((el, i)=> {
      if(i === vueComponent.$store.state.index) {
        el.classList.add('is-current');
      } else {
        el.classList.remove('is-current');
      }
    });
  }

}
