import React,{useState} from 'react'
import './App.css';

function App() {

     const [name , SetName]=useState('');
     const [pickup , SetPickup]=useState('');
     const [instruction , SetInstruction]=useState('');

   const SubmitHandler=(e) =>{
      e.preventDefault();
      const submitData={
         submitName: name,
         submitPickup: pickup,
         submitInstructions: instruction
      }

      console.log(submitData);
      SetName('');
      SetPickup('');
      SetInstruction('');
   }

   const NameHandler=(e) =>{
      SetName(e.target.value);
      
   }
   
   const PickupHandler=(e) =>{
      SetPickup(e.target.value);
   }
   
   const InstructionHandler=(e) =>{
      SetInstruction(e.target.value);
   }


  return (

   <form className="myForm" onSubmit={SubmitHandler}>
      <label>Name <input type="text" value={name} name="customer_name"  required onChange={NameHandler}/> </label> 
      <p>
         <label>
            Pickup Place
            <select id="pickup_place" value={pickup} name="pickup_place" onChange={PickupHandler}>
               <option value="" >Select One</option>
               <option value="office" >Taxi Office</option>
               <option value="town_hall" >Town Hall</option>
               <option value="telepathy" >We'll Guess!</option>
            </select>
         </label>
      </p>
      <p>
         <label>Special Instructions
         <textarea name="comments" value={instruction} onChange={InstructionHandler} />
         </label>
      </p>
      <p><button>Submit</button></p>
   </form>

  );
}
export default App;