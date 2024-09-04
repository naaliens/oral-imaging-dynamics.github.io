import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Fundamentos de la Imagenología Oral</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Explorando la ciencia de los rayos X en la práctica odontológica</h2>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Introducción</h3>
              <p className="mt-2 max-w-xl text-sm text-gray-500">
                La radiografía juega un papel crucial en el diagnóstico dental, complementando el examen clínico y el historial del paciente. Esta herramienta permite a los profesionales dentales visualizar estructuras que de otro modo serían invisibles, mejorando significativamente la precisión del diagnóstico y la planificación del tratamiento.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link to="/physics" className="block hover:shadow-lg transition duration-300 ease-in-out">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">¿Qué es la Radiografía?</h3>
                  <p className="mt-2 max-w-xl text-sm text-gray-500">
                    Descubre los fundamentos de la radiografía y su importancia en la odontología moderna.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/physics" className="block hover:shadow-lg transition duration-300 ease-in-out">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Física de los Rayos X</h3>
                  <p className="mt-2 max-w-xl text-sm text-gray-500">
                    Explora los principios físicos detrás de los rayos X y cómo se aplican en la imagenología dental.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/machine" className="block hover:shadow-lg transition duration-300 ease-in-out">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">La Máquina de Rayos X</h3>
                  <p className="mt-2 max-w-xl text-sm text-gray-500">
                    Conoce los componentes y el funcionamiento de las máquinas de rayos X utilizadas en odontología.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;