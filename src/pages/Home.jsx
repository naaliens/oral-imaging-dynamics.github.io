import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { materialConfigs, drawMaterialIcon, applyRadiographyEffect } from '../utils/radiographyUtils';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import { HelpCircle } from 'lucide-react';
import AtomSimulation from '../components/AtomSimulation';
import XRayMachineInteractive from '../components/XRayMachineInteractive';
import ClinicalApplications from '../components/ClinicalApplications';
import QuizEvaluation from '../components/QuizEvaluation';

const Home = () => {
  const [material, setMaterial] = useState('hueso_tejido');
  const [config, setConfig] = useState(materialConfigs.hueso_tejido.config);
  const [isRadiography, setIsRadiography] = useState(false);
  const [feedback, setFeedback] = useState({});
  const canvasRef = useRef(null);
  const [showHelp, setShowHelp] = useState(false);
  const [activeTab, setActiveTab] = useState('simulations');

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

  const contrastData = [
    { name: 'Bajo', contraste: 100 - (config.energia / 2) },
    { name: 'Medio', contraste: 50 },
    { name: 'Alto', contraste: config.energia / 2 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Dinámicas de la Imagenología Oral
          </h1>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={() => setShowHelp(true)}>
                  <HelpCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Abrir guía de ayuda</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Dialog open={showHelp} onOpenChange={setShowHelp}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Guía de Ayuda</DialogTitle>
              <DialogDescription>
                Esta aplicación te permite explorar los conceptos fundamentales de la imagenología oral.
                Utiliza las diferentes pestañas para navegar por las secciones y experimentar con las simulaciones interactivas.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="simulations">Simulaciones</TabsTrigger>
            <TabsTrigger value="xray-explanation">Rayos X</TabsTrigger>
            <TabsTrigger value="atom-structure">Estructura Atómica</TabsTrigger>
            <TabsTrigger value="clinical-applications">Aplicaciones Clínicas</TabsTrigger>
            <TabsTrigger value="quiz">Evaluación</TabsTrigger>
          </TabsList>

          <TabsContent value="simulations">
            <Card>
              <CardHeader>
                <CardTitle>Simulación de Radiografía</CardTitle>
                <CardDescription>Ajusta los parámetros para ver cómo afectan la imagen radiográfica</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <canvas ref={canvasRef} width={400} height={400} className="border rounded-lg" />
                    <div className="mt-4 flex items-center justify-between">
                      <span>Mostrar radiografía</span>
                      <Switch checked={isRadiography} onCheckedChange={toggleRadiography} />
                    </div>
                  </div>
                  <div>
                    <Select value={material} onValueChange={setMaterial}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un material" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(materialConfigs).map((key) => (
                          <SelectItem key={key} value={key}>
                            {materialConfigs[key].description}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {Object.keys(config).map((key) => (
                      <div key={key} className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">{key}</label>
                        <Slider
                          value={[config[key]]}
                          onValueChange={(value) => handleConfigChange(key, value[0])}
                          min={materialConfigs[material].ranges[key][0]}
                          max={materialConfigs[material].ranges[key][1]}
                          step={(materialConfigs[material].ranges[key][1] - materialConfigs[material].ranges[key][0]) / 100}
                          className="mt-1"
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{config[key].toFixed(2)}</span>
                          <span>{materialConfigs[material].units[key]}</span>
                        </div>
                        {feedback[key] && <p className="mt-1 text-sm text-red-500">{feedback[key]}</p>}
                      </div>
                    ))}
                    <Button onClick={resetToBasicConfig} className="mt-4">Restablecer Configuración</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="xray-explanation">
            <Card>
              <CardHeader>
                <CardTitle>¿Qué son los Rayos X?</CardTitle>
                <CardDescription>Basado en "Oral Radiology: Principles and Interpretation" de White y Pharoah</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Los rayos X son una forma de radiación electromagnética ionizante que tiene la capacidad de atravesar tejidos blandos del cuerpo, pero es absorbida por estructuras densas como los huesos. Esto permite la creación de imágenes detalladas que son fundamentales en el diagnóstico médico y odontológico.</p>
                <p>En odontología, los rayos X permiten a los dentistas visualizar problemas en los dientes, huesos maxilares y otros tejidos que no son visibles a simple vista.</p>
                <XRayMachineInteractive />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="atom-structure">
            <Card>
              <CardHeader>
                <CardTitle>Estructura del Átomo</CardTitle>
                <CardDescription>Exploración interactiva de la estructura atómica</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">El átomo está compuesto por un núcleo que contiene protones con carga positiva y neutrones sin carga. Alrededor del núcleo se encuentran los electrones, que son partículas con carga negativa y están ligadas al núcleo por fuerzas electrostáticas.</p>
                <AtomSimulation />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clinical-applications">
            <ClinicalApplications />
          </TabsContent>

          <TabsContent value="quiz">
            <QuizEvaluation />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Home;