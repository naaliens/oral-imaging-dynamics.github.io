import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ClinicalApplications = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aplicaciones Clínicas de la Radiología Oral</CardTitle>
        <CardDescription>Explorando el uso de radiografías en diagnósticos dentales</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Diagnóstico de Caries</AccordionTrigger>
            <AccordionContent>
              Las radiografías de aleta de mordida son especialmente útiles para detectar caries interproximales y evaluar la progresión de la caries.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Evaluación Periodontal</AccordionTrigger>
            <AccordionContent>
              Las radiografías periapicales y de aleta de mordida ayudan a evaluar la pérdida ósea, cálculos subgingivales y defectos óseos en la enfermedad periodontal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Planificación de Implantes</AccordionTrigger>
            <AccordionContent>
              Las tomografías computarizadas de haz cónico (CBCT) proporcionan imágenes 3D detalladas para la planificación precisa de la colocación de implantes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Detección de Patologías</AccordionTrigger>
            <AccordionContent>
              Las radiografías panorámicas y CBCT son útiles para identificar quistes, tumores y otras patologías en los huesos maxilares.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ClinicalApplications;