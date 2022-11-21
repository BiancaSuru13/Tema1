import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const manualCounter = ({maxNumber}) => {
  const[manualCounter, setManualCounter] = useState(0);

  const handlePlus= () =>
  if (manualCounter > 0) {
    setManualCounter(manualCounter - 1);
  }
};

return(
  <div>
    <div className="counter-box">
      <button className='my-button' onClick={handleMinus}>-</button>
      <div>{manualCounter}</div>
      <button className='my-button' onlick={handlePlus}>+</button>
    </div>
    {manualCounter == 10 && (
      <div>
        <div className="text">
          It's 10. Finish!
        </div>
        <RandomName />
        </div>

    )}
  </div>
)

export default manualCounter;


const CounterBox = ({ minRange}) => {
  const [ counter, setCounter] = useState(minRange);

  useEffect(()) => {
    if (counter < 61) {
      setTimeout(() => setCounter(counter + 1), 600);

    }
    else {
      setCounter(0);

    }
  }, [counter]);


  return(
    <div className='counter-box-1'>
      <div>Let's count!</div>
      <div className='auto-counting'>{counter}</div>
      <manualCounter maxnumber={10} />

    </div>
  )
}

export default CounterBox;