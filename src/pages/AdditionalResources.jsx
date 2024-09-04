import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookIcon, BookOpenIcon, HelpCircleIcon } from 'lucide-react';

const AdditionalResources = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Recursos Adicionales</h1>
        
        <Tabs defaultValue="bibliography" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bibliography">Bibliografía Recomendada</TabsTrigger>
            <TabsTrigger value="glossary">Glosario de Términos</TabsTrigger>
            <TabsTrigger value="quiz">Quiz Interactivo</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bibliography">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookIcon className="mr-2 h-4 w-4" />
                  Bibliografía Recomendada
                </CardTitle>
                <CardDescription>
                  Lecturas esenciales para profundizar en la imagenología oral
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Whaites, E. and Drage, N. (2013). Essentials of Dental Radiography and Radiology. 5th ed. Churchill Livingstone.</li>
                  <li>White, S.C. and Pharoah, M.J. (2014). Oral Radiology: Principles and Interpretation. 7th ed. Mosby.</li>
                  <li>Iannucci, J.M. and Howerton, L.J. (2016). Dental Radiography: Principles and Techniques. 5th ed. Elsevier.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="glossary">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpenIcon className="mr-2 h-4 w-4" />
                  Glosario de Términos
                </CardTitle>
                <CardDescription>
                  Definiciones de términos clave en imagenología oral
                </CardDescription>
              </CardHeader>
              <CardContent>
                <dl className="space-y-2">
                  <dt className="font-semibold">Ánodo</dt>
                  <dd className="pl-4">Electrodo positivo en el tubo de rayos X donde se produce el haz de rayos X.</dd>
                  <dt className="font-semibold">Cátodo</dt>
                  <dd className="pl-4">Electrodo negativo en el tubo de rayos X que emite electrones.</dd>
                  <dt className="font-semibold">Dispersión Compton</dt>
                  <dd className="pl-4">Interacción entre un fotón de rayos X y un electrón débilmente unido, resultando en un cambio de dirección del fotón.</dd>
                </dl>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="quiz">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HelpCircleIcon className="mr-2 h-4 w-4" />
                  Quiz Interactivo
                </CardTitle>
                <CardDescription>
                  Pon a prueba tus conocimientos sobre imagenología oral
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Aquí se implementará un quiz interactivo para evaluar el conocimiento de los estudiantes sobre los temas cubiertos en el curso.
                </p>
                {/* Aquí se podría agregar un componente de quiz interactivo */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdditionalResources;