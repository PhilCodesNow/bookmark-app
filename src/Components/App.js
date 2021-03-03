import React, { useState, useEffect } from 'react';
import firebase from './firebase';


import Header from './Header';
import BookmarksList from './BookmarksList';
import AddForm from './AddForm';




function App() {

  const [bookmarksList, setBookmarksList] = useState([])
  const [addBookmarkInput, setAddBookmarkInput] = useState('')

const ref = firebase.firestore().collection('bookmarks')

function getBookmarks() {
  ref.onSnapshot((querySnapshot) =>{
    const items = [];
    querySnapshot.forEach((doc) =>{
      items.push(doc.data());
    })
    console.log(items)
    setBookmarksList([...items])
  })
}

useEffect(() =>{
  getBookmarks()
}, [])

// useEffect(() =>{
// firebase.firestore().collection('bookmarks').onSnapshot(snapshot =>{
//   console.log(snapshot.docs)
// })
// }, [])


 
function handleAddBookmark(e) {  
  e.preventDefault();
  setBookmarksList(
    [...bookmarksList, addBookmarkInput]
  )
  setAddBookmarkInput('')
}
function handleUpdateAddBookmarkInput(e){
  setAddBookmarkInput(e.target.value)
}

  return (
    <div className="app">
      <Header />
      <AddForm 
      handleAddBookmark={handleAddBookmark}
      handleUpdateAddBookmarkInput={handleUpdateAddBookmarkInput}
      addBookmarkInput={addBookmarkInput}
      />
      <BookmarksList
      bookmarksList={bookmarksList}
      />
    </div>
  );
}

export default App;
