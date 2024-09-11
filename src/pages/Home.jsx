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
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50">
        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Dinámicas de la Imagenología Oral
            </h1>
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
              {/* Simulation content */}
            </TabsContent>

            <TabsContent value="xray-explanation">
              <XRayMachineInteractive />
            </TabsContent>

            <TabsContent value="atom-structure">
              <AtomSimulation />
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
    </TooltipProvider>
  );
};

export default Home;