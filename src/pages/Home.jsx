import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const materialConfigs = {
  hueso_tejido: {
    config: { energia: 70, angulo: 5, grosor: 8, voltaje: 65, corriente: 7, tiempo: 0.1 },
    description: "Equilibra la visualización del hueso y tejido, mostrando ambos con claridad sin exceso de radiación."
  },
  hueso_solo: {
    config: { energia: 100, angulo: 0, grosor: 10, voltaje: 70, corriente: 10, tiempo: 0.1 },
    description: "Optimiza la absorción del hueso y minimiza la dispersión, maximizando el contraste."
  },
  tejido_blando: {
    config: { energia: 60, angulo: 10, grosor: 5, voltaje: 60, corriente: 5, tiempo: 0.08 },
    description: "Ajusta la visualización para mayor claridad en tejidos suaves sin saturar la imagen."
  },
  dientes_brackets: {
    config: { energia: 85, angulo: 15, grosor: 7, voltaje: 75, corriente: 12, tiempo: 0.15 },
    description: "Refleja los efectos del metal sin comprometer la imagen del diente."
  },
  dientes_implantes: {
    config: { energia: 95, angulo: 20, grosor: 8, voltaje: 80, corriente: 15, tiempo: 0.2 },
    description: "Configura la visualización para capturar los detalles del implante sin excesiva dispersión."
  },
  dientes_endodoncia: {
    config: { energia: 90, angulo: 10, grosor: 6, voltaje: 70, corriente: 9, tiempo: 0.1 },
    description: "Resalta los materiales de relleno internos sin perder detalle de las estructuras adyacentes."
  }
};

const Home = () => {
  const [material, setMaterial] = useState('hueso_tejido');
  const [config, setConfig] = useState(materialConfigs.hueso_tejido.config);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      updateSimulation(ctx);
    }
  }, [config, material]);

  const updateSimulation = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const radius = Math.min(ctx.canvas.width, ctx.canvas.height) / 4;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = getMaterialColor(material);
    ctx.fill();
    
    drawMaterialIcon(ctx, material, centerX, centerY, radius);
    
    const rayCount = 8;
    const rayLength = radius * 1.5;
    ctx.strokeStyle = `rgba(255, 255, 0, ${config.energia / 100})`;
    ctx.lineWidth = 2;
    
    for (let i = 0; i < rayCount; i++) {
      const angle = (i / rayCount) * 2 * Math.PI + config.angulo * Math.PI / 180;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * rayLength,
        centerY + Math.sin(angle) * rayLength
      );
      ctx.stroke();
    }
  };

  const getMaterialColor = (material) => {
    switch (material) {
      case 'hueso_tejido': return '#e0e0e0';
      case 'hueso_solo': return '#d3d3d3';
      case 'tejido_blando': return '#ffc0cb';
      case 'dientes_brackets': return '#ffffff';
      case 'dientes_implantes': return '#c0c0c0';
      case 'dientes_endodoncia': return '#fffaf0';
      default: return '#f0f0f0';
    }
  };

  const drawMaterialIcon = (ctx, material, x, y, radius) => {
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
    // Dibujar hueso
    ctx.fillStyle = '#d3d3d3';
    ctx.beginPath();
    ctx.moveTo(-40, 20);
    ctx.quadraticCurveTo(-20, -20, 0, -20);
    ctx.quadraticCurveTo(20, -20, 40, 20);
    ctx.quadraticCurveTo(20, 40, 0, 40);
    ctx.quadraticCurveTo(-20, 40, -40, 20);
    ctx.fill();

    // Dibujar tejido blando
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

    // Añadir textura
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
    // Dibujar diente
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(-20, 30);
    ctx.quadraticCurveTo(-20, -30, 0, -30);
    ctx.quadraticCurveTo(20, -30, 20, 30);
    ctx.quadraticCurveTo(0, 40, -20, 30);
    ctx.fill();

    // Dibujar brackets
    ctx.fillStyle = '#808080';
    ctx.fillRect(-15, -5, 30, 10);
    ctx.fillStyle = '#c0c0c0';
    for (let i = -10; i <= 10; i += 10) {
      ctx.fillRect(i, -5, 5, 10);
    }
  };

  const drawToothWithImplant = (ctx) => {
    // Dibujar diente
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(-20, 30);
    ctx.quadraticCurveTo(-20, -30, 0, -30);
    ctx.quadraticCurveTo(20, -30, 20, 30);
    ctx.quadraticCurveTo(0, 40, -20, 30);
    ctx.fill();

    // Dibujar implante
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
    // Dibujar diente
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.moveTo(-20, 30);
    ctx.quadraticCurveTo(-20, -30, 0, -30);
    ctx.quadraticCurveTo(20, -30, 20, 30);
    ctx.quadraticCurveTo(0, 40, -20, 30);
    ctx.fill();

    // Dibujar relleno endodóntico
    ctx.fillStyle = '#a0522d';
    ctx.beginPath();
    ctx.moveTo(-5, 30);
    ctx.quadraticCurveTo(-5, -20, 0, -20);
    ctx.quadraticCurveTo(5, -20, 5, 30);
    ctx.quadraticCurveTo(0, 35, -5, 30);
    ctx.fill();
  };

  const handleConfigChange = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const resetToBasicConfig = () => {
    setConfig(materialConfigs[material].config);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8 text-center">
          Dinámicas de la Imagenología Oral
        </h1>

        <Tabs defaultValue="simulations" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="simulations">Simulaciones Interactivas</TabsTrigger>
            <TabsTrigger value="bibliography">Bibliografía</TabsTrigger>
          </TabsList>

          <TabsContent value="simulations">
            <Card>
              <CardHeader>
                <CardTitle>Simulaciones Interactivas</CardTitle>
                <CardDescription>Explora los conceptos de física de rayos X a través de simulaciones interactivas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Parámetros de Simulación</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Material de interacción</label>
                        <Select value={material} onValueChange={(value) => {
                          setMaterial(value);
                          setConfig(materialConfigs[value].config);
                        }}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un material" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(materialConfigs).map(([key, { config }]) => (
                              <SelectItem key={key} value={key}>
                                <span>{key.replace('_', ' ').charAt(0).toUpperCase() + key.replace('_', ' ').slice(1)}</span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button onClick={resetToBasicConfig}>Configuración Básica</Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Restaura las configuraciones óptimas recomendadas para la mejor visualización.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      {Object.entries(config).map(([key, value]) => (
                        <div key={key}>
                          <label className="block text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                          <Slider
                            value={[value]}
                            onValueChange={(newValue) => handleConfigChange(key, newValue[0])}
                            max={key === 'tiempo' ? 1 : 100}
                            step={key === 'tiempo' ? 0.1 : 1}
                          />
                          <span className="text-sm text-gray-500">{value.toFixed(key === 'tiempo' ? 1 : 0)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Visualización en Tiempo Real</h3>
                    <div className="border border-gray-300 rounded-lg p-4">
                      <canvas ref={canvasRef} width="500" height="500" className="w-full h-auto" />
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-600">{materialConfigs[material].description}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bibliography">
            <Card>
              <CardHeader>
                <CardTitle>Bibliografía</CardTitle>
                <CardDescription>Referencias y recursos adicionales</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>White, S. C., & Pharoah, M. J. (2014). <i>Oral Radiology: Principles and Interpretation</i> (8th ed.). Elsevier.</li>
                  <li>Bushberg, J. T., et al. (2011). <i>The Essential Physics of Medical Imaging</i> (3rd ed.). Lippincott Williams & Wilkins.</li>
                  <li>Iannucci, J. M., & Howerton, L. J. (2016). <i>Dental Radiography: Principles and Techniques</i> (5th ed.). Elsevier.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Home;