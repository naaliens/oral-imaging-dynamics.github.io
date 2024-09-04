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
      image: "https://example.com/dalton-model.jpg"
    },
    {
      title: "Modelo de Thomson",
      date: "1897",
      description: "Modelo de 'pudín de pasas', electrones incrustados en una masa positiva.",
      icon: <AtomIcon />,
      details: "J.J. Thomson descubrió el electrón y propuso un modelo donde los electrones (las 'pasas') estaban incrustados en una 'masa' de carga positiva. Este modelo explicaba la neutralidad eléctrica de los átomos.",
      image: "https://example.com/thomson-model.jpg"
    },
    {
      title: "Modelo de Rutherford",
      date: "1911",
      description: "Átomo con un núcleo denso y positivo, rodeado de electrones.",
      icon: <AtomIcon />,
      details: "Ernest Rutherford realizó su famoso experimento de dispersión de partículas alfa, que llevó al descubrimiento del núcleo atómico. Su modelo propuso un átomo mayormente vacío con un núcleo pequeño y denso.",
      image: "https://example.com/rutherford-model.jpg"
    },
    {
      title: "Modelo de Bohr",
      date: "1913",
      description: "Electrones en órbitas fijas alrededor del núcleo.",
      icon: <AtomIcon />,
      details: "Niels Bohr propuso que los electrones orbitan el núcleo en niveles de energía específicos. Este modelo explicaba el espectro de emisión del hidrógeno y sentó las bases para la mecánica cuántica.",
      image: "https://example.com/bohr-model.jpg"
    },
    {
      title: "Modelo Cuántico",
      date: "1926",
      description: "Electrones en orbitales probabilísticos, principio de incertidumbre.",
      icon: <AtomIcon />,
      details: "El modelo cuántico, desarrollado por varios científicos, describe los electrones como ondas de probabilidad en orbitales alrededor del núcleo. Este modelo es el más preciso hasta la fecha y explica fenómenos complejos como el enlace químico.",
      image: "https://example.com/quantum-model.jpg"
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