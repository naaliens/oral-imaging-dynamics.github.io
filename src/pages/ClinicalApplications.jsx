import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenIcon, ShieldIcon, ImageIcon, BrainIcon } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ClinicalApplications = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Aplicaciones Clínicas</h1>
        
        <Tabs defaultValue="radiology" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
            <TabsTrigger value="radiology">Radiología Oral y Maxilofacial</TabsTrigger>
            <TabsTrigger value="techniques">Técnicas Radiográficas</TabsTrigger>
            <TabsTrigger value="interpretation">Interpretación Radiográfica</TabsTrigger>
            <TabsTrigger value="safety">Seguridad y Precauciones</TabsTrigger>
          </TabsList>
          
          <TabsContent value="radiology">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpenIcon className="mr-2 h-4 w-4" />
                  Radiología Oral y Maxilofacial
                </CardTitle>
                <CardDescription>
                  Aplicaciones prácticas en el diagnóstico dental
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      La radiología oral y maxilofacial es esencial para el diagnóstico y planificación del tratamiento en odontología. Abarca una variedad de técnicas y aplicaciones, desde la detección de caries hasta la evaluación de estructuras óseas complejas.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Diagnóstico de Caries</AccordionTrigger>
                        <AccordionContent>
                          <p>Las radiografías de aleta de mordida son especialmente útiles para detectar caries interproximales y evaluar la progresión de la caries.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Evaluación Periodontal</AccordionTrigger>
                        <AccordionContent>
                          <p>Las radiografías periapicales y de aleta de mordida ayudan a evaluar la pérdida ósea, cálculos subgingivales y defectos óseos en la enfermedad periodontal.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Planificación de Implantes</AccordionTrigger>
                        <AccordionContent>
                          <p>Las tomografías computarizadas de haz cónico (CBCT) proporcionan imágenes 3D detalladas para la planificación precisa de la colocación de implantes.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div>
                    <img src="/images/oral_radiology_applications.jpg" alt="Aplicaciones de Radiología Oral" className="w-full rounded-lg shadow-md mb-4" />
                    <p className="text-sm text-gray-500">Figura 1: Ejemplos de diferentes aplicaciones de radiología oral y maxilofacial.</p>
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Avances Tecnológicos:</h4>
                      <ul className="list-disc pl-5">
                        <li>Radiografía digital: Mejora la calidad de imagen y reduce la exposición a la radiación.</li>
                        <li>CBCT: Proporciona imágenes 3D detalladas para diagnósticos complejos.</li>
                        <li>Inteligencia Artificial: Ayuda en la detección automática de patologías y mejora la precisión diagnóstica.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="techniques">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Técnicas Radiográficas
                </CardTitle>
                <CardDescription>
                  Explorando las diferentes técnicas de imagen dental
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      Las técnicas radiográficas en odontología varían según la región de interés y el propósito diagnóstico. Cada técnica tiene sus indicaciones específicas y consideraciones de posicionamiento.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Radiografía Periapical</AccordionTrigger>
                        <AccordionContent>
                          <p>Muestra el diente completo, desde la corona hasta más allá del ápice. Útil para evaluar la raíz, el hueso circundante y detectar lesiones periapicales.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Aleta de Mordida</AccordionTrigger>
                        <AccordionContent>
                          <p>Muestra las coronas de los dientes superiores e inferiores en una sola imagen. Ideal para detectar caries interproximales y evaluar la cresta alveolar.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Radiografía Panorámica</AccordionTrigger>
                        <AccordionContent>
                          <p>Proporciona una vista general de toda la dentición, los maxilares y las estructuras circundantes. Útil para evaluaciones generales y planificación de tratamientos extensos.</p>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>Tomografía Computarizada de Haz Cónico (CBCT)</AccordionTrigger>
                        <AccordionContent>
                          <p>Ofrece imágenes tridimensionales detalladas. Esencial para planificación de implantes, evaluación de patologías complejas y cirugía oral.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div>
                    <img src="/images/dental_xray_techniques.jpg" alt="Técnicas Radiográficas Dentales" className="w-full rounded-lg shadow-md mb-4" />
                    <p className="text-sm text-gray-500">Figura 2: Comparación de diferentes técnicas radiográficas dentales.</p>
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Consideraciones Técnicas:</h4>
                      <ul className="list-disc pl-5">
                        <li>Posicionamiento correcto del paciente y del receptor de imagen para evitar distorsiones.</li>
                        <li>Ajuste adecuado de los parámetros de exposición (kVp, mA, tiempo) según la técnica y el paciente.</li>
                        <li>Uso de dispositivos de posicionamiento para mejorar la reproducibilidad y reducir errores.</li>
                        <li>Implementación de técnicas de reducción de dosis como la colimación y el uso de delantales plomados.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="interpretation">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Interpretación Radiográfica
                </CardTitle>
                <CardDescription>
                  Principios y métodos para analizar imágenes radiográficas dentales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      La interpretación radiográfica es una habilidad crítica en odontología que requiere conocimiento anatómico, comprensión de las variaciones normales y capacidad para identificar patologías.
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Anatomía Radiográfica Normal</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5">
                            <li>Estructuras dentales: esmalte, dentina, pulpa, cemento</li>
                            <li>Hueso alveolar y cortical</li>
                            <li>Espacios anatómicos: seno maxilar, fosas nasales</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Identificación de Patologías</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5">
                            <li>Caries: áreas radiolúcidas en corona o raíz</li>
                            <li>Enfermedad periodontal: pérdida ósea, ensanchamiento del ligamento periodontal</li>
                            <li>Lesiones periapicales: radiolucidez asociada al ápice radicular</li>
                            <li>Fracturas: líneas radiolúcidas en dientes o hueso</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Principios de Interpretación</AccordionTrigger>
                        <AccordionContent>
                          <ol className="list-decimal pl-5">
                            <li>Evaluación sistemática de toda la imagen</li>
                            <li>Comparación con el lado contralateral</li>
                            <li>Consideración del contexto clínico</li>
                            <li>Evaluación de la calidad de la imagen antes de la interpretación</li>
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div>
                    <img src="/images/radiographic_interpretation.jpg" alt="Interpretación Radiográfica" className="w-full rounded-lg shadow-md mb-4" />
                    <p className="text-sm text-gray-500">Figura 3: Ejemplo de interpretación radiográfica mostrando diferentes hallazgos patológicos.</p>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Desafíos en la Interpretación:</h4>
                      <ul className="list-disc pl-5">
                        <li>Superposición de estructuras en imágenes 2D</li>
                        <li>Variaciones anatómicas normales que pueden simular patologías</li>
                        <li>Artefactos radiográficos que pueden oscurecer o simular lesiones</li>
                        <li>Limitaciones en la resolución de contraste para tejidos blandos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="safety">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldIcon className="mr-2 h-4 w-4" />
                  Seguridad y Precauciones
                </CardTitle>
                <CardDescription>
                  Protocolos de seguridad en radiología dental
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4">
                      La seguridad en radiología dental es primordial para proteger tanto a los pacientes como al personal. Incluye el uso adecuado de equipos de protección, optimización de la exposición a la radiación, y adherencia a los principios ALARA (As Low As Reasonably Achievable).
                    </p>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Principio ALARA</AccordionTrigger>
                        <AccordionContent>
                          <p>ALARA significa "Tan Bajo Como Sea Razonablemente Alcanzable". Este principio guía todas las prácticas de protección radiológica:</p>
                          <ul className="list-disc pl-5">
                            <li>Justificación de cada exposición radiográfica</li>
                            <li>Optimización de las técnicas para minimizar la dosis</li>
                            <li>Limitación de la dosis para individuos</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Equipos de Protección</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5">
                            <li>Delantales plomados para pacientes</li>
                            <li>Collares tiroideos</li>
                            <li>Barreras protectoras para el operador</li>
                            <li>Dosímetros para monitoreo del personal</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Optimización de la Exposición</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-5">
                            <li>Uso de colimadores para limitar el haz de rayos X</li>
                            <li>Selección apropiada de kVp y mA</li>
                            <li>Uso de receptores de imagen digitales de alta sensibilidad</li>
                            <li>Implementación de protocolos de exposición basados en el tamaño del paciente</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div>
                    <img src="/images/radiation_safety.jpg" alt="Seguridad Radiológica" className="w-full rounded-lg shadow-md mb-4" />
                    <p className="text-sm text-gray-500">Figura 4: Ilustración de medidas de seguridad radiológica en un entorno dental.</p>
                    <div className="mt-4 p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Consideraciones Especiales:</h4>
                      <ul className="list-disc pl-5">
                        <li>Pacientes pediátricos: Mayor sensibilidad a la radiación, requieren protocolos específicos.</li>
                        <li>Mujeres embarazadas: Evitar exposiciones no esenciales, especialmente en el primer trimestre.</li>
                        <li>Pacientes con alto riesgo de caries: Balancear el riesgo de radiación con la necesidad de monitoreo frecuente.</li>
                        <li>Personal: Formación continua en protección radiológica y cumplimiento de límites de dosis ocupacional.</li>
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

export default ClinicalApplications;