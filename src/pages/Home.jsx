import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BoneIcon, TeethBracketsIcon, TeethImplantsIcon, TeethEndodonticsIcon } from '../components/CustomIcons';

const materialConfigs = {
  hueso_tejido: {
    icon: <BoneIcon className="w-8 h-8" />,
    config: { energy: 70, angle: 5, thickness: 8, voltage: 65, current: 7, time: 0.1 },
    description: "Equilibra la visualización del hueso y tejido, mostrando ambos con claridad sin exceso de radiación."
  },
  hueso_solo: {
    icon: <BoneIcon className="w-8 h-8" />,
    config: { energy: 100, angle: 0, thickness: 10, voltage: 70, current: 10, time: 0.1 },
    description: "Optimiza la absorción del hueso y minimiza la dispersión, maximizando el contraste."
  },
  tejido_blando: {
    icon: <div className="w-8 h-8 bg-pink-200 rounded-full" />,
    config: { energy: 60, angle: 10, thickness: 5, voltage: 60, current: 5, time: 0.08 },
    description: "Ajusta la visualización para mayor claridad en tejidos suaves sin saturar la imagen."
  },
  dientes_brackets: {
    icon: <TeethBracketsIcon className="w-8 h-8" />,
    config: { energy: 85, angle: 15, thickness: 7, voltage: 75, current: 12, time: 0.15 },
    description: "Refleja los efectos del metal sin comprometer la imagen del diente."
  },
  dientes_implantes: {
    icon: <TeethImplantsIcon className="w-8 h-8" />,
    config: { energy: 95, angle: 20, thickness: 8, voltage: 80, current: 15, time: 0.2 },
    description: "Configura la visualización para capturar los detalles del implante sin excesiva dispersión."
  },
  dientes_endodoncia: {
    icon: <TeethEndodonticsIcon className="w-8 h-8" />,
    config: { energy: 90, angle: 10, thickness: 6, voltage: 70, current: 9, time: 0.1 },
    description: "Resalta los materiales de relleno internos sin perder detalle de las estructuras adyacentes."
  }
};

const Home = () => {
  const [material, setMaterial] = useState('hueso_tejido');
  const [config, setConfig] = useState(materialConfigs.hueso_tejido.config);
  const canvasRef = useRef(null);
  const iconRefs = useRef({});

  useEffect(() => {
    Object.keys(materialConfigs).forEach(key => {
      const iconElement = document.createElement('div');
      iconElement.appendChild(materialConfigs[key].icon.type());
      const iconSvg = iconElement.innerHTML;
      const blob = new Blob([iconSvg], {type: 'image/svg+xml'});
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.src = url;
      img.onload = () => URL.revokeObjectURL(url);
      iconRefs.current[key] = img;
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    updateSimulation(ctx);
  }, [config, material]);

  const updateSimulation = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const baseColor = material.includes('hueso') ? 'rgb(220, 220, 220)' : 'rgb(255, 200, 200)';
    const baseOpacity = 0.7 * (config.energy / 100) * (1 / (config.thickness / 10)) * (config.voltage / 80) * (config.current / 10) * config.time;

    ctx.fillStyle = baseColor;
    ctx.globalAlpha = baseOpacity;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.globalAlpha = 1;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1;

    if (material.includes('hueso')) {
      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height);
        ctx.lineTo(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height);
        ctx.stroke();
      }
    }

    if (material.includes('brackets') || material.includes('implantes')) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height, 10, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }

    const scatterIntensity = config.angle / 180;
    ctx.fillStyle = `rgba(255, 255, 255, ${scatterIntensity * 0.3})`;
    for (let i = 0; i < 1000 * scatterIntensity; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height, 1, 0, 2 * Math.PI);
      ctx.fill();
    }

    const icon = iconRefs.current[material];
    if (icon) {
      ctx.drawImage(icon, 10, 10, 40, 40);
    }
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
                            {Object.keys(materialConfigs).map((key) => (
                              <SelectItem key={key} value={key}>
                                <div className="flex items-center">
                                  {materialConfigs[key].icon}
                                  <span className="ml-2">{key.replace('_', ' ').charAt(0).toUpperCase() + key.replace('_', ' ').slice(1)}</span>
                                </div>
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Energía del fotón (keV)</label>
                        <Slider value={[config.energy]} onValueChange={(value) => handleConfigChange('energy', value[0])} min={0} max={150} step={1} />
                        <span>{config.energy} keV</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Ángulo de dispersión</label>
                        <Slider value={[config.angle]} onValueChange={(value) => handleConfigChange('angle', value[0])} min={0} max={180} step={1} />
                        <span>{config.angle}°</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Grosor del tejido (mm)</label>
                        <Slider value={[config.thickness]} onValueChange={(value) => handleConfigChange('thickness', value[0])} min={1} max={20} step={0.1} />
                        <span>{config.thickness.toFixed(1)} mm</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Voltaje (kVp)</label>
                        <Slider value={[config.voltage]} onValueChange={(value) => handleConfigChange('voltage', value[0])} min={40} max={120} step={1} />
                        <span>{config.voltage} kVp</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Corriente (mA)</label>
                        <Slider value={[config.current]} onValueChange={(value) => handleConfigChange('current', value[0])} min={1} max={20} step={0.1} />
                        <span>{config.current.toFixed(1)} mA</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Tiempo de exposición (s)</label>
                        <Slider value={[config.time]} onValueChange={(value) => handleConfigChange('time', value[0])} min={0.1} max={1} step={0.1} />
                        <span>{config.time.toFixed(1)} s</span>
                      </div>
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