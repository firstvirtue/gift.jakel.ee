import util from '~/assets/js/util.js';

export default {
  init() {
    let body = document.querySelector('body');
    body.style.overflow = `hidden`;

    let self = this;
    this.windowHeight;
    util.resize(function(){
      self.windowHeight = window.innerHeight;

      let slides = document.querySelectorAll('.fullpage-slide');
      slides.forEach(function(obj, i){
        obj.style.height = `${self.windowHeight}px`;
        obj.style.background = `white`;
      });

      self.count = slides.length;
    });

  },

  data() {
    return {
      index: 1,
    }
  }

}
