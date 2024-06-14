import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';

const ContenedorQuiz = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
`;

function Quiz({ preguntas, onTerminarQuiz }) {
  const [respuestasUsuario, setRespuestasUsuario] = useState({});

  const handleRespuestaChange = (preguntaId, respuesta) => {
    setRespuestasUsuario({
      ...respuestasUsuario,
      [preguntaId]: respuesta,
    });
  };

  const finalizarQuiz = () => {
    onTerminarQuiz(respuestasUsuario);
  };

  return (
    <ContenedorQuiz>
      <h2>Resuelve el Quiz</h2>
      {preguntas.map((pregunta) => (
        <div key={pregunta.id}>
          <h3>{pregunta.titulo}</h3>
          {pregunta.tipo === 'opcion_multiple' && (
            <>
              {pregunta.opciones.map((opcion, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={`opcion-${pregunta.id}-${index}`}
                    name={`pregunta-${pregunta.id}`}
                    value={opcion}
                    onChange={(e) => handleRespuestaChange(pregunta.id, e.target.value)}
                  />
                  <label htmlFor={`opcion-${pregunta.id}-${index}`}>{opcion}</label>
                </div>
              ))}
            </>
          )}
          {pregunta.tipo === 'verdadero_falso' && (
            <>
              <input
                type="radio"
                id={`verdadero-${pregunta.id}`}
                name={`pregunta-${pregunta.id}`}
                value="true"
                onChange={(e) => handleRespuestaChange(pregunta.id, e.target.value)}
              />
              <label htmlFor={`verdadero-${pregunta.id}`}>Verdadero</label>
              <input
                type="radio"
                id={`falso-${pregunta.id}`}
                name={`pregunta-${pregunta.id}`}
                value="false"
                onChange={(e) => handleRespuestaChange(pregunta.id, e.target.value)}
              />
              <label htmlFor={`falso-${pregunta.id}`}>Falso</label>
            </>
          )}
          {pregunta.tipo === 'abierta' && (
            <Input
              type="text"
              placeholder="Tu respuesta"
              onChange={(e) => handleRespuestaChange(pregunta.id, e.target.value)}
            />
          )}
        </div>
      ))}
      <Button onClick={finalizarQuiz}>Listo</Button>
    </ContenedorQuiz>
  );
}

export default Quiz;
