(function tweenMe() {
  let tl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete: function () {
      this.restart();
    },
  });

  gsap.set(".chuck-img-2", { scale: 1.5, transformOrign: "100% 100%" });
  gsap.set(".chuck-img-3", { scale: 1.5, transformOrign: "100% 100%" });

  tl.delay(2);

  tl.add([
    gsap.to(".chuck-img-1", 0.5, { opacity: 0, ease: Power0.easeNone }),
    gsap.to(".generate", 0.5, {
      backgroundColor: "#244766  ",
      ease: Power0.easeNone,
    }),
    gsap.to(".chuck-hero--two", 1, { opacity: 1, ease: Power2.easeNone }),
    gsap.to(".chuck-img-2", 5, { scale: 1, ease: Power1.easeOut }),
  ]);
  tl.add([
    gsap.to(".chuck-img-2", 0.5, { opacity: 0, ease: Power0.easeNone }),
    gsap.to(".generate", 0.5, {
      backgroundColor: "#0066cc",
      ease: Power0.easeNone,
    }),
    gsap.to(".chuck-hero--three", 1, {
      opacity: 1,
      ease: Power0.easeNone,
    }),
    gsap.to(".chuck-img-1", 0.5, { scale: 1.5, ease: Power0.easeNone }),
    gsap.to(".chuck-img-3", 5, { scale: 1, ease: Power1.easeOut }),
  ]);
  tl.add([
    gsap.to(".chuck-img-1", 0.5, { opacity: 1, ease: Power0.easeNone }),
    gsap.to(".chuck-hero--three", 1, {
      opacity: 0,
      ease: Power0.easeNone,
    }),
    gsap.to(".generate", 0.5, {
      backgroundColor: "#9c0d68",
      ease: Power0.easeNone,
    }),
    gsap.to(".chuck-hero--two", 0.5, {
      opacity: 0,
      ease: Power0.easeNone,
    }),
    gsap.to(".chuck-img-1", 5, { scale: 1, ease: Power1.easeOut }),
  ]);
})();
