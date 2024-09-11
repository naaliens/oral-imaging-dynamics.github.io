export const materialConfigs = {
  hueso_tejido: {
    config: { energia: 60, angulo: 10, grosor: 10, voltaje: 65, corriente: 7, tiempo: 0.12 },
    description: "Equilibra la visualización del hueso y tejido, mostrando ambos con claridad sin exceso de radiación.",
    ranges: {
      energia: [60, 65],
      angulo: [10, 12],
      grosor: [8, 12],
      voltaje: [65, 70],
      corriente: [7, 8],
      tiempo: [0.12, 0.15]
    },
    units: {
      energia: 'keV',
      angulo: '°',
      grosor: 'mm',
      voltaje: 'kVp',
      corriente: 'mA',
      tiempo: 's'
    },
    fundamentos: {
      energia: "Valores intermedios proporcionan buena penetración sin perder contraste.",
      angulo: "Un ángulo moderado reduce la distorsión y mejora la visualización de estructuras superpuestas.",
      grosor: "Representa la combinación de hueso y tejido blando circundante.",
      voltaje: "Suficiente para penetrar el hueso sin sobreexponer el tejido blando.",
      corriente: "Balanceada para obtener una imagen clara sin exceso de radiación.",
      tiempo: "Corto para evitar movimiento del paciente, pero suficiente para una buena exposición."
    }
  },
  hueso_solo: {
    config: { energia: 55, angulo: 8, grosor: 5, voltaje: 60, corriente: 6, tiempo: 0.1 },
    description: "Optimiza la absorción del hueso y minimiza la dispersión, maximizando el contraste.",
    ranges: {
      energia: [55, 60],
      angulo: [8, 10],
      grosor: [5, 8],
      voltaje: [60, 65],
      corriente: [6, 7],
      tiempo: [0.1, 0.12]
    },
    units: {
      energia: 'keV',
      angulo: '°',
      grosor: 'mm',
      voltaje: 'kVp',
      corriente: 'mA',
      tiempo: 's'
    },
    fundamentos: {
      energia: "Energía más baja para evitar sobreexposición del hueso y maximizar el contraste.",
      angulo: "Ángulo menor para reducir la distorsión en la proyección del hueso.",
      grosor: "Representa el grosor típico del hueso mandibular o maxilar.",
      voltaje: "Ajustado para penetrar el hueso sin exceso, mejorando el detalle.",
      corriente: "Reducida para evitar sobreexposición, manteniendo buena calidad de imagen.",
      tiempo: "Corto para minimizar la dosis de radiación y el movimiento del paciente."
    }
  },
  tejido_blando: {
    config: { energia: 50, angulo: 5, grosor: 3, voltaje: 55, corriente: 5, tiempo: 0.08 },
    description: "Ajusta la visualización para mayor claridad en tejidos suaves sin saturar la imagen.",
    ranges: {
      energia: [50, 55],
      angulo: [5, 7],
      grosor: [2, 5],
      voltaje: [55, 60],
      corriente: [5, 6],
      tiempo: [0.08, 0.1]
    },
    units: {
      energia: 'keV',
      angulo: '°',
      grosor: 'mm',
      voltaje: 'kVp',
      corriente: 'mA',
      tiempo: 's'
    },
    fundamentos: {
      energia: "Baja energía para optimizar el contraste en tejidos blandos sin sobreexposición.",
      angulo: "Ángulo pequeño para minimizar la distorsión en estructuras delicadas.",
      grosor: "Representa capas delgadas de tejido blando como encías o mucosa.",
      voltaje: "Bajo para asegurar buen contraste en tejidos de baja densidad.",
      corriente: "Reducida para evitar sobreexposición en estructuras sensibles.",
      tiempo: "Muy corto para prevenir borrosidad por movimiento en tejidos blandos."
    }
  },
  dientes_brackets: {
    config: { energia: 70, angulo: 12, grosor: 15, voltaje: 70, corriente: 9, tiempo: 0.15 },
    description: "Refleja los efectos del metal sin comprometer la imagen del diente.",
    ranges: {
      energia: [70, 75],
      angulo: [12, 15],
      grosor: [12, 18],
      voltaje: [70, 75],
      corriente: [8, 9],
      tiempo: [0.15, 0.2]
    },
    units: {
      energia: 'keV',
      angulo: '°',
      grosor: 'mm',
      voltaje: 'kVp',
      corriente: 'mA',
      tiempo: 's'
    },
    fundamentos: {
      energia: "Alta energía para penetrar los brackets metálicos sin perder detalle dental.",
      angulo: "Ángulo mayor para compensar la distorsión causada por los brackets.",
      grosor: "Incluye el grosor combinado de dientes, brackets y estructuras circundantes.",
      voltaje: "Elevado para asegurar penetración a través de los materiales densos.",
      corriente: "Aumentada para compensar la absorción por los brackets metálicos.",
      tiempo: "Ligeramente mayor para asegurar suficiente exposición sin artefactos."
    }
  },
  dientes_implantes: {
    config: { energia: 75, angulo: 10, grosor: 18, voltaje: 70, corriente: 10, tiempo: 0.2 },
    description: "Configura la visualización para capturar los detalles del implante sin excesiva dispersión.",
    ranges: {
      energia: [75, 80],
      angulo: [10, 12],
      grosor: [15, 20],
      voltaje: [70, 80],
      corriente: [9, 10],
      tiempo: [0.2, 0.25]
    },
    units: {
      energia: 'keV',
      angulo: '°',
      grosor: 'mm',
      voltaje: 'kVp',
      corriente: 'mA',
      tiempo: 's'
    },
    fundamentos: {
      energia: "Muy alta para penetrar implantes metálicos y visualizar estructuras circundantes.",
      angulo: "Moderado para minimizar distorsión y artefactos causados por el implante.",
      grosor: "Considera el implante y las estructuras óseas y dentales adyacentes.",
      voltaje: "Alto para asegurar penetración adecuada del implante y tejidos circundantes.",
      corriente: "Elevada para compensar la alta absorción del implante metálico.",
      tiempo: "Mayor para asegurar suficiente exposición sin comprometer la calidad."
    }
  },
  dientes_endodoncia: {
    config: { energia: 65, angulo: 8, grosor: 12, voltaje: 65, corriente: 8, tiempo: 0.12 },
    description: "Resalta los materiales de relleno internos sin perder detalle de las estructuras adyacentes.",
    ranges: {
      energia: [65, 70],
      angulo: [8, 10],
      grosor: [10, 12],
      voltaje: [65, 70],
      corriente: [8, 9],
      tiempo: [0.12, 0.15]
    },
    units: {
      energia: 'keV',
      angulo: '°',
      grosor: 'mm',
      voltaje: 'kVp',
      corriente: 'mA',
      tiempo: 's'
    },
    fundamentos: {
      energia: "Intermedia para visualizar tanto el material de relleno como la estructura dental.",
      angulo: "Pequeño para minimizar distorsión y mejorar la visualización de los canales.",
      grosor: "Considera el diente tratado y las estructuras periapicales.",
      voltaje: "Balanceado para penetrar el diente y el material de relleno sin perder detalle.",
      corriente: "Moderada para obtener buen contraste entre el relleno y la dentina.",
      tiempo: "Suficiente para capturar detalles finos sin sobreexposición."
    }
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