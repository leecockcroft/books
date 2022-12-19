
import {useState}from 'react'
import EditToDoItem from './EditToDoItem'

function Individual({todoList,editTheItem,deleteitem}){

const [editStatus,setEditStatus]=useState(false)

const editBox=(id,name)=>{
setEditStatus(!editStatus);
editTheItem(id,name)



}

const deleHere=(id)=>{
deleteitem(todoList.id)

}

let  content = <h3> {todoList.name}</h3>;
if(editStatus){

content=<EditToDoItem todoList={todoList} onSubmit={editBox} />


}

return <div className='box'>
      {content}
      <button onClick={editBox}>Edit</button>
      <button onClick={deleHere}> delete </button>




</div>



}


export default Individual;
