import React, { useState } from 'react';
import './App.css';

//Using Function component and React-Hooks..

function App() {
  const [amount, setAmount] = useState("");
  const [percent, setPercent] = useState("");
  const [tip, setTip] = useState("");
  const [totalAmount, setTotalAmount] = useState();

  // function fired off after click Send button (onClick method)
  const calculateTip = (e) => {
      e.preventDefault();
      if (amount || percent) {
          console.log(amount , " ..... ", percent);
          setTip((amount * percent) / 100);
          setTotalAmount(parseInt(amount) + parseInt((amount * percent) / 100));
      }
  }

  return (
    <div className="App">
      <header className="app-heading">
        <h1>Tip Calculator</h1>
        <div style = {{display:'flex', justifyContent: 'space-between', marginTop:'30px'}}>         
            <div className = "tip-background">
            </div>

            <div className = "tip-actual-div">
                <input 
                    placeholder = 'Enter amount here' 
                    type = 'text' 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style = {{marginBottom: '25px'}}
                /> 

                <input 
                    placeholder = 'Enter tip here' 
                    type = 'text'
                    value={percent}
                    onChange={(e) => setPercent(e.target.value)}
                /> 
                <p>Tip will be calculated in terms of percentage on total amount.</p>
                <button onClick={calculateTip} className = 'btn-grad' style = {{marginTop: '25px'}}>Calculate</button>

                <div style = {{marginTop: '40px'}}>
                    {!tip? null :
                      (<h4>Tip &nbsp; : &nbsp; ${tip} 🙂😃😅😅</h4>)}
                    {!totalAmount? null :
                      (<h3 style = {{marginTop: '22px'}}>Total amount&nbsp; &nbsp; : &nbsp;  ${totalAmount}</h3>)}

                </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
