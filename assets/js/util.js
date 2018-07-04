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

}
