export const initCursorAnimation = () => {
  const canvas = document.querySelector<HTMLCanvasElement>('.js-canvas-cursor');
  const ctx = canvas?.getContext('2d');

  if (!canvas || !ctx) return;

  type Point = {
    x: number;
    y: number;
  };

  const dppx = window.devicePixelRatio || 1;

  const updateCanvas = () => {
    canvas.width = document.documentElement.clientWidth * dppx;
    canvas.height = document.documentElement.clientHeight * dppx;

    ctx.scale(dppx, dppx);
  };

  const points: Point[] = [];

  updateCanvas();

  window.addEventListener('mousemove', (e) => {
    points.push({ x: e.clientX, y: e.clientY });

    if (points.length > 20) {
      points.shift();
    }
  });

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    points.forEach((pointItem, i) => {
      if (i === 0) {
        ctx.moveTo(pointItem.x, pointItem.y);
      } else {
        ctx.lineTo(pointItem.x, pointItem.y);
      }
    });

    ctx.strokeStyle = '#fff4e7';
    ctx.lineWidth = 2;
    ctx.stroke();

    requestAnimationFrame(draw);
  };

  draw();

  window.addEventListener('resize', updateCanvas);
};
