const lazyLoad = target => {
  const options = {
    rootMargin: "75px 0px",
    treshhold: 0.01
  };
  const forEntries = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.lazy;
        observer.disconnect;
      }
    });
  };
  const io = new IntersectionObserver(forEntries, options);
  io.observe(target);
};

export { lazyLoad };
