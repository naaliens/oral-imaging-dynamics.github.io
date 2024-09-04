import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AtomIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";

const AtomicModelTimeline = ({ onModelClick }) => {
  const timelineElements = [
    {
      title: "Modelo de Dalton",
      date: "1808",
      description: "Átomos como esferas sólidas indivisibles.",
      icon: <AtomIcon />,
      details: "John Dalton propuso que la materia está compuesta por partículas pequeñas e indivisibles llamadas átomos. Este modelo, aunque simple, sentó las bases para el desarrollo de la teoría atómica moderna.",
      image: "/images/dalton_model.jpg",
      imageCaption: "Representación del modelo atómico de Dalton",
      radiologyImplications: [
        "Estableció la base para entender la materia a nivel atómico.",
        "Aunque no explica la producción de rayos X, fue el primer paso hacia la comprensión de la estructura atómica."
      ]
    },
    {
      title: "Modelo de Thomson",
      date: "1897",
      description: "Modelo de 'pudín de pasas', electrones incrustados en una masa positiva.",
      icon: <AtomIcon />,
      details: "J.J. Thomson descubrió el electrón y propuso un modelo donde los electrones (las 'pasas') estaban incrustados en una 'masa' de carga positiva. Este modelo explicaba la neutralidad eléctrica de los átomos.",
      image: "/images/thomson_model.jpg",
      imageCaption: "Ilustración del modelo de 'pudín de pasas' de Thomson",
      radiologyImplications: [
        "Introdujo el concepto de electrones, fundamentales en la producción e interacción de rayos X.",
        "Ayudó a explicar la ionización, crucial para entender los efectos de los rayos X en la materia."
      ]
    },
    {
      title: "Modelo de Rutherford",
      date: "1911",
      description: "Átomo con un núcleo denso y positivo, rodeado de electrones.",
      icon: <AtomIcon />,
      details: "Ernest Rutherford realizó su famoso experimento de dispersión de partículas alfa, que llevó al descubrimiento del núcleo atómico. Su modelo propuso un átomo mayormente vacío con un núcleo pequeño y denso.",
      image: "/images/rutherford_model.jpg",
      imageCaption: "Modelo atómico de Rutherford mostrando el núcleo y los electrones",
      radiologyImplications: [
        "La idea de un núcleo denso ayudó a explicar la penetración de los rayos X en la materia.",
        "Sentó las bases para entender la interacción de la radiación con diferentes partes del átomo."
      ]
    },
    {
      title: "Modelo de Bohr",
      date: "1913",
      description: "Electrones en órbitas fijas alrededor del núcleo.",
      icon: <AtomIcon />,
      details: "Niels Bohr propuso que los electrones orbitan el núcleo en niveles de energía específicos. Este modelo explicaba el espectro de emisión del hidrógeno y sentó las bases para la mecánica cuántica.",
      image: "/images/bohr_model.jpg",
      imageCaption: "Representación del modelo atómico de Bohr con niveles de energía",
      radiologyImplications: [
        "Explicó cómo los electrones pueden absorber y emitir energía en forma de fotones, fundamental para entender la producción de rayos X.",
        "Introdujo el concepto de niveles de energía, crucial para comprender la fluorescencia de rayos X."
      ]
    },
    {
      title: "Modelo Cuántico",
      date: "1926",
      description: "Electrones en orbitales probabilísticos, principio de incertidumbre.",
      icon: <AtomIcon />,
      details: "El modelo cuántico, desarrollado por varios científicos, describe los electrones como ondas de probabilidad en orbitales alrededor del núcleo. Este modelo es el más preciso hasta la fecha y explica fenómenos complejos como el enlace químico.",
      image: "/images/quantum_model.jpg",
      imageCaption: "Visualización de orbitales atómicos en el modelo cuántico",
      radiologyImplications: [
        "Proporciona la comprensión más precisa de cómo los rayos X interactúan con los electrones a nivel atómico.",
        "Explica fenómenos complejos como el efecto fotoeléctrico y la dispersión Compton, cruciales en radiología."
      ]
    },
  ];

  return (
    <VerticalTimeline>
      {timelineElements.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={element.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={element.icon}
        >
          <h3 className="vertical-timeline-element-title">{element.title}</h3>
          <p>{element.description}</p>
          <Button 
            onClick={() => onModelClick(element)} 
            className="mt-2 bg-white text-blue-500 hover:bg-blue-100"
          >
            Más detalles
          </Button>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default AtomicModelTimeline;