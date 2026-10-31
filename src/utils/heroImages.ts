import { getImage } from "astro:assets";
import fotoHero from "../assets/images/fotohero.jpeg";
import fotoHeroSquare from "../assets/images/fotohero-square.jpeg";

const desktopWidths = [480, 640, 800, 960];
const mobileWidths = [480, 640, 800, 960];

export async function getHeroDesktopImage() {
  return getImage({
    src: fotoHero,
    format: "webp",
    widths: desktopWidths,
    sizes: "(min-width: 1024px) 50vw",
    quality: 60,
  });
}

export async function getHeroMobileImage() {
  return getImage({
    src: fotoHeroSquare,
    format: "webp",
    widths: mobileWidths,
    sizes: "(max-width: 600px) 88vw, 92vw",
    quality: 60,
  });
}
