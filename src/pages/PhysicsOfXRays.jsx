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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      La materia está compuesta por átomos, que a su vez constan de un núcleo (protones y neutrones) rodeado por electrones. La energía de enlace del electrón es crucial para entender la ionización y la producción de rayos X.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Estructura del Átomo</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5">
                            <li>Núcleo: Contiene protones (carga positiva) y neutrones (sin carga).</li>
                            <li>Electrones: Partículas con carga negativa que orbitan el núcleo.</li>
                            <li>Niveles de energía: Los electrones ocupan órbitas específicas con energías discretas.</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Importancia en Radiología</AccordionTrigger>
                        <AccordionContent>
                          <p>La estructura atómica es fundamental en radiología porque:</p>
                          <ul className="list-disc pl-5">
                            <li>Los rayos X interactúan principalmente con los electrones de los átomos.</li>
                            <li>La energía de enlace de los electrones determina cómo se absorben o dispersan los rayos X.</li>
                            <li>El número atómico (cantidad de protones) afecta la absorción de rayos X, crucial para el contraste en imágenes.</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="mt-4">
                      <img src="/images/atom_structure.jpg" alt="Estructura del Átomo" className="w-full rounded-lg shadow-md" />
                      <p className="text-sm text-gray-500 mt-2">Figura 1: Estructura básica del átomo mostrando el núcleo y los electrones en órbita.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Simulación Interactiva del Átomo:</h3>
                    <AtomSimulation onPartClick={handleAtomPartClick} />
                    {selectedAtomPart && (
                      <div className="bg-white p-4 rounded-lg shadow mt-4">
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
                  Desde el concepto de Demócrito hasta el modelo cuántico actual, la comprensión del átomo ha evolucionado significativamente, influyendo en nuestro entendimiento de los rayos X y su aplicación en imagenología dental.
                </p>
                <AtomicModelTimeline onModelClick={handleModelClick} />
                <Dialog open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>{selectedModel?.title}</DialogTitle>
                      <DialogDescription>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="mt-2">{selectedModel?.details}</p>
                            <h4 className="font-semibold mt-4">Implicaciones para la Radiología:</h4>
                            <ul className="list-disc pl-5">
                              {selectedModel?.radiologyImplications.map((implication, index) => (
                                <li key={index}>{implication}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <img src={selectedModel?.image} alt={selectedModel?.title} className="w-full rounded-lg shadow-lg" />
                            <p className="text-sm text-gray-500 mt-2">{selectedModel?.imageCaption}</p>
                          </div>
                        </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      La radiación se clasifica en ionizante y no ionizante, dependiendo de su capacidad para ionizar átomos. Los rayos X son un tipo de radiación ionizante utilizada en imagenología dental.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Radiación Ionizante</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5">
                            <li>Rayos X: Utilizados en radiografía dental.</li>
                            <li>Rayos Gamma: Emitidos por materiales radiactivos.</li>
                            <li>Partículas Alpha y Beta: Formas de radiación particulada.</li>
                          </ul>
                          <p className="mt-2">Estos tipos de radiación tienen suficiente energía para ionizar átomos, lo que puede causar cambios químicos en los tejidos.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Radiación No Ionizante</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5">
                            <li>Luz visible</li>
                            <li>Ondas de radio</li>
                            <li>Microondas</li>
                            <li>Radiación infrarroja</li>
                          </ul>
                          <p className="mt-2">Estas formas de radiación no tienen suficiente energía para ionizar átomos, pero pueden causar otros efectos como calentamiento.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="mt-4">
                      <img src="/images/radiation_spectrum.jpg" alt="Espectro de Radiación" className="w-full rounded-lg shadow-md" />
                      <p className="text-sm text-gray-500 mt-2">Figura 2: Espectro electromagnético mostrando radiaciones ionizantes y no ionizantes.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Simulación de Ionización:</h3>
                    <p className="mb-2">Ajusta la energía para ver cómo afecta la ionización de los átomos:</p>
                    <Slider
                      value={[ionizationEnergy]}
                      onValueChange={handleIonizationEnergyChange}
                      max={100}
                      step={1}
                      className="mb-2"
                    />
                    <p className="mb-4">Energía de ionización: {ionizationEnergy} eV</p>
                    <RadiationSimulation energy={ionizationEnergy} />
                    <p className="mt-4 text-sm text-gray-600">
                      Esta simulación muestra cómo la energía de la radiación afecta su capacidad para ionizar átomos. A mayor energía, mayor probabilidad de ionización.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="electromagnetic">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RadioIcon className="mr-2 h-4 w-4" />
                  Radiación Electromagnética
                </CardTitle>
                <CardDescription>
                  Explorando las características de las ondas electromagnéticas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      La radiación electromagnética, incluyendo los rayos X, se propaga en forma de ondas que consisten en campos eléctricos y magnéticos oscilantes perpendiculares entre sí.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Propiedades de las Ondas Electromagnéticas</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5">
                            <li>Longitud de onda: Distancia entre crestas sucesivas.</li>
                            <li>Frecuencia: Número de oscilaciones por segundo.</li>
                            <li>Amplitud: Altura máxima de la onda.</li>
                            <li>Velocidad: Todas las ondas electromagnéticas viajan a la velocidad de la luz en el vacío.</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Relación con los Rayos X</AccordionTrigger>
                        <AccordionContent>
                          <p>Los rayos X son ondas electromagnéticas de alta energía:</p>
                          <ul className="list-disc pl-5">
                            <li>Longitud de onda corta: Entre 0.01 y 10 nanómetros.</li>
                            <li>Alta frecuencia: Entre 30 petahertz y 30 exahertz.</li>
                            <li>Energía: Suficiente para ionizar átomos y moléculas.</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="mt-4">
                      <img src="/images/electromagnetic_wave.jpg" alt="Onda Electromagnética" className="w-full rounded-lg shadow-md" />
                      <p className="text-sm text-gray-500 mt-2">Figura 3: Estructura de una onda electromagnética mostrando los campos eléctrico y magnético.</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Simulación de Onda Electromagnética:</h3>
                    <p className="mb-2">Ajusta la frecuencia para ver cómo cambia la onda:</p>
                    <Slider
                      value={[waveFrequency]}
                      onValueChange={handleWaveFrequencyChange}
                      min={1}
                      max={10}
                      step={0.1}
                      className="mb-2"
                    />
                    <p className="mb-4">Frecuencia: {waveFrequency.toFixed(1)} Hz</p>
                    <ElectromagneticWaveSimulation frequency={waveFrequency} />
                    <p className="mt-4 text-sm text-gray-600">
                      Esta simulación muestra cómo la frecuencia afecta la longitud de onda de la radiación electromagnética. A mayor frecuencia, menor longitud de onda y mayor energía.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PhysicsOfXRays;