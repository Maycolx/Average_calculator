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

   //ADD SCORE INPUT
   function handleScore() {
      if (score.length < LIMIT) {
         setScore([...score, <input key={score.length} type="text" placeholder={'SCORE'} name="score" />]);
      }
      console.log(score.length);
   }

   //ADD PERCENT INPUT
   function handlePercent() {
      if (percent.length < LIMIT) {
         setPercent([...percent, <input key={percent.length} type="text" placeholder={'PERCENT'} name="percent" />]);
      }
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
      ev.preventDefault();
      const inputs = ev.target.elements.score;
      console.log(inputs);
      const newScores = Array.from(inputs).map((input) => input.value);
      console.log(newScores);
      setValuescore(newScores);
      console.log(valuescore);
   };

   // GET PERCENT VALUE
   const getPercent = (ev) => {
      ev.preventDefault();
      const inputs = ev.target.elements.score;
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
               // handlePercent();
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
