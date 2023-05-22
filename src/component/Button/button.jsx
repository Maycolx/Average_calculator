import React, {useState} from 'react';
import './button.css';
{
   /* <input type="text" placeholder="SCORE" name="score" />
<input type="text" placeholder="PERCENT" name="percent" /> */
}
function DynamicInput() {
   const [score, setScore] = useState([]);
   const [percent, setPercent] = useState([]);
   const [valuescore, setValuescore] = useState([]);
   const [valuepercent, setValuepercent] = useState([]);
   const LIMIT = 3;

   const [inputValues, setInputValues] = useState([]); // Array de valores de los inputs

   // Función para manejar el cambio de valor de un input específico
   const handleInputChange = (index, value) => {
      setInputValues((prevValues) => {
         const newInputValues = [...prevValues]; // Copiar el array actual
         newInputValues[index] = value; // Actualizar el valor del input en el índice dado
         return newInputValues; // Retornar los nuevos valores actualizados
      });
   };
   //ADD SCORE INPUT
   function handleScore() {
      setScore([...score, <input key={score.length} type="text" placeholder={'SCORE'} name="score" onChange={(ev) => handleInputChange(percent.length, ev.target.value)} />]);
   }

   //ADD PERCENT INPUT
   function handlePercent() {
      setPercent([...percent, <input key={percent.length} type="text" placeholder={'PERCENT'} name="percent" />]);
   }

   //REMOVE INPUT
   function handleRemove() {
      if (score.length > 0) {
         const newInputs = [...score];
         const newPercent = [...percent];
         newInputs.pop();
         newPercent.pop();
         setScore(newInputs);
         setPercent(newPercent);
      } else {
         alert('No puedes retirar mas inputs');
      }
   }

   //GET INPUT VALUE
   const getInput = (ev) => {
      console.log('hola');
      ev.preventDefault();
      console.log('todos');
      const inputs = ev.target.elements.score;
      const newScores = Array.from(inputs).map((input) => input.value);
      setValuescore(newScores);
      console.log(score);
   };

   // GET PERCENT VALUE
   const getPercent = (ev) => {
      ev.preventDefault();
      const inputs = ev.target.elements.percent;
      const newScores = Array.from(inputs).map((input) => input.value);
      setValuepercent(newScores);
   };

   // const getValue = (ev) => {
   //    ev.preventDefault();
   //    //
   //    const inputsScore = ev.target.elements.score;
   //    const newScores = Array.from(inputsScore).map((input) => input.value);
   //    setValuescore(newScores);
   //    //
   //    const inputsPercent = ev.target.elements.percent;
   //    const newPercent = Array.from(inputsPercent).map((input) => input.value);
   //    setValuepercent(newPercent);
   // };
   return (
      <div>
         <div className="Binputs">
            <form id="valueScore" className="content" onSubmit={getInput}>
               {score.map((input) => input)}
            </form>
            <form id="valuePercent" className="content" onSubmit={getPercent}>
               {percent.map((input) => input)}
            </form>
         </div>
         <button
            onClick={() => {
               handleScore();
               handlePercent();
            }}
         >
            Agregar
         </button>
         <button onClick={handleRemove}>Retirar</button>
         <button type="submit" form="valueScore">
            Calcular
         </button>
      </div>
   );
}

export default DynamicInput;
