import Down from "./Down";
import Up from "./Up";
import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Twitter from "./Twitter";
import Youtube from "./Youtube";

export type SocialsType = "Youtube" | "Instagram" | "Twitter" | "Facebook";

const icons = {
  Down,
  Up,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
};

export function getSocialIcon(social: SocialsType) {
  return icons[social];
}

export default icons;
