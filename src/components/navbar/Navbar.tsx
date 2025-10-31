import { motion } from "framer-motion";
import { useIsFirstMount } from "../../pages/home/animations/useIsFirstMount";
import { NavLink } from "react-router-dom";
import { NAVBAR } from "./const";
import { NavItemContent } from "./NavItemContent";
import { useTheme } from "./useTheme";
import { NightIcon } from "../icons/NightIcon";
import { SunIcon } from "../icons/SunIcon";
import logo from "../../../public/assets/homepage/logo-white.svg";
import logoLight from "../../../public/assets/homepage/logo-dark.svg";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const logoSrc = theme === "dark" ? logo : logoLight;
  const MotionNavLink = motion(NavLink);
  const firstMount = useIsFirstMount();

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
        <div className="flex items-center gap-4">
          <p className="uppercase tracking-[1px] text-[12.5px] hidden md:block">
            Vancouver, BC
          </p>
          <div className="flex items-center rounded-full button overflow-hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              aria-pressed={theme === "dark"}
              className="relative w-11 h-11 overflow-hidden rounded-full"
            >
              {/* Sun */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none rounded-full ">
                <span
                  className={`transition-all duration-500 ease-in-out transform-gpu ${
                    theme === "dark"
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                >
                  <SunIcon />
                </span>
              </span>

              {/* Moon */}
              <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span
                  className={`transition-all duration-500 ease-in-out transform-gpu ${
                    theme === "dark"
                      ? "-translate-y-8 opacity-0"
                      : "translate-y-0 opacity-100"
                  }`}
                >
                  <NightIcon />
                </span>
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </header>
  );
}
