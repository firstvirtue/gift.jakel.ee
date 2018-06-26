
import util from '~/assets/js/util.js';

export default {
  init() {
    let body = document.querySelector('body');
    body.style.overflow = `hidden`;

    let windowHeight;
    util.resize(function(){
      windowHeight = window.innerHeight;

      let slides = document.querySelectorAll('.fullpage-slide');
      slides.forEach(function(obj, i){
        obj.style.height = `${windowHeight}px`;
        obj.style.background = `white`;
      });
    });

    // binding

  },

  data() {
    return {
      index: 1,
    }
  }

}
