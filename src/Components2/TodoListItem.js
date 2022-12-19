
import {useState} from 'react';

function TodoListItem({onSubmit}){

const  [inputValue,setInputValue]= useState('');

const changeInput=(event)=>{

event.preventDefault();
const value = event.target.value;
setInputValue(value)


}

const onSubmitForm=(e)=>{
//take state and send it back to App
e.preventDefault()
onSubmit(inputValue)

}



return <div><form onSubmit={onSubmitForm}  ><input value={inputValue} onChange={changeInput}/>
<button > Submit </button>
</form>
 </div>



}


export default TodoListItem;
