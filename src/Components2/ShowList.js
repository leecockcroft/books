
import Individual from './Individual'


function ShowList({todoList,editTheItem,deleteitem}){

//pass down the mapped bersion totdo

const arrMap = todoList.map((todo,index) =>{
return <Individual key={todo.id} editTheItem={editTheItem} todoList={todo} deleteitem={deleteitem}  />})


return <div>{arrMap}


</div>



}


export default ShowList;
