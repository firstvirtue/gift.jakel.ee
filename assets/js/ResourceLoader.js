export default {
  load: function(callback) {

    let imgs = document.querySelectorAll('img');

    let arr = [];
    // TODO: Load video poster, hint: 포스터 url도 data-url로 선언 후 image 형태로 로드한 후 적용한다.
    imgs.forEach((el) => {
      // element를 이용해 리소스 로드할 객체를 만든다.
      arr.push({'el':el, 'src': el.getAttribute('data-src')});
    });

    this.loadImage(callback, ...arr);
  },

  loadImage(callback, ...paths) {
    Promise.all(paths.map(this.checkImage)).then(function(){
      paths.forEach((item) => {
        item.el.src = item.src;
      });

      callback();
    });
  },

  checkImage(path) {
    // NOTE: Promise.all 애 Promise 객체가 들어가야 하기에 함수로 래핑한 후 Promise를 리턴한다.
    return new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve({path, status: 'ok'});
      img.onerror = () => resolve({path, status: 'error'});
      img.src = path.src;
    });
  },

};
