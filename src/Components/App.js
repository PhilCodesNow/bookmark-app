import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import { v4 as uuidv4} from 'uuid';


import Header from './Header';
import BookmarksList from './BookmarksList';
import AddForm from './AddForm';




function App() {

  const [bookmarksList, setBookmarksList] = useState([])
  const [addBookmarkNameInput, setAddBookmarkNameInput] = useState('')
  const [addBookmarkURLInput, setAddBookmarkURLInput] = useState('')

const ref = firebase.firestore().collection('bookmarks')

function getBookmarks() {
  ref.onSnapshot((querySnapshot) =>{
    const items = [];
    querySnapshot.forEach((doc) =>{
      items.push(doc.data());
    })
    setBookmarksList([...items])
  })
}


useEffect(() =>{
  getBookmarks()
}, [])

 
function handleAddBookmark(e) {  
  e.preventDefault();
  let newBookmark = {
    id: uuidv4(),
    name: addBookmarkNameInput,
    url: addBookmarkURLInput
  }
  console.log(newBookmark)
  ref.add(newBookmark)
  

  setAddBookmarkNameInput('')
  setAddBookmarkURLInput('')
}

function handleUpdateAddBookmarkNameInput(e){
  setAddBookmarkNameInput(e.target.value)
}
function handleUpdateAddBookmarkURLInput(e){
  setAddBookmarkURLInput(e.target.value)
}
  return (
    <div className="app">
      <Header />
      <AddForm 
      handleAddBookmark={handleAddBookmark}
      handleUpdateAddBookmarkNameInput={handleUpdateAddBookmarkNameInput}
      handleUpdateAddBookmarkURLInput={handleUpdateAddBookmarkURLInput}
      addBookmarkNameInput={addBookmarkNameInput}
      addBookmarkURLInput={addBookmarkURLInput}
      />
      <BookmarksList
      bookmarksList={bookmarksList}
      />
    </div>
  );
}

export default App;
