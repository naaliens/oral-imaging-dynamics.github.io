import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioIcon, ZapIcon, LayersIcon } from 'lucide-react';

const XRayMachine = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">La Máquina de Rayos X</h1>
        
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
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
                <p className="mb-4">
                  Una máquina de rayos X consta de varios componentes clave, incluyendo el tubo de rayos X, cátodo, ánodo, y panel de control. Cada parte juega un papel crucial en la generación y control de los rayos X.
                </p>
                {/* Aquí se podría agregar un diagrama interactivo de la máquina de rayos X */}
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
                <p className="mb-4">
                  Los rayos X se producen principalmente por dos procesos: la radiación de frenado (Bremsstrahlung) y la radiación característica. La tensión (kV), corriente (mA), y tiempo de exposición son parámetros clave que afectan la producción de rayos X.
                </p>
                {/* Aquí se podría agregar un simulador interactivo de producción de rayos X */}
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
                <p className="mb-4">
                  Los rayos X interactúan con los tejidos a través de varios procesos, incluyendo la absorción fotoeléctrica, dispersión Compton, y dispersión coherente. Estas interacciones son fundamentales para la formación de la imagen radiográfica.
                </p>
                {/* Aquí se podría agregar una animación sobre la interacción de rayos X con diferentes tejidos */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default XRayMachine;