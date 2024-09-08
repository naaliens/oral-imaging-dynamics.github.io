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
    icon: BoneIcon,
    config: { energy: 70, angle: 5, thickness: 8, voltage: 65, current: 7, time: 0.1 },
    description: "Equilibra la visualización del hueso y tejido, mostrando ambos con claridad sin exceso de radiación."
  },
  hueso_solo: {
    icon: BoneIcon,
    config: { energy: 100, angle: 0, thickness: 10, voltage: 70, current: 10, time: 0.1 },
    description: "Optimiza la absorción del hueso y minimiza la dispersión, maximizando el contraste."
  },
  tejido_blando: {
    icon: () => <div className="w-8 h-8 bg-pink-200 rounded-full" />,
    config: { energy: 60, angle: 10, thickness: 5, voltage: 60, current: 5, time: 0.08 },
    description: "Ajusta la visualización para mayor claridad en tejidos suaves sin saturar la imagen."
  },
  dientes_brackets: {
    icon: TeethBracketsIcon,
    config: { energy: 85, angle: 15, thickness: 7, voltage: 75, current: 12, time: 0.15 },
    description: "Refleja los efectos del metal sin comprometer la imagen del diente."
  },
  dientes_implantes: {
    icon: TeethImplantsIcon,
    config: { energy: 95, angle: 20, thickness: 8, voltage: 80, current: 15, time: 0.2 },
    description: "Configura la visualización para capturar los detalles del implante sin excesiva dispersión."
  },
  dientes_endodoncia: {
    icon: TeethEndodonticsIcon,
    config: { energy: 90, angle: 10, thickness: 6, voltage: 70, current: 9, time: 0.1 },
    description: "Resalta los materiales de relleno internos sin perder detalle de las estructuras adyacentes."
  }
};

const Home = () => {
  const [material, setMaterial] = useState('hueso_tejido');
  const [config, setConfig] = useState(materialConfigs.hueso_tejido.config);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    updateSimulation(ctx);
  }, [config, material]);

  const updateSimulation = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw background
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw material representation
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const radius = Math.min(ctx.canvas.width, ctx.canvas.height) / 4;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#d4d4d4';
    ctx.fill();
    
    // Draw icon
    const IconComponent = materialConfigs[material].icon;
    const iconSize = radius;
    const iconElement = document.createElement('div');
    iconElement.style.width = `${iconSize}px`;
    iconElement.style.height = `${iconSize}px`;
    ReactDOM.render(<IconComponent />, iconElement);
    
    const iconImage = new Image();
    iconImage.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(iconElement.innerHTML)}`;
    iconImage.onload = () => {
      ctx.drawImage(iconImage, centerX - iconSize / 2, centerY - iconSize / 2, iconSize, iconSize);
    };
    
    // Draw rays
    const rayCount = 8;
    const rayLength = radius * 1.5;
    ctx.strokeStyle = `rgba(255, 255, 0, ${config.energy / 100})`;
    ctx.lineWidth = 2;
    
    for (let i = 0; i < rayCount; i++) {
      const angle = (i / rayCount) * 2 * Math.PI + config.angle * Math.PI / 180;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * rayLength,
        centerY + Math.sin(angle) * rayLength
      );
      ctx.stroke();
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
                            {Object.entries(materialConfigs).map(([key, { icon: Icon }]) => (
                              <SelectItem key={key} value={key}>
                                <div className="flex items-center">
                                  <Icon className="w-8 h-8 mr-2" />
                                  <span>{key.replace('_', ' ').charAt(0).toUpperCase() + key.replace('_', ' ').slice(1)}</span>
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
                      {Object.entries(config).map(([key, value]) => (
                        <div key={key}>
                          <label className="block text-sm font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                          <Slider
                            value={[value]}
                            onValueChange={(newValue) => handleConfigChange(key, newValue[0])}
                            max={key === 'time' ? 1 : 100}
                            step={key === 'time' ? 0.1 : 1}
                          />
                          <span className="text-sm text-gray-500">{value.toFixed(key === 'time' ? 1 : 0)}</span>
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