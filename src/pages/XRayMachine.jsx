import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioIcon, ZapIcon, LayersIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

const XRayMachine = () => {
  const [kVp, setKVp] = useState(70);
  const [mA, setMA] = useState(10);
  const [exposureTime, setExposureTime] = useState(0.1);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">La Máquina de Rayos X</h1>
        
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 mb-8">
            <TabsTrigger value="components">Componentes y Funcionamiento</TabsTrigger>
            <TabsTrigger value="production">Producción de Rayos X</TabsTrigger>
            <TabsTrigger value="interaction">Interacción con la Materia</TabsTrigger>
          </TabsList>
          
          <TabsContent value="components">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <RadioIcon className="mr-2 h-4 w-4" />
                  Componentes y Funcionamiento
                </CardTitle>
                <CardDescription>
                  Explorando las partes esenciales de una máquina de rayos X
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      Una máquina de rayos X consta de varios componentes clave, cada uno desempeñando un papel crucial en la generación y control de los rayos X para aplicaciones dentales.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Tubo de Rayos X</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5">
                            <li>Cátodo: Emite electrones por efecto termoiónico.</li>
                            <li>Ánodo: Objetivo metálico donde impactan los electrones para producir rayos X.</li>
                            <li>Envoltura de vidrio o metal: Mantiene el vacío dentro del tubo.</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Generador de Alto Voltaje</AccordionTrigger>
                        <AccordionContent>
                          <p>Proporciona la diferencia de potencial necesaria entre el cátodo y el ánodo para acelerar los electrones. Típicamente entre 60-100 kV en aplicaciones dentales.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Sistema de Enfriamiento</AccordionTrigger>
                        <AccordionContent>
                          <p>Disipa el calor generado en el ánodo durante la producción de rayos X. Puede ser pasivo (radiación) o activo (aceite o agua).</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Colimador</AccordionTrigger>
                        <AccordionContent>
                          <p>Restringe el haz de rayos X al área de interés, reduciendo la exposición innecesaria del paciente.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div>
                    <img src="/images/xray_machine_diagram.jpg" alt="Diagrama de Máquina de Rayos X" className="w-full rounded-lg shadow-md mb-4" />
                    <p className="text-sm text-gray-500">Figura 1: Diagrama esquemático de una máquina de rayos X dental mostrando sus componentes principales.</p>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Dato Interesante:</h4>
                      <p>Las máquinas de rayos X modernas utilizan tecnología de estado sólido para el control preciso de la exposición, permitiendo imágenes de alta calidad con dosis de radiación más bajas.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="production">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ZapIcon className="mr-2 h-4 w-4" />
                  Producción de Rayos X
                </CardTitle>
                <CardDescription>
                  Entendiendo cómo se generan los rayos X
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      Los rayos X se producen principalmente por dos procesos: la radiación de frenado (Bremsstrahlung) y la radiación característica. La tensión (kV), corriente (mA), y tiempo de exposición son parámetros clave que afectan la producción de rayos X.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Radiación de Frenado (Bremsstrahlung)</AccordionTrigger>
                        <AccordionContent>
                          <p>Ocurre cuando los electrones son desacelerados al interactuar con los átomos del ánodo. Produce un espectro continuo de energías de rayos X.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Radiación Característica</AccordionTrigger>
                        <AccordionContent>
                          <p>Se produce cuando los electrones incidentes expulsan electrones de las capas internas de los átomos del ánodo. Los electrones de capas superiores llenan estos vacíos, emitiendo rayos X de energías específicas.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Simulador de Producción de Rayos X</h3>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">kVp (Tensión del Tubo)</label>
                      <Slider
                        value={[kVp]}
                        onValueChange={(value) => setKVp(value[0])}
                        min={50}
                        max={100}
                        step={1}
                        className="mb-2"
                      />
                      <p className="text-sm text-gray-600">Valor: {kVp} kVp</p>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">mA (Corriente del Tubo)</label>
                      <Slider
                        value={[mA]}
                        onValueChange={(value) => setMA(value[0])}
                        min={1}
                        max={20}
                        step={0.1}
                        className="mb-2"
                      />
                      <p className="text-sm text-gray-600">Valor: {mA.toFixed(1)} mA</p>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700">Tiempo de Exposición (s)</label>
                      <Slider
                        value={[exposureTime]}
                        onValueChange={(value) => setExposureTime(value[0])}
                        min={0.1}
                        max={1}
                        step={0.1}
                        className="mb-2"
                      />
                      <p className="text-sm text-gray-600">Valor: {exposureTime.toFixed(1)} s</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                      <h4 className="font-semibold mb-2">Resultado de la Simulación:</h4>
                      <p>Energía Total: {(kVp * mA * exposureTime).toFixed(2)} mAs</p>
                      <p>Calidad del Haz: {kVp > 70 ? "Alta" : "Baja"}</p>
                      <p>Penetración: {kVp > 80 ? "Alta" : kVp > 60 ? "Media" : "Baja"}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="interaction">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LayersIcon className="mr-2 h-4 w-4" />
                  Interacción con la Materia
                </CardTitle>
                <CardDescription>
                  Cómo los rayos X interactúan con los tejidos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      Los rayos X interactúan con los tejidos a través de varios procesos, incluyendo la absorción fotoeléctrica, dispersión Compton, y dispersión coherente. Estas interacciones son fundamentales para la formación de la imagen radiográfica.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Absorción Fotoeléctrica</AccordionTrigger>
                        <AccordionContent>
                          <p>El fotón de rayos X es completamente absorbido por un átomo, expulsando un electrón. Este efecto es dominante a bajas energías y en materiales de alto número atómico, contribuyendo significativamente al contraste de la imagen.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Dispersión Compton</AccordionTrigger>
                        <AccordionContent>
                          <p>El fotón de rayos X interactúa con un electrón débilmente unido, perdiendo parte de su energía y cambiando de dirección. Este efecto es más prominente a energías más altas y en tejidos blandos, contribuyendo a la radiación dispersa.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Dispersión Coherente</AccordionTrigger>
                        <AccordionContent>
                          <p>El fotón de rayos X es desviado sin pérdida de energía. Aunque menos significativo en imagenología dental, contribuye a la radiación dispersa total.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div>
                    <img src="/images/xray_tissue_interaction.jpg" alt="Interacción de Rayos X con Tejidos" className="w-full rounded-lg shadow-md mb-4" />
                    <p className="text-sm text-gray-500">Figura 2: Ilustración de las diferentes interacciones de los rayos X con los tejidos.</p>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Implicaciones Clínicas:</h4>
                      <ul className="list-disc pl-5">
                        <li>La absorción diferencial de los rayos X en diferentes tejidos crea el contraste en la imagen radiográfica.</li>
                        <li>Los tejidos densos como el hueso absorben más rayos X, apareciendo más claros en la radiografía.</li>
                        <li>Los tejidos blandos y el aire absorben menos rayos X, apareciendo más oscuros.</li>
                        <li>La dispersión Compton puede reducir el contraste de la imagen, por lo que se utilizan técnicas como la colimación para minimizar su efecto.</li>
                      </ul>
                    </div>
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

export default XRayMachine;