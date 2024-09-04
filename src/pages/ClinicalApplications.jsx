import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenIcon, ShieldIcon } from 'lucide-react';

const ClinicalApplications = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Aplicaciones Clínicas</h1>
        
        <Tabs defaultValue="radiology" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="radiology">Radiología Oral y Maxilofacial</TabsTrigger>
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
                <p className="mb-4">
                  La radiología oral y maxilofacial es esencial para el diagnóstico y planificación del tratamiento en odontología. Abarca una variedad de técnicas y aplicaciones, desde la detección de caries hasta la evaluación de estructuras óseas complejas.
                </p>
                {/* Aquí se podría agregar un componente de casos de estudio interactivos */}
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
                <p className="mb-4">
                  La seguridad en radiología dental es primordial. Incluye el uso adecuado de equipos de protección, optimización de la exposición a la radiación, y adherencia a los principios ALARA (As Low As Reasonably Achievable).
                </p>
                {/* Aquí se podría agregar un quiz interactivo sobre seguridad radiológica */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClinicalApplications;