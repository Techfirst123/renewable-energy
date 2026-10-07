import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
  Per-page SEO tags without any extra library.
  Sets <title>, meta description, canonical, Open Graph and Twitter tags.

  >>> CHANGE SITE_URL to your live domain (also in public/sitemap.xml and
      public/robots.txt) before launch. <<<
*/
export const SITE_URL = "https://www.rrev.in";
export const SITE_NAME = "Renewable Rise Energy Venture";

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * @param {string} title        under 60 characters, main keyword first
 * @param {string} description  under 155 characters
 * @param {string} [image]      social share image, path from the site root
 * @param {boolean} [noindex]   true to keep a page out of search results
 */
function Seo({ title, description, image = "/assets/brand/rrev-logo-full.png", noindex = false }) {
  const { pathname } = useLocation();
  const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    document.title = title;

    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setLink("canonical", url);

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", `${SITE_URL}${image}`);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", `${SITE_URL}${image}`);
  }, [title, description, image, noindex, url]);

  return null;
}

export default Seo;
