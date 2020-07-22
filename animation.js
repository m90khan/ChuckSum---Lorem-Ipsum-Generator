(function tweenMe() {
  let tl = new TimelineLite({
    onComplete: function () {
      this.restart();
    },
  });

  TweenLite.set(".chuck-img-2", { scale: 2, transformOrign: "100% 100%" });
  TweenLite.set(".chuck-img-3", { scale: 2, transformOrign: "100% 100%" });

  tl.delay(2);

  tl.add([
    TweenLite.to(".chuck-img-1", 0.5, { opacity: 0, ease: Power0.easeNone }),
    TweenLite.to(".generate", 0.5, {
      backgroundColor: "#6C429B",
      ease: Power0.easeNone,
    }),
    TweenLite.to(".chuck-hero--two", 1, {
      opacity: 1,
      backgroundImage: "linear-gradient(242deg, #15af88 16%, #6c429a 67%)",

      ease: Power0.easeNone,
    }),
    TweenLite.to(".chuck-img-2", 5, { scale: 1, ease: Power1.easeOut }),
  ]);
  tl.add([
    TweenLite.to(".chuck-img-2", 0.5, { opacity: 0, ease: Power0.easeNone }),
    TweenLite.to(".generate", 0.5, {
      backgroundColor: "#930560",
      ease: Power0.easeNone,
    }),
    TweenLite.to(".chuck-hero--three", 1, {
      opacity: 1,
      backgroundImage: "linear-gradient(242deg, #15af88 16%, #6c429a 67%)",

      ease: Power0.easeNone,
    }),
    TweenLite.to(".chuck-img-1", 0.5, { scale: 1.2, ease: Power0.easeNone }),
    TweenLite.to(".chuck-img-3", 5, { scale: 1, ease: Power1.easeOut }),
  ]);
  tl.add([
    TweenLite.to(".chuck-img-1", 0.5, { opacity: 1, ease: Power0.easeNone }),
    TweenLite.to(".chuck-hero--three", 1, {
      opacity: 1,
      backgroundImage: "linear-gradient(242deg, #15af88 16%, #6c429a 67%)",

      ease: Power0.easeNone,
    }),
    TweenLite.to(".generate", 0.5, {
      backgroundColor: "#0551B4",
      ease: Power0.easeNone,
    }),
    TweenLite.to(".chuck-hero--two", 0.5, {
      opacity: 1,
      backgroundImage: "linear-gradient(242deg, #15af88 16%, #6c429a 67%)",

      ease: Power0.easeNone,
    }),
    TweenLite.to(".chuck-img-1", 5, { scale: 1, ease: Power1.easeOut }),
  ]);
})();
