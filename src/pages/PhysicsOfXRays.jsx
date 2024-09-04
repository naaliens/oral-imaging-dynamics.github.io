import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AtomIcon, HistoryIcon, ZapIcon, RadioIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import AtomSimulation from '../components/AtomSimulation';
import AtomicModelTimeline from '../components/AtomicModelTimeline';
import RadiationSimulation from '../components/RadiationSimulation';
import ElectromagneticWaveSimulation from '../components/ElectromagneticWaveSimulation';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const PhysicsOfXRays = () => {
  const [selectedAtomPart, setSelectedAtomPart] = useState(null);
  const [ionizationEnergy, setIonizationEnergy] = useState(0);
  const [waveFrequency, setWaveFrequency] = useState(1);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleAtomPartClick = (part) => {
    setSelectedAtomPart(part);
  };

  const handleIonizationEnergyChange = (value) => {
    setIonizationEnergy(value[0]);
  };

  const handleWaveFrequencyChange = (value) => {
    setWaveFrequency(value[0]);
  };

  const handleModelClick = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Física de los Rayos X</h1>
        
        <Tabs defaultValue="composition" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="composition">Composición de la Materia</TabsTrigger>
            <TabsTrigger value="history">Historia del Modelo Atómico</TabsTrigger>
            <TabsTrigger value="radiation">Concepto y Tipos de Radiación</TabsTrigger>
            <TabsTrigger value="electromagnetic">Radiación Electromagnética</TabsTrigger>
          </TabsList>
          
          <TabsContent value="composition">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AtomIcon className="mr-2 h-4 w-4" />
                  Composición de la Materia y Estructura Atómica
                </CardTitle>
                <CardDescription>
                  Explorando los componentes fundamentales de la materia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="mb-4">
                      La materia está compuesta por átomos, que a su vez constan de un núcleo (protones y neutrones) rodeado por electrones. La energía de enlace del electrón es crucial para entender la ionización y la producción de rayos X.
                    </p>
                    <AtomSimulation onPartClick={handleAtomPartClick} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Información del componente seleccionado:</h3>
                    {selectedAtomPart && (
                      <div className="bg-white p-4 rounded-lg shadow">
                        <h4 className="font-bold">{selectedAtomPart.name}</h4>
                        <p>{selectedAtomPart.description}</p>
                        <ul className="list-disc pl-5 mt-2">
                          {selectedAtomPart.properties.map((prop, index) => (
                            <li key={index}>{prop}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HistoryIcon className="mr-2 h-4 w-4" />
                  Historia del Modelo Atómico
                </CardTitle>
                <CardDescription>
                  La evolución de nuestra comprensión del átomo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Desde el concepto de Demócrito hasta el modelo cuántico actual, la comprensión del átomo ha evolucionado significativamente, influyendo en nuestro entendimiento de los rayos X.
                </p>
                <AtomicModelTimeline onModelClick={handleModelClick} />
                <Dialog open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{selectedModel?.title}</DialogTitle>
                      <DialogDescription>
                        <p className="mt-2">{selectedModel?.details}</p>
                        <img src={selectedModel?.image} alt={selectedModel?.title} className="mt-4 w-full rounded-lg" />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="radiation">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ZapIcon className="mr-2 h-4 w-4" />
                  Concepto y Tipos de Radiación
                </CardTitle>
                <CardDescription>
                  Diferenciando entre radiaciones ionizantes y no ionizantes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  La radiación se clasifica en ionizante y no ionizante, dependiendo de su capacidad para ionizar átomos. Los rayos X son un tipo de radiación ionizante utilizada en imagenología dental.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Simulación de Ionización:</h3>
                  <Slider
                    value={[ionizationEnergy]}
                    onValueChange={handleIonizationEnergyChange}
                    max={100}
                    step={1}
                    className="mb-2"
                  />
                  <p>Energía de ionización: {ionizationEnergy} eV</p>
                </div>
                <RadiationSimulation energy={ionizationEnergy} />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="electromagnetic">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RadioIcon className="mr-2 h-4 w-4" />
                  Radiación Electromagnética y Particulada
                </CardTitle>
                <CardDescription>
                  Explorando los diferentes tipos de radiación y sus efectos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  La radiación electromagnética incluye rayos X y gamma, mientras que la radiación particulada comprende partículas alfa y beta. Cada tipo tiene características y efectos ionizantes únicos.
                </p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Simulación de Onda Electromagnética:</h3>
                  <Slider
                    value={[waveFrequency]}
                    onValueChange={handleWaveFrequencyChange}
                    min={1}
                    max={10}
                    step={0.1}
                    className="mb-2"
                  />
                  <p>Frecuencia: {waveFrequency.toFixed(1)} Hz</p>
                </div>
                <ElectromagneticWaveSimulation frequency={waveFrequency} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PhysicsOfXRays;