Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.loader',
  fnc: loaderInit
});

function loaderInit(main, index, query) {

  // follow mouse

  let loader = main;
  let container = document.documentElement;
  let rect = loader.getBoundingClientRect();
  let width = rect.width;
  let height = rect.height;

  function mousemove(e) {
    cancelAnimationFrame(parseFloat(loader.dataset.xtLoaderFrame));
    loader.dataset.xtLoaderFrame = window.requestAnimationFrame( function() {
      let top = e.clientY + height / 2;
      let left = e.clientX + width / 2;
      loader.style.top = top + 'px';
      loader.style.left = left + 'px';
    }).toString();
  }

  function mouseenter(e) {
    loader.classList.add('active');
    loader.classList.remove('out');
    let top = e.clientY + height / 2;
    let left = e.clientX + width / 2;
    loader.style.top = top + 'px';
    loader.style.left = left + 'px';
  }

  function mouseleave(e) {
    loader.classList.remove('active');
    loader.classList.add('out');
  }

  container.removeEventListener('mousemove', mousemove);
  container.addEventListener('mousemove', mousemove);
  container.removeEventListener('mouseenter', mouseenter);
  container.addEventListener('mouseenter', mouseenter);
  container.removeEventListener('mouseleave', mouseleave);
  container.addEventListener('mouseleave', mouseleave);

}