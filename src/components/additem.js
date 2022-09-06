import "../css/add.css";
function AddItem(){
    return(
        <div>
            <input placeholder="Enter Item" /> <br></br>
            <input placeholder="Enter amout" /> <br></br>


            <select>
                <option value="Income">Income</option>
                <option value="Expenses">Expenses</option>
   
            </select> <br></br>
            <button id="btn">Add</button>


        </div>
    )

}
export default  AddItem;