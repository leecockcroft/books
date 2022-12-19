import {useState} from 'react';


function EditToDoItem({name,onSubmit,todoList,editTheItem}){

const [stateUpdate,setStateUpdate]=useState(todoList.name);

  const changeState=(e)=>{

const newState = e.target.value;
setStateUpdate(newState);


  }

const upDateState=(e)=>{
e.preventDefault();

onSubmit(todoList.id,stateUpdate);

}



return <div> <form onSubmit={upDateState}><input onChange={changeState} value={stateUpdate} /> <button> Submit </button> </form>


</div>



}


export default EditToDoItem;
