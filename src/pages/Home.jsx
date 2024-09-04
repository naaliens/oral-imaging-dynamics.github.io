import React from 'react';
import { Link } from 'react-router-dom';
import { AtomIcon, RadioIcon, BookOpenIcon, BookmarkIcon, HelpCircleIcon, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Introducción a la Imagenología Oral
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explorando la ciencia detrás de los rayos X en odontología
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-12">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900 mb-2">Descripción Breve</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              La radiografía juega un papel crucial en el diagnóstico dental, complementando el examen clínico y el historial del paciente. Esta clase abordará los fundamentos de la imagenología oral, proporcionando una comprensión profunda de los principios físicos y las aplicaciones clínicas de los rayos X en odontología.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircleIcon className="mr-2 h-4 w-4" />
                ¿Qué es la Radiografía?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Descubre los principios básicos de la radiografía y su importancia en el diagnóstico dental.
              </CardDescription>
              <Button asChild className="mt-4">
                <Link to="/radiography">Aprender más</Link>
              </Button>
            </CardContent>
          </Card>

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
                <Target className="mr-2 h-4 w-4" />
                Objetivos del Curso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Conoce las metas de aprendizaje y competencias que adquirirás al finalizar este curso.
              </CardDescription>
              <Button asChild className="mt-4">
                <Link to="/objectives">Ver objetivos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
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

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookmarkIcon className="mr-2 h-4 w-4" />
                Recursos Adicionales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Accede a bibliografía, glosarios y evaluaciones para reforzar tu aprendizaje.
              </CardDescription>
              <Button asChild className="mt-4">
                <Link to="/resources">Acceder</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpenIcon className="mr-2 h-4 w-4" />
                Simulaciones Interactivas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Experimenta con simulaciones virtuales de equipos de rayos X y diagnóstico radiográfico.
              </CardDescription>
              <Button asChild className="mt-4">
                <Link to="/simulations">Iniciar simulación</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                Este curso está diseñado para proporcionar una comprensión profunda de la imagenología oral. Navega por las diferentes secciones para explorar cada tema en detalle y acceder a recursos interactivos que mejorarán tu aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;