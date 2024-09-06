import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AtomIcon, RadioIcon, BookOpenIcon, BookmarkIcon, HelpCircleIcon, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Home = () => {
  const [fotonEnergia, setFotonEnergia] = useState(70);
  const [fotonAngulo, setFotonAngulo] = useState(0);
  const [material, setMaterial] = useState('hueso');
  const [radiacionTipo, setRadiacionTipo] = useState('alfa');
  const [tejidoGrosor, setTejidoGrosor] = useState(5);
  const [maquinaKvp, setMaquinaKvp] = useState(70);
  const [maquinaMa, setMaquinaMa] = useState(10);
  const [maquinaTiempo, setMaquinaTiempo] = useState(0.1);

  const calcularDisperso = (energia, angulo) => {
    return energia * Math.cos(angulo * Math.PI / 180);
  };

  const calcularLET = (tipo, grosor) => {
    const letValores = { alfa: 100, beta: 20, gamma: 5 };
    return letValores[tipo] / grosor;
  };

  const calcularCalidadImagen = (kvp, ma, tiempo) => {
    return (kvp * ma * tiempo) / 100;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Dinámicas de la Imagenología Oral
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explorando los fundamentos y la tecnología de los rayos X en la odontología
          </p>
        </div>

        <Tabs defaultValue="simulations" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="simulations">Simulaciones Interactivas</TabsTrigger>
            <TabsTrigger value="quiz">Quiz Interactivo</TabsTrigger>
            <TabsTrigger value="bibliography">Bibliografía</TabsTrigger>
          </TabsList>

          <TabsContent value="simulations">
            <Card>
              <CardHeader>
                <CardTitle>Simulaciones Interactivas</CardTitle>
                <CardDescription>Explora los conceptos de física de rayos X a través de simulaciones interactivas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Dispersión Compton y Coherente</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Energía del fotón (keV)</label>
                        <Slider value={[fotonEnergia]} onValueChange={(value) => setFotonEnergia(value[0])} min={0} max={150} step={1} />
                        <span>{fotonEnergia} keV</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Ángulo de dispersión</label>
                        <Slider value={[fotonAngulo]} onValueChange={(value) => setFotonAngulo(value[0])} min={0} max={180} step={1} />
                        <span>{fotonAngulo}°</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Material de interacción</label>
                        <Select value={material} onValueChange={setMaterial}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un material" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hueso">Hueso</SelectItem>
                            <SelectItem value="tejido_blando">Tejido blando</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <p>Energía dispersada: {calcularDisperso(fotonEnergia, fotonAngulo).toFixed(2)} keV</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Radiación Particulada</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Tipo de radiación</label>
                        <Select value={radiacionTipo} onValueChange={setRadiacionTipo}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="alfa">Alfa</SelectItem>
                            <SelectItem value="beta">Beta</SelectItem>
                            <SelectItem value="gamma">Gamma</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Grosor del tejido (mm)</label>
                        <Slider value={[tejidoGrosor]} onValueChange={(value) => setTejidoGrosor(value[0])} min={1} max={20} step={0.1} />
                        <span>{tejidoGrosor.toFixed(1)} mm</span>
                      </div>
                      <div>
                        <p>LET: {calcularLET(radiacionTipo, tejidoGrosor).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Máquina de Rayos X</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Voltaje (kVp)</label>
                        <Slider value={[maquinaKvp]} onValueChange={(value) => setMaquinaKvp(value[0])} min={40} max={120} step={1} />
                        <span>{maquinaKvp} kVp</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Corriente (mA)</label>
                        <Slider value={[maquinaMa]} onValueChange={(value) => setMaquinaMa(value[0])} min={1} max={20} step={0.1} />
                        <span>{maquinaMa.toFixed(1)} mA</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Tiempo de exposición (s)</label>
                        <Slider value={[maquinaTiempo]} onValueChange={(value) => setMaquinaTiempo(value[0])} min={0.1} max={1} step={0.1} />
                        <span>{maquinaTiempo.toFixed(1)} s</span>
                      </div>
                      <div>
                        <p>Calidad de imagen: {calcularCalidadImagen(maquinaKvp, maquinaMa, maquinaTiempo).toFixed(2)}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quiz">
            <Card>
              <CardHeader>
                <CardTitle>Quiz Interactivo</CardTitle>
                <CardDescription>Pon a prueba tus conocimientos sobre imagenología oral</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Aquí se implementará un quiz interactivo basado en la información proporcionada.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bibliography">
            <Card>
              <CardHeader>
                <CardTitle>Bibliografía</CardTitle>
                <CardDescription>Referencias y recursos adicionales</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>White, S. C., & Pharoah, M. J. (2014). <i>Oral Radiology: Principles and Interpretation</i> (8th ed.). Elsevier. Capítulo 1: Física de los Rayos X y la Máquina de Rayos.</li>
                  <li><i>Efectos Biológicos de las Radiaciones Ionizantes.</i></li>
                  <li><i>Receptores Digitales.</i></li>
                  <li><i>Película Radiográfica Convencional.</i></li>
                  <li><i>Geometría Proyeccional.</i></li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AtomIcon className="mr-2 h-4 w-4" />
                Física de los Rayos X
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Explora los fundamentos físicos detrás de los rayos X y cómo se aplican en la imagenología dental.
              </CardDescription>
              <Button asChild className="mt-4">
                <Link to="/physics">Explorar</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <RadioIcon className="mr-2 h-4 w-4" />
                La Máquina de Rayos X
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Conoce los componentes y el funcionamiento de las máquinas de rayos X utilizadas en odontología.
              </CardDescription>
              <Button asChild className="mt-4">
                <Link to="/machine">Explorar</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpenIcon className="mr-2 h-4 w-4" />
                Aplicaciones Clínicas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Descubre cómo se aplican los rayos X en diferentes escenarios clínicos y diagnósticos.
              </CardDescription>
              <Button asChild className="mt-4">
                <Link to="/clinical">Ver casos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;