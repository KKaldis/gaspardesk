import { Elastic, gsap } from "gsap";

const animation = () => {
  const item1 = gsap.timeline({ repeat: -1, repeatDelay: 0 });
  const item2 = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

  const top = {
    y: "-200",
    delay: 1,
    scale: 0,
    duration: 0.5,
    ease: "Power1.easeInOut",
  };

  const bottom = {
    y: "200",
    delay: 1,
    scale: 0,
    duration: 0.5,
    ease: "Power1.easeInOut",
  };

  item1.from("#anim-item-1", {
    duration: 0,
    delay: 0,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-1", top);

  item2.from("#anim-item-2", bottom);
  item2.to("#anim-item-2", top);

  item1.from("#anim-item-3", bottom);
  item1.to("#anim-item-3", top);

  item2.from("#anim-item-4", bottom);
  item2.to("#anim-item-4", top);

  item1.from("#anim-item-5", bottom);
  item1.to("#anim-item-5", top);

  item2.from("#anim-item-6", bottom);
  item2.to("#anim-item-6", top);

  item1.from("#anim-item-7", bottom);
  item1.to("#anim-item-7", top);

  item2.from("#anim-item-8", bottom);
  item2.to("#anim-item-8", top);

  item1.from("#anim-item-9", {
    fill: "var(--light)",
    ...bottom
  });
  item1.to("#anim-item-9", {
    fill: "var(--light)",
    duration: 0,
    delay: 0,
    ease: "Power1.easeInOut",
  });

  item1.from("#anim-item-9", {
    fill: "var(--light)",
    duration: 0,
    delay: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-9", {
    duration: 0.5,
    rotate: "-90",
    fill: "var(--primary)",
    delay: 1,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-9", {
    duration: 0.5,
    x: "200",
    y: "-200",
    delay: 0.5,
    scale: 0,
    display: "none",
  });

  item2.from("#anim-item-10", {
    duration: 0.5,
    x: "-200",
    y: "200",
    delay: 2,
    scale: 0,
    ease: Elastic.easeOut.config(1, 0.3),
  });

  item2.to("#anim-item-10", top);

  item1.from("#anim-item-11", {
    duration: 0.5,
    x: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-11", {
    duration: 0,
    scale: 0,
    delay: 1.5,
    ease: "Power1.easeInOut",
  });
};

export default animation;
