import {useState} from 'react'
import BookEdit from './BookEdit'

function BookShow({book,onDelete,onEdit}){

const [showEdit,setShowEdit] = useState(false)

const handleDeleteClick=()=>{

onDelete(book.id)


}

const editTitle=()=>{

console.log(book.id)


}

const handleEditClick = ()=>{

setShowEdit(!showEdit);

}

const handleSubmit=(id,newTitle)=>{
  setShowEdit(false);
onEdit(id,newTitle)

}

let content = <h3>{book.titles} </h3>
if(showEdit){
  content=<BookEdit onSubmit={handleSubmit} book={book}/>
}


  return <div className='book-show'>
  <img alt='books' src="https://picsum.photos/300/200"/>
  {content}

<button className='edit' onClick={handleEditClick}> Edit</button>
  <button onClick={handleDeleteClick}>delete</button>
   </div>
}

export default BookShow;
