import React, { useState } from 'react';

import Header from './Header';
import BookmarksList from './BookmarksList';
import AddForm from './AddForm';



function App() {
  const [bookmarksList, setBookmarksList] = useState([])
  const [addBookmarkInput, setAddBookmarkInput] = useState('')

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
