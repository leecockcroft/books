
import {useState} from 'react';
import axios from 'axios'

import BookCreate from './Components/BookCreate'
import BookList from './Components/BookList'

//importing child components

//setBooks - updating state.
//arr - map/filter arr - then update new changes to setBooks
//all state updates need to be done in app. parent to all.


function App(){
  const [books,setBooks]=useState([]);

  const editBookById=(id,newTitle)=>{
  const updatedBooks=books.map((book)=>{
    if(book.id==id){
      return {...book,titles:newTitle};
    }

    return book;


  })
    setBooks(updatedBooks)
    console.log(books)

}

const deleteBookById=(id)=>{
  const updatedBooks=books.filter((book)=>{
    return book.id !== id;
  })
 setBooks(updatedBooks)

};

const createBook= async(titles)=>{
const response = await axios.post('http://localhost:3001/books',{
titles:titles

});
console.log(response)

  const updatedBooks =[
    ...books,
  response.data
  ]

    setBooks(updatedBooks)

}

  return <div className='app'>
<h1>Reading List </h1>
    <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
    <BookCreate onCreate={createBook}/>

   </div>
}



export default App;
