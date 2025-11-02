import { motion } from "framer-motion";
import { useIsFirstMount } from "../../pages/home/animations/useIsFirstMount";
import { NavLink } from "react-router-dom";
import { NAVBAR } from "./const";
import { NavItemContent } from "./NavItemContent";
import { useTheme } from "./useTheme";
import { SunIcon } from "../icons/SunIcon";
import logo from "../../../public/assets/homepage/logo-white.svg";
import logoLight from "../../../public/assets/homepage/logo-dark.svg";
import { LocationClockSlide } from "./LocationClockSlide";
import { Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const logoSrc = theme === "dark" ? logo : logoLight;
  const MotionNavLink = motion(NavLink);
  const firstMount = useIsFirstMount();
  const isDark = theme === "dark";
  const flip = () => setTheme(isDark ? "light" : "dark");

  return (
    <header className="py-3 md:py-4 w-full absolute top-0 left-1/2 -translate-x-1/2 z-20">
      <motion.div
        initial={firstMount ? { y: -16, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
        className="max-container flex justify-between items-center rounded-lg relative"
      >
        <MotionNavLink
          to="/"
          className="group hidden md:block"
          whileHover="hover"
          initial={false}
        >
          <div className="flex items-center gap-1 md:gap-[6px] py-[10px]">
            {/* keep translate on a wrapper */}
            <span className="-translate-y-[2px] inline-flex">
              <motion.img
                src={logoSrc}
                alt="white logo"
                className="w-[18px] h-[18px] md:w-5 md:h-5 block origin-center"
                // static when not hovered
                animate={{ rotate: 0 }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                variants={{
                  hover: {
                    rotate: 360,
                    transition: {
                      duration: 4,
                      ease: "linear",
                      repeat: Infinity,
                    },
                  },
                }}
                style={{ transformOrigin: "50% 50%" }}
              />
            </span>

            <span className="text-[17px] md:text-[18px] font-canela text-dark-700 dark:text-white-100 tracking-[1px] leading-none">
              T.Lin
            </span>
          </div>
        </MotionNavLink>

        {/* Navigation */}
        <nav className="flex items-center md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          {NAVBAR.ITEMS.map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={NAVBAR.CLASSES.BASE}
            >
              {({ isActive }) => (
                <NavItemContent isActive={isActive} label={label} />
              )}
            </NavLink>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center gap-3">
          <LocationClockSlide />

          <button
            type="button"
            role="switch"
            aria-checked={isDark}
            onClick={flip}
            className="h-[28px] w-[48px] rounded-full bg-light-400/50 dark:bg-dark-300/80 border border-greyscale-200/40 dark:border-black relative shadow-block dark:shadow-blockDark"
          >
            <div
              className={[
                "absolute top-1/2 left-[2px] -translate-y-1/2 h-[23px] w-[23px] rounded-full bg-light-100 dark:bg-dark-700 inline-flex items-center justify-center transform-gpu transition-transform duration-300 ease-out will-change-transform",
                isDark ? "translate-x-[19px]" : "translate-x-0",
              ].join(" ")}
            >
              {!isDark ? (
                <SunIcon className="w-[14px] text-dark-900 " strokeWidth={2} />
              ) : (
                <Moon
                  className="w-[13px] text-white-100"
                  fill="white"
                  strokeWidth={2}
                />
              )}
            </div>
          </button>
        </div>
      </motion.div>
    </header>
  );
}
