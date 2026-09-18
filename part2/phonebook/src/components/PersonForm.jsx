const PersonForm = ({addPerson, newName, handleNameChange,handleNumberChange, newNumber}) => {
 return (
   <form onSubmit={addPerson}>
     <div style={{ listStyle: "none", margin: 0, padding: 0 }}>
       <div>
         name: <input value={newName} onChange={handleNameChange} />
       </div>
       <div>
         number: <input value={newNumber} onChange={handleNumberChange} />
       </div>
       <div>
         <button type="submit">add</button>
       </div>
     </div>
   </form>
 );
}
export default PersonForm;