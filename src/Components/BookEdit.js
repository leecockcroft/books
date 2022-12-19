import {useState} from 'react'

//{prop name} - must be in brackets

function BookEdit({book,onSubmit}){
  const [title,setTitle]= useState(book.titles)
  const handleChange=(event)=>{
    setTitle(event.target.value);

  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    onSubmit(book.id,title);

}

return <form className='book-edit' onSubmit={handleSubmit}>
  <label> Title </label>
  <input className='input' value={title} onChange={handleChange}/>
  <button className='button is-primary'>save </button>
</form>
}

export default BookEdit
