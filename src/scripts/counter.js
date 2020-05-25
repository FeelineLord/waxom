let scrollStarted = false;

const counter = (el, time, step) => {
  const max = +el.textContent;
  el.textContent = 0;
  const iterationsCounts = Math.floor(max / step);
  let count = 0;

  const interval = setInterval(() => {
    let content = 0;
    
    if (count === iterationsCounts) {
      el.textContent = max;
      clearInterval(interval);
    } else {
      content += count * step;
      count++;
      el.textContent = content;
    }
  }, time/iterationsCounts);
};

const counters = (id) => {
  const elements = document.querySelectorAll(id);
  const els = Array.prototype.slice.call(elements);

  for (const el of els) {
    counter(el, el.dataset.countertime, el.dataset.counterstep);
  }
};

const startCounters = () => {
  const el = document.querySelector('#waxomCountersContainer');
  if (window.innerHeight >= el.getBoundingClientRect().top + +el.dataset.delaybyscrollpx && !scrollStarted) {
    window.removeEventListener('scroll', startCounters);
    scrollStarted = true;
    counters('#waxomCounter');
  }
};

window.addEventListener('scroll', startCounters);

startCounters();