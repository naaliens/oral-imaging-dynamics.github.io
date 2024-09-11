import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { materialConfigs, drawMaterialIcon, applyRadiographyEffect } from '../utils/radiographyUtils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';

const Home = () => {
  const [material, setMaterial] = useState('hueso_tejido');
  const [config, setConfig] = useState(materialConfigs.hueso_tejido.config);
  const [isRadiography, setIsRadiography] = useState(false);
  const [feedback, setFeedback] = useState({});
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      updateSimulation(ctx);
    }
  }, [config, material, isRadiography]);

  const updateSimulation = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const radius = Math.min(ctx.canvas.width, ctx.canvas.height) / 4;
    
    drawMaterialIcon(ctx, material, centerX, centerY, radius);
    
    if (isRadiography) {
      applyRadiographyEffect(ctx, centerX, centerY, radius, config);
    }
  };

  const handleConfigChange = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
    checkOptimalConfig(key, value);
  };

  const checkOptimalConfig = (key, value) => {
    const optimalValue = materialConfigs[material].config[key];
    const range = materialConfigs[material].ranges[key];
    if (value < range[0]) {
      setFeedback(prev => ({
        ...prev,
        [key]: `Valor muy bajo. ${materialConfigs[material].fundamentos[key]} Aumenta para mejorar.`
      }));
    } else if (value > range[1]) {
      setFeedback(prev => ({
        ...prev,
        [key]: `Valor muy alto. ${materialConfigs[material].fundamentos[key]} Disminuye para optimizar.`
      }));
    } else {
      setFeedback(prev => ({ ...prev, [key]: '' }));
    }
  };

  const resetToBasicConfig = () => {
    setConfig(materialConfigs[material].config);
    setFeedback({});
  };

  const toggleRadiography = () => {
    setIsRadiography(!isRadiography);
  };

  const exposureData = [
    { name: 'Actual', exposicion: config.corriente * config.tiempo },
    { name: 'Óptimo', exposicion: materialConfigs[material].config.corriente * materialConfigs[material].config.tiempo }
  ];

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
                          setFeedback({});
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
                            min={materialConfigs[material].ranges[key][0] * 0.8}
                            max={materialConfigs[material].ranges[key][1] * 1.2}
                            step={key === 'tiempo' ? 0.01 : 1}
                          />
                          <span className="text-sm text-gray-500">{value.toFixed(key === 'tiempo' ? 2 : 0)} {materialConfigs[material].units[key]}</span>
                          {feedback[key] && <p className="text-xs text-red-500 mt-1">{feedback[key]}</p>}
                        </div>
                      ))}
                      <div className="flex items-center space-x-2">
                        <Switch id="radiography-mode" checked={isRadiography} onCheckedChange={toggleRadiography} />
                        <label htmlFor="radiography-mode" className="text-sm font-medium text-gray-700">
                          Modo Radiografía
                        </label>
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
                      {isRadiography && Object.values(feedback).some(f => f) && (
                        <p className="text-sm text-red-500 mt-2">
                          La calidad de la radiografía puede no ser óptima. Ajusta los parámetros según las recomendaciones.
                        </p>
                      )}
                    </div>
                    <div className="mt-4">
                      <h4 className="text-md font-semibold mb-2">Gráfico de Exposición</h4>
                      <ResponsiveContainer width="100%" height={200}>
                        <LineChart data={exposureData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <RechartsTooltip />
                          <Line type="monotone" dataKey="exposicion" stroke="#8884d8" />
                        </LineChart>
                      </ResponsiveContainer>
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