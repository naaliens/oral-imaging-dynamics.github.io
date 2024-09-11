import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const XRayMachineInteractive = () => {
  const [kVp, setKVp] = useState(70);
  const [mA, setMA] = useState(10);
  const [exposureTime, setExposureTime] = useState(0.1);

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Máquina de Rayos X Interactiva</CardTitle>
        <CardDescription>Ajusta los parámetros para ver cómo afectan la producción de rayos X</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="kvp">kVp (Tensión del Tubo)</Label>
            <Slider
              id="kvp"
              min={50}
              max={100}
              step={1}
              value={[kVp]}
              onValueChange={(value) => setKVp(value[0])}
            />
            <p className="text-sm text-muted-foreground mt-1">Valor: {kVp} kVp</p>
          </div>
          <div>
            <Label htmlFor="ma">mA (Corriente del Tubo)</Label>
            <Slider
              id="ma"
              min={1}
              max={20}
              step={0.1}
              value={[mA]}
              onValueChange={(value) => setMA(value[0])}
            />
            <p className="text-sm text-muted-foreground mt-1">Valor: {mA.toFixed(1)} mA</p>
          </div>
          <div>
            <Label htmlFor="exposure-time">Tiempo de Exposición (s)</Label>
            <Slider
              id="exposure-time"
              min={0.1}
              max={1}
              step={0.1}
              value={[exposureTime]}
              onValueChange={(value) => setExposureTime(value[0])}
            />
            <p className="text-sm text-muted-foreground mt-1">Valor: {exposureTime.toFixed(1)} s</p>
          </div>
        </div>
        <div className="mt-4 p-4 bg-secondary rounded-md">
          <h4 className="font-semibold mb-2">Resultado de la Simulación:</h4>
          <p>Energía Total: {(kVp * mA * exposureTime).toFixed(2)} mAs</p>
          <p>Calidad del Haz: {kVp > 70 ? "Alta" : "Baja"}</p>
          <p>Penetración: {kVp > 80 ? "Alta" : kVp > 60 ? "Media" : "Baja"}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default XRayMachineInteractive;