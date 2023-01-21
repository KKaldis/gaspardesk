import { Elastic, gsap } from "gsap";

const animation = () => {
  const item1 = gsap.timeline({ repeat: -1, repeatDelay: 0 });
  const item2 = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
  item1.from("#anim-item-1", 0, {
    delay: 0,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-1", 0.5, {
    y: "-200",
    delay: 1,
    ease: "Power1.easeInOut",
    scale: 0,
  });

  item2.from("#anim-item-2", 0.5, {
    y: "200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item2.to("#anim-item-2", 0.5, {
    y: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });

  item1.from("#anim-item-3", 0.5, {
    y: "200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-3", 0.5, {
    y: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });

  item2.from("#anim-item-4", 0.5, {
    y: "200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item2.to("#anim-item-4", 0.5, {
    y: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });

  item1.from("#anim-item-5", 0.5, {
    y: "200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-5", 0.5, {
    y: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });

  item2.from("#anim-item-6", 0.5, {
    y: "200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item2.to("#anim-item-6", 0.5, {
    y: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });

  item1.from("#anim-item-7", 0.5, {
    y: "200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-7", 0.5, {
    y: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });

  item2.from("#anim-item-8", 0.5, {
    y: "200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item2.to("#anim-item-8", 0.5, {
    y: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });

  item1.from("#anim-item-9", 0.5, {
    y: "200",
    fill: "var(--light)",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-9", 0, {
    fill: "var(--light)",
    delay: 0,
    ease: "Power1.easeInOut",
  });

  item1.from("#anim-item-9", 0, {
    fill: "var(--primary)",
    delay: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-9", 0.5, {
    rotate: "-90",
    fill: "var(--primary)",
    delay: 1,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-9", 0.5, {
    x: "200",
    y: "-200",
    delay: 0.5,
    scale: 0,
    display: "none",
  });

  item2.from("#anim-item-10", 0.5, {
    x: "-200",
    y: "200",
    delay: 2,
    scale: 0,
    ease: Elastic.easeOut.config(1, 0.3),
  });

  item2.to("#anim-item-10", 0.5, {
    y: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });

  item1.from("#anim-item-11", 0.5, {
    x: "-200",
    delay: 1,
    scale: 0,
    ease: "Power1.easeInOut",
  });
  item1.to("#anim-item-11", 0, {
    scale: 0,
    delay: 1.5,
    ease: "Power1.easeInOut",
  });
};

export default animation;
