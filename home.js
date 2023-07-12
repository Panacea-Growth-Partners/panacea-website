document.addEventListener("DOMContentLoaded", () => {
  const $spectrum = document.getElementById("spectrum");
  const $main = document.getElementById("main");
  const $diamond = document.getElementById("diamond");

  const debounce = (func, wait) => {
    let timeout;
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(func, wait);
    };
  };

  const positionSpectrum = () => {
    const { x, y, top, width, height } = $diamond.getBoundingClientRect();
    const offsetX = Math.round(x + width / 2);
    const offsetY = Math.round(y + height / 2);

    $spectrum.style.left = `${offsetX}px`;
    $spectrum.style.top = `${offsetY}px`;
  };

  let ticking = false;
  let resizeTimer;

  const handleResize = () => {
    window.clearTimeout(resizeTimer);

    resizeTimer = window.setTimeout(() => {
      const fullheight = $main.clientHeight;
      $spectrum.style.height = `${fullheight}px`;
      positionSpectrum();
    }, 10);
  };

  const handleScroll = () => {
    positionSpectrum();
  };

  positionSpectrum();

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);
});
