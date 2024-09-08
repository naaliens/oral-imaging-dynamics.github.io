import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    updateSimulation(ctx);
  }, [fotonEnergia, fotonAngulo, material, tejidoGrosor, maquinaKvp, maquinaMa, maquinaTiempo]);

  const updateSimulation = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Base color and opacity based on material
    let baseColor, baseOpacity;
    switch(material) {
      case 'hueso_tejido':
        baseColor = 'rgb(200, 200, 200)';
        baseOpacity = 0.7;
        break;
      case 'hueso_solo':
        baseColor = 'rgb(220, 220, 220)';
        baseOpacity = 0.9;
        break;
      case 'tejido_blando':
        baseColor = 'rgb(180, 180, 180)';
        baseOpacity = 0.5;
        break;
      case 'dientes_brackets':
        baseColor = 'rgb(230, 230, 230)';
        baseOpacity = 0.8;
        break;
      case 'dientes_implantes':
        baseColor = 'rgb(240, 240, 240)';
        baseOpacity = 0.95;
        break;
      case 'dientes_endodoncia':
        baseColor = 'rgb(210, 210, 210)';
        baseOpacity = 0.85;
        break;
      default:
        baseColor = 'rgb(200, 200, 200)';
        baseOpacity = 0.7;
    }

    // Adjust opacity based on parameters
    const energyFactor = fotonEnergia / 150;
    const thicknessFactor = tejidoGrosor / 20;
    const voltageFactor = maquinaKvp / 120;
    const currentFactor = maquinaMa / 20;
    const timeFactor = maquinaTiempo;

    const finalOpacity = baseOpacity * energyFactor * (1 / thicknessFactor) * voltageFactor * currentFactor * timeFactor;

    // Draw the simulated X-ray image
    ctx.fillStyle = baseColor;
    ctx.globalAlpha = finalOpacity;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Add some texture or structure based on the material
    ctx.globalAlpha = 1;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1;

    if (material === 'hueso_tejido' || material === 'hueso_solo') {
      // Add bone-like texture
      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height);
        ctx.lineTo(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height);
        ctx.stroke();
      }
    } else if (material === 'dientes_brackets' || material === 'dientes_implantes') {
      // Add metal-like structures
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height, 10, 0, 2 * Math.PI);
        ctx.stroke();
      }
    }

    // Simulate X-ray scattering
    const scatterIntensity = fotonAngulo / 180;
    ctx.fillStyle = `rgba(255, 255, 255, ${scatterIntensity * 0.3})`;
    for (let i = 0; i < 1000 * scatterIntensity; i++) {
      ctx.beginPath();
      ctx.arc(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height, 1, 0, 2 * Math.PI);
      ctx.fill();
    }
  };

  const calcularDisperso = (energia, angulo) => {
    return energia * Math.cos(angulo * Math.PI / 180);
  };

  const calcularCalidadImagen = (kvp, ma, tiempo) => {
    return (kvp * ma * tiempo) / 10000;
  };

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
                            <SelectItem value="hueso_solo">Hueso solo</SelectItem>
                            <SelectItem value="tejido_blando">Tejido blando solo</SelectItem>
                            <SelectItem value="dientes_brackets">Diente con aparatos (brackets)</SelectItem>
                            <SelectItem value="dientes_implantes">Dientes con implantes</SelectItem>
                            <SelectItem value="dientes_endodoncia">Dientes con endodoncia</SelectItem>
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
                      <canvas ref={canvasRef} width="500" height="500" className="w-full h-auto" />
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
                  <li>White, S. C., & Pharoah, M. J. (2014). <i>Oral Radiology: Principles and Interpretation</i> (8th ed.). Elsevier.</li>
                  <li>Bushberg, J. T., et al. (2011). <i>The Essential Physics of Medical Imaging</i> (3rd ed.). Lippincott Williams & Wilkins.</li>
                  <li>Iannucci, J. M., & Howerton, L. J. (2016). <i>Dental Radiography: Principles and Techniques</i> (5th ed.). Elsevier.</li>
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