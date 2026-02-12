export const initIconAnimation = () => {
  if (!document.querySelector('.js-icon')) return;

  const frequency = [-0.02, 0.01, -0.01, 0.02];
  const scale = [1, -1, 1.5, -1.5];

  const icon = document.querySelector('.js-icon');
  const filterFrequency = icon?.querySelector('[baseFrequency]');
  const filterScale = icon?.querySelector('[scale]');
  const delay = 120;
  let i = 0;
  let lastTime = 0;

  const animate = (time: number) => {
    if (time - lastTime >= delay) {
      const currentFrequency = Number(filterFrequency?.getAttribute('baseFrequency'));
      const currentScale = Number(filterScale?.getAttribute('scale'));
      filterFrequency?.setAttribute('baseFrequency', String(currentFrequency + frequency[i]));
      filterScale?.setAttribute('scale', String(currentScale + scale[i]));

      i++;
      if (i >= frequency.length) {
        i = 0;
      }

      lastTime = time;
    }

    requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};
