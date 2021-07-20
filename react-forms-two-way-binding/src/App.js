import './App.css';

function App() {
  return (

   <form className="myForm">
      <label>Name <input type="text" name="customer_name"  required/> </label> 
      <p>
         <label>
            Pickup Place
            <select id="pickup_place" name="pickup_place">
               <option value="" >Select One</option>
               <option value="office" >Taxi Office</option>
               <option value="town_hall" >Town Hall</option>
               <option value="telepathy" >We'll Guess!</option>
            </select>
         </label>
      </p>
      <p>
         <label>Special Instructions
         <textarea name="comments"></textarea>
         </label>
      </p>
      <p><button>Submit Booking</button></p>
   </form>

  );
}
export default App;
