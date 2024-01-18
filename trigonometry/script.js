const circle = document.getElementById('circle');
const circleCTX = circle.getContext("2d");

const canvasOpt = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const circleOpt = {
  radius: Math.min(canvasOpt.width, canvasOpt.height) / 2 - 60,
};

const triangleOpt = {
  A: { x: canvasOpt.width / 2, y: canvasOpt.height / 2 },
  B: { x: 0, y: 0 },
  C: { x: 0, y: 0 },
  theta: 0,
  deg: 0,
};

circle.width = canvasOpt.width;
circle.height = canvasOpt.height;

const isInfinity = (number) => {
  return number === "Infinity" ? "∞" : number;
};

// const getAvarage = (posStart, posEnd) => {
//   return {
//     x: (posEnd.x - posStart.x) / 2,
//     y: (posEnd.y - posStart.y) / 2,
//   };
// }

const drawGraph = (ctx, options) => {
  ctx.strokeStyle = "#808080";
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(options.width / 2, options.height / 2 - options.radius - 30);
  ctx.lineTo(options.width / 2, options.height / 2 + options.radius + 30);
  ctx.moveTo(options.width / 2 - options.radius - 30, options.height / 2);
  ctx.lineTo(options.width / 2 + options.radius + 30, options.height / 2);
  ctx.stroke();

  ctx.fillStyle = "#434343"
  ctx.font = "20px Arial, sans-serif";
  ctx.fillText("1", options.width / 2 - 7, options.height / 2 - options.radius - 38);
  ctx.fillText("1", options.width / 2 + options.radius + 38, options.height / 2 + 7);
  ctx.fillText("-1", options.width / 2 - 7, options.height / 2 + options.radius + 50);
  ctx.fillText("-1", options.width / 2 - options.radius - 50, options.height / 2 + 7);
}

const drawCircle = (ctx, options) => {
  ctx.strokeStyle = "#808080";
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.arc(options.width / 2, options.height / 2, options.radius, 0, Math.PI * 2);
  ctx.stroke();
}

const drawRadian = (ctx, options) => {
  ctx.strokeStyle = "#000000";
  ctx.beginPath();
  ctx.lineWidth = 2;

  ctx.arc(options.width / 2, options.height / 2, options.radius / 100 * 10, 0, -Math.asin(Math.sin(triangleOpt.theta)), true);
  ctx.stroke();
}

const drawTrianglePoint = (type, ctx, options) => {
  ctx.font = "16px Arial, sans-serif";
  ctx.fillStyle = "#808080";
  ctx.strokeStyle = "#808080";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(options[type].x, options[type].y, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = '#ffffff';
  ctx.fillText(type, options[type].x - 5, options[type].y + 5);
}

const drawTriangle = (ctx, options) => {
  options.B.x = options.A.x + Math.cos(options.theta) * options.radius;
  options.B.y = options.A.y + (-Math.sin(options.theta)) * options.radius;

  options.C.x = options.B.x;
  options.C.y = options.A.y;

  ctx.lineWidth = 4;
  ctx.lineJoin = "round";

  ctx.beginPath();
  ctx.strokeStyle = "#CFA23F";
  ctx.moveTo(options.A.x, options.A.y);
  ctx.lineTo(options.B.x, options.B.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#B53764";
  ctx.moveTo(options.B.x, options.B.y);
  ctx.lineTo(options.C.x, options.C.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#413990";
  ctx.moveTo(options.C.x, options.C.y);
  ctx.lineTo(options.A.x, options.A.y);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#B53764";
  ctx.moveTo(options.width / 2 + options.radius, options.C.y);
  ctx.lineTo(options.width / 2 + options.radius, options.C.y - Math.tan(options.theta).toFixed(2) * options.radius);
  ctx.stroke();

  ctx.beginPath();
  ctx.strokeStyle = "#413990";
  ctx.moveTo(options.A.x, options.height / 2 + options.radius);
  ctx.lineTo((options.width / 2) + ((1 / Math.tan(options.theta)).toFixed(2) * options.radius), options.height / 2 + options.radius);
  ctx.stroke();

  drawTrianglePoint('A', circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
  drawTrianglePoint('B', circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
  drawTrianglePoint('C', circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
}

const drawInfo = (ctx, options) => {
  ctx.fillStyle = "#434343"
  ctx.font = "16px Arial, sans-serif";
  ctx.fillText(`Radian: ${options.theta}`, options.width / 2 - options.radius - 40, options.height / 100 * 4);
  ctx.fillText(`Degree: ${options.deg}`, options.width / 2 - options.radius - 40, options.height / 100 * 4 + 20);

  ctx.fillStyle = "#B53764";
  ctx.fillText(`sin: ${(Math.sin(options.theta).toFixed(2))}`, options.width / 2 - options.radius - 40, options.height / 100 * 4 + 50);
  ctx.fillStyle = "#413990";
  ctx.fillText(`cos: ${(Math.cos(options.theta).toFixed(2))}`, options.width / 2 - options.radius - 40, options.height / 100 * 4 + 70);
  ctx.fillStyle = "#B53764";
  ctx.fillText(`tan: ${(isInfinity(Math.tan(options.theta).toFixed(2)))}`, options.width / 2 - options.radius - 40, options.height / 100 * 4 + 90);
  ctx.fillStyle = "#413990";
  ctx.fillText(`ctan: ${isInfinity((1 / Math.tan(options.theta)).toFixed(2))}`, options.width / 2 - options.radius - 40, options.height / 100 * 4 + 110);
}

drawGraph(circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
drawCircle(circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
drawTriangle(circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
drawInfo(circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });

document.addEventListener('scroll', (e) => {
  const step = (Math.PI * 2) / (document.body.scrollHeight - window.innerHeight);

  const theta = step * window.scrollY;
  const deg = theta / Math.PI * 180;

  triangleOpt.theta = +theta.toFixed(2);
  triangleOpt.deg = Math.round(deg) > 360 ? 360 : Math.round(deg);

  circleCTX.clearRect(0, 0, circle.width, circle.height);

  drawGraph(circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
  drawCircle(circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
  drawTriangle(circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
 
  drawInfo(circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });
  // drawRadian(circleCTX, { ...canvasOpt, ...circleOpt, ...triangleOpt });

});