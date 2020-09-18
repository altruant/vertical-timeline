

const options = {
  root: null,
  rootMargin: '0%',
  threshold: .8,
}

const intersectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.target.classList.contains('slide-right')) {
      entry.target.classList.remove('fadeOut');
      entry.target.classList.add('fadeRight');
    } else if (entry.isIntersecting && entry.target.classList.contains('slide-left')) {
      entry.target.classList.remove('fadeOut');
      entry.target.classList.add('fadeLeft');
    } else {
      entry.target.classList.remove('fadeRight', 'fadeLeft');
      entry.target.classList.add('fadeOut');
    }
  });
}, options);

// get your elements, by class name '.js-item'
const timelineItems = [...document.querySelectorAll('.timeline-item')];
// start observing your elements
timelineItems.forEach((element) => intersectionObserver.observe(element));
