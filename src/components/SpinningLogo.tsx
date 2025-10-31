import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useMotionValue,
  useAnimationFrame,
  useReducedMotion,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import logo from "../../public/assets/homepage/logo-white.svg";
import logoLight from "../../public/assets/homepage/logo-dark.svg";

type SpinningLogoProps = {
  className?: string; // optional, to override placement classes
  baseRps?: number; // idle rotations per second
  boost?: number; // scroll velocity multiplier
  imgClassName?: string;
};

export function SpinningLogo({
  className,
  baseRps = 0.15,
  boost = 0.001,
  imgClassName = "w-12",
}: SpinningLogoProps) {
  const reduce = useReducedMotion();
  const rotate: MotionValue<number> = useMotionValue(0);

  // Scroll velocity in px per second, positive when scrolling down
  const { scrollY } = useScroll();
  const rawVel = useVelocity(scrollY);
  const vel = useSpring(rawVel, { stiffness: 140, damping: 26 });

  useAnimationFrame((_, delta) => {
    if (reduce) return; // respect prefers reduced motion
    const dt = delta / 1000;
    const v = vel.get(); // px per second
    const rps = baseRps + boost * v; // can go negative on scroll up
    rotate.set(rotate.get() + rps * 360 * dt);
  });

  return (
    <motion.div className={className}>
      <motion.img
        src={logo}
        alt="logo"
        className={`${imgClassName} hidden dark:block`}
        style={{ rotate, transformOrigin: "50% 50%" }}
      />
      <motion.img
        src={logoLight}
        className={`${imgClassName} block dark:hidden`}
        alt="logo"
        style={{ rotate, transformOrigin: "50% 50%" }}
      />
    </motion.div>
  );
}
