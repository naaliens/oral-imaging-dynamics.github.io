export const materialConfigs = {
  hueso_tejido: {
    config: { energia: 60, angulo: 10, grosor: 10, voltaje: 65, corriente: 7, tiempo: 0.12 },
    description: "Equilibra la visualización del hueso y tejido, mostrando ambos con claridad sin exceso de radiación."
  },
  hueso_solo: {
    config: { energia: 55, angulo: 8, grosor: 5, voltaje: 60, corriente: 6, tiempo: 0.1 },
    description: "Optimiza la absorción del hueso y minimiza la dispersión, maximizando el contraste."
  },
  tejido_blando: {
    config: { energia: 50, angulo: 5, grosor: 3, voltaje: 55, corriente: 5, tiempo: 0.08 },
    description: "Ajusta la visualización para mayor claridad en tejidos suaves sin saturar la imagen."
  },
  dientes_brackets: {
    config: { energia: 70, angulo: 12, grosor: 15, voltaje: 70, corriente: 9, tiempo: 0.15 },
    description: "Refleja los efectos del metal sin comprometer la imagen del diente."
  },
  dientes_implantes: {
    config: { energia: 75, angulo: 10, grosor: 18, voltaje: 70, corriente: 10, tiempo: 0.2 },
    description: "Configura la visualización para capturar los detalles del implante sin excesiva dispersión."
  },
  dientes_endodoncia: {
    config: { energia: 65, angulo: 8, grosor: 12, voltaje: 65, corriente: 8, tiempo: 0.12 },
    description: "Resalta los materiales de relleno internos sin perder detalle de las estructuras adyacentes."
  }
};

export const drawMaterialIcon = (ctx, material, x, y, radius) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(radius / 50, radius / 50);

  switch (material) {
    case 'hueso_tejido':
      drawMaxilarWithTissue(ctx);
      break;
    case 'hueso_solo':
      drawBoneOnly(ctx);
      break;
    case 'tejido_blando':
      drawSoftTissue(ctx);
      break;
    case 'dientes_brackets':
      drawToothWithBrackets(ctx);
      break;
    case 'dientes_implantes':
      drawToothWithImplant(ctx);
      break;
    case 'dientes_endodoncia':
      drawToothWithEndodontics(ctx);
      break;
  }

  ctx.restore();
};

const drawMaxilarWithTissue = (ctx) => {
  ctx.fillStyle = '#d3d3d3';
  ctx.beginPath();
  ctx.moveTo(-40, 20);
  ctx.quadraticCurveTo(-20, -20, 0, -20);
  ctx.quadraticCurveTo(20, -20, 40, 20);
  ctx.quadraticCurveTo(20, 40, 0, 40);
  ctx.quadraticCurveTo(-20, 40, -40, 20);
  ctx.fill();

  ctx.fillStyle = 'rgba(255, 192, 203, 0.7)';
  ctx.beginPath();
  ctx.moveTo(-45, 15);
  ctx.quadraticCurveTo(-22, -25, 0, -25);
  ctx.quadraticCurveTo(22, -25, 45, 15);
  ctx.quadraticCurveTo(22, 45, 0, 45);
  ctx.quadraticCurveTo(-22, 45, -45, 15);
  ctx.fill();
};

const drawBoneOnly = (ctx) => {
  ctx.fillStyle = '#d3d3d3';
  ctx.beginPath();
  ctx.moveTo(-40, 20);
  ctx.quadraticCurveTo(-20, -20, 0, -20);
  ctx.quadraticCurveTo(20, -20, 40, 20);
  ctx.quadraticCurveTo(20, 40, 0, 40);
  ctx.quadraticCurveTo(-20, 40, -40, 20);
  ctx.fill();

  for (let i = 0; i < 50; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.beginPath();
    ctx.arc(Math.random() * 80 - 40, Math.random() * 60 - 20, 1, 0, 2 * Math.PI);
    ctx.fill();
  }
};

const drawSoftTissue = (ctx) => {
  ctx.fillStyle = '#ffc0cb';
  ctx.beginPath();
  ctx.moveTo(-45, 15);
  ctx.quadraticCurveTo(-22, -25, 0, -25);
  ctx.quadraticCurveTo(22, -25, 45, 15);
  ctx.quadraticCurveTo(22, 45, 0, 45);
  ctx.quadraticCurveTo(-22, 45, -45, 15);
  ctx.fill();
};

const drawToothWithBrackets = (ctx) => {
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(-20, 30);
  ctx.quadraticCurveTo(-20, -30, 0, -30);
  ctx.quadraticCurveTo(20, -30, 20, 30);
  ctx.quadraticCurveTo(0, 40, -20, 30);
  ctx.fill();

  ctx.fillStyle = '#808080';
  ctx.fillRect(-15, -5, 30, 10);
  ctx.fillStyle = '#c0c0c0';
  for (let i = -10; i <= 10; i += 10) {
    ctx.fillRect(i, -5, 5, 10);
  }
};

const drawToothWithImplant = (ctx) => {
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(-20, 30);
  ctx.quadraticCurveTo(-20, -30, 0, -30);
  ctx.quadraticCurveTo(20, -30, 20, 30);
  ctx.quadraticCurveTo(0, 40, -20, 30);
  ctx.fill();

  ctx.fillStyle = '#808080';
  ctx.beginPath();
  ctx.moveTo(-5, 30);
  ctx.lineTo(5, 30);
  ctx.lineTo(3, -20);
  ctx.lineTo(-3, -20);
  ctx.closePath();
  ctx.fill();
};

const drawToothWithEndodontics = (ctx) => {
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(-20, 30);
  ctx.quadraticCurveTo(-20, -30, 0, -30);
  ctx.quadraticCurveTo(20, -30, 20, 30);
  ctx.quadraticCurveTo(0, 40, -20, 30);
  ctx.fill();

  ctx.fillStyle = '#a0522d';
  ctx.beginPath();
  ctx.moveTo(-5, 30);
  ctx.quadraticCurveTo(-5, -20, 0, -20);
  ctx.quadraticCurveTo(5, -20, 5, 30);
  ctx.quadraticCurveTo(0, 35, -5, 30);
  ctx.fill();
};

export const applyRadiographyEffect = (ctx, centerX, centerY, radius, config) => {
  const imageData = ctx.getImageData(centerX - radius, centerY - radius, radius * 2, radius * 2);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    const intensity = calculateIntensity(avg, config);
    data[i] = data[i + 1] = data[i + 2] = intensity;
  }
  ctx.putImageData(imageData, centerX - radius, centerY - radius);
};

const calculateIntensity = (avg, config) => {
  const { energia, voltaje, corriente, tiempo } = config;
  const factor = (energia * voltaje * corriente * tiempo) / 10000;
  return Math.min(255, Math.max(0, 255 - avg * factor));
};