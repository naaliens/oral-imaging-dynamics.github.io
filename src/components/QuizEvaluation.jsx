import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const questions = [
  {
    question: "¿Qué tipo de radiación son los rayos X?",
    options: ["Alfa", "Beta", "Gamma", "Electromagnética"],
    correctAnswer: "Electromagnética"
  },
  {
    question: "¿Cuál es la función principal del colimador en una máquina de rayos X?",
    options: ["Generar rayos X", "Enfriar el tubo", "Restringir el haz de rayos X", "Aumentar la energía de los rayos X"],
    correctAnswer: "Restringir el haz de rayos X"
  },
  {
    question: "¿Qué parámetro determina la penetración de los rayos X?",
    options: ["mA", "kVp", "Tiempo de exposición", "Distancia focal"],
    correctAnswer: "kVp"
  }
];

const QuizEvaluation = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (value) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Evaluación de Conocimientos</CardTitle>
        <CardDescription>Pon a prueba tu comprensión de la imagenología oral</CardDescription>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <>
            <h3 className="text-lg font-semibold mb-2">Pregunta {currentQuestion + 1}</h3>
            <p className="mb-4">{questions[currentQuestion].question}</p>
            <RadioGroup onValueChange={handleAnswerSelection} value={selectedAnswer}>
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button onClick={handleNextQuestion} className="mt-4" disabled={!selectedAnswer}>
              {currentQuestion < questions.length - 1 ? "Siguiente" : "Finalizar"}
            </Button>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Resultado Final</h3>
            <p className="text-lg mb-4">Tu puntuación: {score} de {questions.length}</p>
            <Button onClick={resetQuiz}>Reiniciar Quiz</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizEvaluation;