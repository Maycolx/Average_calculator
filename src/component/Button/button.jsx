import React, {useState, useEffect} from 'react';
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
   const INPUT_SCORE = <input key={score.length} type="text" placeholder={'SCORE'} name="score" className="mbotton" onChange={(ev) => handleInputChangeScore(percent.length, ev.target.value)} />;
   const INPUT_PERCENT = () => {
      return (
         <div key={percent.length} className="content_percent mbotton">
            <input key={percent.length} type="text" placeholder={'PERCENT'} name="percent" className="percent" onChange={(ev) => handleInputChangePercent(score.length, ev.target.value)} />
            <label className="symbol">%</label>
         </div>
      );
   };

   useEffect(() => {
      setScore([INPUT_SCORE]);
      setPercent([INPUT_PERCENT()]);
   }, []);

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
   //ADD INPUT
   function handleInputs() {
      setScore([...score, INPUT_SCORE]);
      setPercent([...percent, INPUT_PERCENT()]);
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

   //AVERAGE
   function calcular() {
      let average = [];
      for (let i = 0; i < valuescore.length; i++) {
         const mult = valuescore[i] * (valuepercent[i] / 100);
         average.push(mult);
      }
      average = average.reduce((a, b) => a + b, 0);
      let average2 = average.toString().slice(0, 4);
      console.log(average.toFixed(3));
      //max character
      return <h2>Tu promedio acumulado es de {average2}</h2>;
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
               handleInputs();
            }}
         >
            +
         </button>
         <button onClick={handleRemove}>-</button>
         {/* <button onClick={calcular}>Calcular</button> */}
         {calcular()}
      </div>
   );
}

export default DynamicInput;
