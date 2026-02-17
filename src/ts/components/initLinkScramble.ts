import gsap from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

export const initLinkScramble = () => {
  const links = document.querySelectorAll('.js-link-scramble');

  if (!links.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrambleTextPlugin);

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  const scramble = (item: Element, text: string) => {
    gsap.to(item, {
      duration: 0.8,
      ease: 'sine.in',
      scrambleText: {
        text: text,
        chars: chars,
        speed: 2,
        tweenLength: true,
      },
    });
  };

  links.forEach((linkItem) => {
    const text = linkItem.textContent;

    linkItem.addEventListener('mouseenter', () => {
      scramble(linkItem, text);
    });

    linkItem.addEventListener('focus', () => {
      scramble(linkItem, text);
    });
  });
};
