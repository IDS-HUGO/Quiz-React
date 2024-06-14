import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Atoms/Button';
import Input from '../Atoms/Input';
const ContenedorEditor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #20a2c3;
    padding: 20px;
    border-radius: 5px;
`;

function EditorQuiz({ onAgregarPregunta }) {
  const [preguntaActual, setPreguntaActual] = useState({
    id: 1,
    titulo: '',
    tipo: 'opcion_multiple',
    opciones: ['Opción 1', 'Opción 2', 'Opción 3'],
    respuestasCorrectas: [],
  });

  const agregarPregunta = () => {
    if (preguntaActual.tipo === 'opcion_multiple' || preguntaActual.tipo === 'verdadero_falso') {
      if (preguntaActual.respuestasCorrectas.length === 0) {
        alert('Por favor selecciona la(s) respuesta(s) correcta(s).');
        return;
      }
    }

    onAgregarPregunta(preguntaActual);

    setPreguntaActual({
      id: preguntaActual.id + 1,
      titulo: '',
      tipo: 'opcion_multiple',
      opciones: ['Opción 1', 'Opción 2', 'Opción 3'],
      respuestasCorrectas: [],
    });
  };

  const toggleRespuestaCorrecta = (opcion) => {
    const index = preguntaActual.respuestasCorrectas.indexOf(opcion);
    if (index === -1) {
      setPreguntaActual({
        ...preguntaActual,respuestasCorrectas: [...preguntaActual.respuestasCorrectas, opcion],
      });
    } else {
      const respuestasCorrectasActualizadas = preguntaActual.respuestasCorrectas.filter((resp) => resp !== opcion);
      setPreguntaActual({
        ...preguntaActual,
        respuestasCorrectas: respuestasCorrectasActualizadas,
      });
    }
  };

  const handleOpcionChange = (index, value) => {
    let opcionesActualizadas = [...preguntaActual.opciones];
    opcionesActualizadas[index] = value;
    setPreguntaActual({ ...preguntaActual, opciones: opcionesActualizadas });
  };

  return (
    <ContenedorEditor>
      <h2>Editor de Quiz</h2>
      <Input
        type="text"
        placeholder="Título de la pregunta"
        value={preguntaActual.titulo}
        onChange={(e) => setPreguntaActual({ ...preguntaActual, titulo: e.target.value })}
      />
      <br /><br /><br /><br /><br />
      <div>
        <br />
        <label>
          <input
            type="radio"
            value="opcion_multiple"
            checked={preguntaActual.tipo === 'opcion_multiple'}
            onChange={(e) => setPreguntaActual({ ...preguntaActual, tipo: e.target.value })}
          />
          Opción múltiple
        </label>
        <label>
          <input
            type="radio"
            value="verdadero_falso"
            checked={preguntaActual.tipo === 'verdadero_falso'}
            onChange={(e) => setPreguntaActual({ ...preguntaActual, tipo: e.target.value })}
          />
          Verdadero/Falso
        </label>
        <label>
          <input
            type="radio"
            value="abierta"
            checked={preguntaActual.tipo === 'abierta'}
            onChange={(e) => setPreguntaActual({ ...preguntaActual, tipo: e.target.value })}
          />
          Abierta
        </label>
        <br /><br /><br />
      </div>
      {preguntaActual.tipo === 'opcion_multiple' &&
        preguntaActual.opciones.map((opcion, index) => (
          <div key={index}>
            <Input
              type="text"
              placeholder={`Opción ${index + 1}`}
              value={opcion}
              onChange={(e) => handleOpcionChange(index, e.target.value)}
            />
            <label>
              <input
                type="checkbox"
                checked={preguntaActual.respuestasCorrectas.includes(opcion)}
                onChange={() => toggleRespuestaCorrecta(opcion)}
              />
              Correcta
            </label>
          </div>
        ))}
      {preguntaActual.tipo === 'verdadero_falso' && (
        <div>
          <label>
            <input
              type="radio"
              value="true"
              checked={preguntaActual.respuestasCorrectas.includes('true')}
              onChange={() => toggleRespuestaCorrecta('true')}
            />
            Verdadero
          </label>
          <label>
            <input
              type="radio"
              value="false"
              checked={preguntaActual.respuestasCorrectas.includes('false')}
              onChange={() => toggleRespuestaCorrecta('false')}
            />
            Falso
          </label>
        </div>
      )}
      
      <Button onClick={agregarPregunta}>Agregar Pregunta</Button>
    </ContenedorEditor>
  );
}

export default EditorQuiz;
