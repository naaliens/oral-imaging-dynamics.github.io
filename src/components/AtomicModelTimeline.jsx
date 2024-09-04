import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AtomIcon } from 'lucide-react';

const AtomicModelTimeline = () => {
  const timelineElements = [
    {
      title: "Modelo de Dalton",
      date: "1808",
      description: "Átomos como esferas sólidas indivisibles.",
      icon: <AtomIcon />,
    },
    {
      title: "Modelo de Thomson",
      date: "1897",
      description: "Modelo de 'pudín de pasas', electrones incrustados en una masa positiva.",
      icon: <AtomIcon />,
    },
    {
      title: "Modelo de Rutherford",
      date: "1911",
      description: "Átomo con un núcleo denso y positivo, rodeado de electrones.",
      icon: <AtomIcon />,
    },
    {
      title: "Modelo de Bohr",
      date: "1913",
      description: "Electrones en órbitas fijas alrededor del núcleo.",
      icon: <AtomIcon />,
    },
    {
      title: "Modelo Cuántico",
      date: "1926",
      description: "Electrones en orbitales probabilísticos, principio de incertidumbre.",
      icon: <AtomIcon />,
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
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default AtomicModelTimeline;