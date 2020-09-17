import React, { useState } from 'react';
import './App.css';

// Using Class Component and class-state variables 
class App extends React.Component {
  state = {
    amount: '',
    tipInPercent: '',
    tipCalculated: 0,
    totalAmount: 0
  };

  handleInputChange = (event) => {
      this.setState({ [event.target.name] : event.target.value});
  } 

  calculateTip = (e) => {
      e.preventDefault();
          if (this.state.amount || this.state.tipInPercent) {
              const tipCal = (parseInt(this.state.amount) * parseInt(this.state.tipInPercent)) / 100;
              this.setState({
                  tipCalculated : tipCal,
                  totalAmount : parseInt(this.state.amount) + tipCal
              }, () => {
                console.log(this.state.totalAmount)
              });
          } 
           
  }

  render() {
    console.log(this.state.amount, this.state.tipInPercent, this.state.tipCalculated, this.state.totalAmount)
    return (
      <div className = "App app_heading">
        <h1>Tip Calculator</h1>
        <div style = {{display:'flex', justifyContent: 'space-between', marginTop:'30px'}}>         
            <div className = "tip-background">
            </div>            
            
            <div className = "tip-actual-div">
                <input 
                    type = 'text' 
                    name = "amount"
                    value={this.state.amount}
                    onChange = {this.handleInputChange}                    
                    placeholder = 'Enter amount here' 
                    style = {{marginBottom: '25px'}}
                /> 

                <input 
                    placeholder = 'Enter tip here' 
                    type = 'text'
                    name = 'tipInPercent'
                    value={this.state.tipInPercent}
                    onChange = {this.handleInputChange}
                /> 
                <p>Tip will be calculated in terms of percentage on total amount.</p>
                <button 
                    className = 'btn-grad' 
                    style = {{marginTop: '25px'}}
                    onClick = {this.calculateTip}
                >
                    Calculate
                </button>

                <div style = {{marginTop: '40px'}}>
                    {!this.state.tipCalculated? null :
                      (<h4>Tip &nbsp; : &nbsp; ${this.state.tipCalculated} 🙂😃😅😅</h4>)}
                    {!this.state.totalAmount? null :
                      (<h3 style = {{marginTop: '22px'}}>Total amount&nbsp; &nbsp; : &nbsp;  ${this.state.totalAmount}</h3>)}
                </div>
            </div>
        </div>
        
      </div>
    );
  }
}


//Using Function component and React-Hooks..

// function App() {
//   const [amount, setAmount] = useState("");
//   const [percent, setPercent] = useState("");
//   const [tip, setTip] = useState("");
//   const [totalAmount, setTotalAmount] = useState();

//   // function fired off after click Send button (onClick method)
//   const calculateTip = (e) => {
//       e.preventDefault();
//       if (amount || percent) {
//           console.log(amount , " ..... ", percent);
//           setTip((amount * percent) / 100);
//           setTotalAmount(parseInt(amount) + parseInt((amount * percent) / 100));
//       }
//   }

//   return (
//     <div className="App">
//       <header className="app-heading">
//         <h1>Tip Calculator</h1>
//         <div style = {{display:'flex', justifyContent: 'space-between', marginTop:'30px'}}>         
//             <div className = "tip-background">
//             </div>

//             <div className = "tip-actual-div">
//                 <input 
//                     placeholder = 'Enter amount here' 
//                     type = 'text' 
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     style = {{marginBottom: '25px'}}
//                 /> 

//                 <input 
//                     placeholder = 'Enter tip here' 
//                     type = 'text'
//                     value={percent}
//                     onChange={(e) => setPercent(e.target.value)}
//                 /> 
//                 <p>Tip will be calculated in terms of percentage on total amount.</p>
//                 <button onClick={calculateTip} className = 'btn-grad' style = {{marginTop: '25px'}}>Calculate</button>

//                 <div style = {{marginTop: '40px'}}>
//                     {!tip? null :
//                       (<h4>Tip &nbsp; : &nbsp; ${tip} 🙂😃😅😅</h4>)}
//                     {!totalAmount? null :
//                       (<h3 style = {{marginTop: '22px'}}>Total amount&nbsp; &nbsp; : &nbsp;  ${totalAmount}</h3>)}

//                 </div>
//             </div>
//         </div>
//       </header>
//     </div>
//   );
// }

export default App;
