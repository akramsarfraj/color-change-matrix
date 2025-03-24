
import { useState } from 'react';
import './App.css';

function App() {

  let [sequence,setSequence] = useState([])
 

  let colorChanger=(id)=>{

      // check wether id present or not
      // it will remove the duplicate click 
      if(!sequence.includes(id)){
        sequence.push(id)
      }
     
      
      if(sequence.length === 9){

        for (let i = 0; i < sequence.length; i++) {
         
          setTimeout(()=>{
              document.getElementById(sequence[i]).style.backgroundColor="orange"
          },500*i)
          
        }
          
        
      
      }else{
        document.getElementById(id).style.backgroundColor="green"

      }
    
      
      
  }


  let reset=()=>{
    setSequence([])
    let ele = document.getElementsByClassName("box")
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.backgroundColor="whitesmoke"
    }
    
    
  }

  return (
    <div className="App">
      <button className='btn-reset' style={{marginBottom:"20px"}} onClick={reset}>Reset</button>
      <div className='matrix' style={{display:"flex",width:"320px",height:"320px",flexWrap:"wrap",gap:"30px"}}>
        <div id='1' className='box' onClick={()=>{colorChanger(1)}}>  </div>
        <div id='2' className='box' onClick={()=>{colorChanger(2)}}>  </div>
        <div id='3' className='box' onClick={()=>{colorChanger(3)}}>  </div>
        <div id='4' className='box' onClick={()=>{colorChanger(4)}}>  </div>
        <div id='5' className='box' onClick={()=>{colorChanger(5)}}>  </div>
        <div id='6' className='box' onClick={()=>{colorChanger(6)}}>  </div>
        <div id='7' className='box' onClick={()=>{colorChanger(7)}}>  </div>
        <div id='8' className='box' onClick={()=>{colorChanger(8)}}>  </div>
        <div id='9' className='box' onClick={()=>{colorChanger(9)}}>  </div>
      </div>
    </div>
  );
}

export default App;
