import React, {useState} from 'react';
import './button.css';
{
   /* <input type="text" placeholder="SCORE" name="score" />
<input type="text" placeholder="PERCENT" name="percent" /> */
}
function DynamicInput() {
   const [score, setScore] = useState([]);
   const [percent, setPercent] = useState([]);
   const [valuescore, setValuescore] = useState([]); // Array de valores de los inputs score
   const [valuepercent, setValuepercent] = useState([]); // Array de valores de los inputs percent

   const LIMIT = 3;

   // Función para manejar el cambio de valor de un input específico
   const handleInputChangeScore = (index, value) => {
      setValuescore((prevValues) => {
         const newInputValues = [...prevValues]; // Copiar el array actual
         newInputValues[index] = value; // Actualizar el valor del input en el índice dado
         return newInputValues; // Retornar los nuevos valores actualizados
      });
   };

   // Función para manejar el cambio de valor de un input específico
   const handleInputChangePercent = (index, value) => {
      setValuepercent((prevValues) => {
         const newInputValues = [...prevValues]; // Copiar el array actual
         newInputValues[index] = value; // Actualizar el valor del input en el índice dado
         return newInputValues; // Retornar los nuevos valores actualizados
      });
   };
   //ADD SCORE INPUT
   function handleScore() {
      setScore([...score, <input key={score.length} type="text" placeholder={'SCORE'} name="score" onChange={(ev) => handleInputChangeScore(percent.length, ev.target.value)} />]);
   }

   //ADD PERCENT INPUT
   function handlePercent() {
      setPercent([...percent, <input key={percent.length} type="text" placeholder={'PERCENT'} name="percent" onChange={(ev) => handleInputChangePercent(score.length, ev.target.value)} />]);
   }

   //REMOVE INPUT
   function handleRemove() {
      if (score.length > 0) {
         const newInputs = [...score];
         const newPercent = [...percent];
         const newValueScore = [...valuescore];
         const newValuePercent = [...valuepercent];
         newInputs.pop();
         newPercent.pop();
         newValueScore.pop();
         newValuePercent.pop();
         setScore(newInputs);
         setPercent(newPercent);
         setValuescore(newValueScore);
         setValuepercent(newValuePercent);
      } else {
         alert('No puedes retirar mas inputs');
      }
   }

   return (
      <div>
         <div className="Binputs">
            <form id="valueScore" className="content">
               {score.map((input) => input)}
            </form>
            <form id="valuePercent" className="content">
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
         <button>Calcular</button>
      </div>
   );
}

export default DynamicInput;
