import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AtomIcon, HistoryIcon, ZapIcon, RadioIcon } from 'lucide-react';

const PhysicsOfXRays = () => {
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
                <p className="mb-4">
                  La materia está compuesta por átomos, que a su vez constan de un núcleo (protones y neutrones) rodeado por electrones. La energía de enlace del electrón es crucial para entender la ionización y la producción de rayos X.
                </p>
                {/* Aquí se podría agregar un componente de diagrama interactivo del átomo */}
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
                {/* Aquí se podría agregar una línea de tiempo interactiva */}
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
                {/* Aquí se podría agregar una tabla comparativa o gráfico interactivo */}
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
                {/* Aquí se podría agregar una animación interactiva sobre los tipos de radiación */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PhysicsOfXRays;