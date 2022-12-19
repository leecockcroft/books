import {useState} from 'react';

//todolist
// input bar with submit - get value and submit into arr
//items to list - edit and delete
//move items to completed.

//state - input value delete and edit.

import TodoList from './Components2/TodoList';
import ShowList from './Components2/ShowList';

function App (){



const [todoList, setTodoList] = useState([]);


const handleSubmit=(newState)=>{
const newArr = [...todoList,{id:Math.round(Math.random() * 999),name: newState}]

setTodoList(newArr)
console.log(todoList)
}


const deleteitem=()=>{

  const upDateState=todoList.filter((id)=>{


  return   todoList.id !== id;


  })


  setTodoList(upDateState)
}


const editTheItem=(id,name)=>{

  const updatedBooks=todoList.map((list)=>{

    if(list.id==id){
      return {...todoList,name:name,id:id};
    }

    return list;


  })
setTodoList(updatedBooks)


}

return <div> <TodoList onSubmit={handleSubmit}/>

 <ShowList todoList={todoList} editTheItem={editTheItem} deleteitem={deleteitem}/>


</div>



}


export default App;
