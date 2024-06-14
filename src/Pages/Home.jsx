import React, { useState } from 'react';
import EditorQuiz from '../Components/Organisms/QuizEditor';
import ResolverQuiz from './ResolverQuiz';
import Button from '../Components/Atoms/Button';
import './Home.css'
function Home() {
  const [preguntas, setPreguntas] = useState([]);
  const [mostrarQuiz, setMostrarQuiz] = useState(false);
  const [respuestasUsuario, setRespuestasUsuario] = useState(null);

  const handleAgregarPregunta = (pregunta) => {
    setPreguntas([...preguntas, pregunta]);
  };

  const handleMostrarQuiz = () => {
    setMostrarQuiz(true);
  };

  const handleTerminarQuiz = (respuestas) => {
    setRespuestasUsuario(respuestas);
  };

  return (
    <div>
      <h1 id='title'>Aplicación de Quiz Interactivo</h1>
      {!mostrarQuiz ? (
        <>
          <EditorQuiz onAgregarPregunta={handleAgregarPregunta} />
          <Button onClick={handleMostrarQuiz}>Mostrar Quiz</Button>
        </>
      ) : (
        <ResolverQuiz preguntas={preguntas} onTerminarQuiz={handleTerminarQuiz} />
      )}
      
    </div>
  );
}

export default Home;
