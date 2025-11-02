import { useState } from "react";
import { Mail, Copy } from "lucide-react";

export function ContactCopy() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("contact@tinalin.ca");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div
      className="dock ring-gradient flex justify-center items-center gap-3 pr-2 pl-6 py-2 rounded-full relative w-fit cursor-pointer overflow-visible transition-[padding] duration-300 ease-out 
        after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-px after:w-[120px] after:-translate-x-1/2 after:rounded-full after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.75),transparent)]"
    >
      <div className="flex justify-center items-center gap-1 md:gap-[10px]">
        <Mail
          className="text-greyscale-300 dark:text-greyscale-200 h-[16px] md:w-[17px] md:h-[17px] -translate-y-[1px]"
          strokeWidth={2}
        />
        <p className="font-normal text-greyscale-300  [html.dark_&]:text-greyscale-200 uppercase font-inter small md:tracking-[1.2px]">
          contact@tinalin.ca
        </p>
      </div>

      {/* copy button */}
      <button
        onClick={handleCopy}
        className="button rounded-full group bg-light-200 dark:bg-dark-500 transition-all duration-300 hover:scale-[1.05] p-[.9rem] shadow-dockbtnShadow dark:shadow-dockbtnShadowDark relative"
        aria-live="polite"
      >
        <Copy
          className="dark:text-white-100 w-[16px] h-[16px] md:w-[18px] md:h-[18px]"
          strokeWidth={2}
        />

        {/* Copied badge, appears after click */}
        <span
          className={`pointer-events-none absolute rotate-[15deg] -top-3 -right-10 translate-y-[-100%] rounded-md dark:bg-light-100 dark:text-dark-600 bg-dark-600 text-white-100 text-sm font-normal tracking-wide px-2 py-[2px] shadow-lg transition-opacity duration-150 
            ${copied ? "opacity-100" : "opacity-0"}`}
        >
          Copied
        </span>
      </button>
    </div>
  );
}
