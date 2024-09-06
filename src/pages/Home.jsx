import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AtomIcon, RadioIcon, BookOpenIcon, BookmarkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Home = () => {
  const [fotonEnergia, setFotonEnergia] = useState(112);
  const [fotonAngulo, setFotonAngulo] = useState(0);
  const [material, setMaterial] = useState('hueso_tejido');
  const [tejidoGrosor, setTejidoGrosor] = useState(8.9);
  const [maquinaKvp, setMaquinaKvp] = useState(70);
  const [maquinaMa, setMaquinaMa] = useState(10);
  const [maquinaTiempo, setMaquinaTiempo] = useState(0.1);
  const [imagenSimulada, setImagenSimulada] = useState(null);

  const calcularDisperso = (energia, angulo) => {
    return energia * Math.cos(angulo * Math.PI / 180);
  };

  const calcularCalidadImagen = (kvp, ma, tiempo) => {
    return (kvp * ma * tiempo) / 10000;
  };

  useEffect(() => {
    const generarImagenSimulada = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 200;
      const ctx = canvas.getContext('2d');
      
      // Simular diferentes materiales
      switch(material) {
        case 'hueso_tejido':
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.fillRect(0, 0, 200, 200);
          ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
          ctx.fillRect(50, 50, 100, 100);
          break;
        case 'hueso':
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 200, 200);
          break;
        case 'tejido_blando':
          ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
          ctx.fillRect(0, 0, 200, 200);
          break;
        case 'diente_brackets':
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 200, 200);
          ctx.fillStyle = 'black';
          ctx.fillRect(80, 80, 40, 40);
          break;
        case 'diente_implantes':
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 200, 200);
          ctx.fillStyle = 'rgba(50, 50, 50, 1)';
          ctx.fillRect(90, 50, 20, 100);
          break;
        case 'diente_endodoncia':
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, 200, 200);
          ctx.strokeStyle = 'black';
          ctx.beginPath();
          ctx.moveTo(100, 0);
          ctx.lineTo(100, 200);
          ctx.stroke();
          break;
      }
      
      // Aplicar efectos basados en parámetros
      const imageData = ctx.getImageData(0, 0, 200, 200);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        // Simular efecto de energía del fotón
        const energyFactor = fotonEnergia / 112;
        data[i] *= energyFactor;
        data[i+1] *= energyFactor;
        data[i+2] *= energyFactor;
        
        // Simular efecto de grosor del tejido
        const thicknessFactor = 8.9 / tejidoGrosor;
        data[i] *= thicknessFactor;
        data[i+1] *= thicknessFactor;
        data[i+2] *= thicknessFactor;
        
        // Simular efecto de kVp, mA y tiempo de exposición
        const exposureFactor = (maquinaKvp * maquinaMa * maquinaTiempo) / (70 * 10 * 0.1);
        data[i] = Math.min(255, data[i] * exposureFactor);
        data[i+1] = Math.min(255, data[i+1] * exposureFactor);
        data[i+2] = Math.min(255, data[i+2] * exposureFactor);
      }
      ctx.putImageData(imageData, 0, 0);
      
      setImagenSimulada(canvas.toDataURL());
    };

    generarImagenSimulada();
  }, [material, fotonEnergia, fotonAngulo, tejidoGrosor, maquinaKvp, maquinaMa, maquinaTiempo]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-8 text-center">
          Dinámicas de la Imagenología Oral
        </h1>

        <Tabs defaultValue="simulations" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="simulations">Simulaciones Interactivas</TabsTrigger>
            <TabsTrigger value="bibliography">Bibliografía</TabsTrigger>
          </TabsList>

          <TabsContent value="simulations">
            <Card>
              <CardHeader>
                <CardTitle>Simulaciones Interactivas</CardTitle>
                <CardDescription>Explora los conceptos de física de rayos X a través de simulaciones interactivas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Parámetros de Simulación</h3>
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
                            <SelectItem value="hueso_tejido">Hueso y tejido blando</SelectItem>
                            <SelectItem value="hueso">Hueso solo</SelectItem>
                            <SelectItem value="tejido_blando">Tejido blando solo</SelectItem>
                            <SelectItem value="diente_brackets">Diente con aparatos (brackets)</SelectItem>
                            <SelectItem value="diente_implantes">Dientes con implantes</SelectItem>
                            <SelectItem value="diente_endodoncia">Dientes con endodoncia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Grosor del tejido (mm)</label>
                        <Slider value={[tejidoGrosor]} onValueChange={(value) => setTejidoGrosor(value[0])} min={1} max={20} step={0.1} />
                        <span>{tejidoGrosor.toFixed(1)} mm</span>
                      </div>
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
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Visualización en Tiempo Real</h3>
                    <div className="border border-gray-300 rounded-lg p-4">
                      {imagenSimulada && (
                        <img src={imagenSimulada} alt="Simulación de rayos X" className="w-full h-auto" />
                      )}
                    </div>
                    <div className="mt-4">
                      <p>Energía dispersada: {calcularDisperso(fotonEnergia, fotonAngulo).toFixed(2)} keV</p>
                      <p>Calidad de imagen: {calcularCalidadImagen(maquinaKvp, maquinaMa, maquinaTiempo).toFixed(2)}%</p>
                    </div>
                  </div>
                </div>
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
      </main>
    </div>
  );
};

export default Home;