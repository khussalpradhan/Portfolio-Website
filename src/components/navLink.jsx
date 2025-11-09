"use client";

import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  // When the site is exported as static HTML (output: 'export'), some hosts
  // (or static servers) expect links to point to the generated `.html` files
  // (e.g. `/about.html`). During local development we want the clean route
  // (`/about`) to work with the Next dev server. This helper returns the
  // correct href at runtime.
  const toHref = (url) => {
    const isServer = typeof window === "undefined";
    // During a production static export we want links to point to the
    // generated `.html` files so static servers resolve them correctly.
    if (isServer) {
      if (process.env.NODE_ENV === "production") {
        return url === "/" ? "/" : `${url}.html`;
      }
      return url;
    }
    const host = window.location.hostname || "";
    const isLocal = host.includes("localhost") || host.startsWith("127.") || host.startsWith("192.168.");
    if (isLocal) return url;
    return url === "/" ? "/" : `${url}.html`;
  };

  return (
    <a className={`rounded p-1 ${pathName === link.url ? "bg-black text-white" : ""}`} href={toHref(link.url)}>
      {link.title}
    </a>
  );
};

export default NavLink;