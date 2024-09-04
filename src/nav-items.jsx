import { HomeIcon, AtomIcon, RadioIcon, BookOpenIcon } from "lucide-react";
import Home from "./pages/Home";
import PhysicsOfXRays from "./pages/PhysicsOfXRays";
import XRayMachine from "./pages/XRayMachine";
import ClinicalApplications from "./pages/ClinicalApplications";
import AdditionalResources from "./pages/AdditionalResources";

export const navItems = [
  {
    title: "Inicio",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "Física de los Rayos X",
    to: "/physics",
    icon: <AtomIcon className="h-4 w-4" />,
    page: <PhysicsOfXRays />,
  },
  {
    title: "Máquina de Rayos X",
    to: "/machine",
    icon: <RadioIcon className="h-4 w-4" />,
    page: <XRayMachine />,
  },
  {
    title: "Aplicaciones Clínicas",
    to: "/clinical",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <ClinicalApplications />,
  },
  {
    title: "Recursos Adicionales",
    to: "/resources",
    icon: <BookOpenIcon className="h-4 w-4" />,
    page: <AdditionalResources />,
  },
];