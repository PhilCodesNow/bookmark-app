import React, { useState } from 'react';

import Header from './Header';
import BookmarksList from './BookmarksList';



function App() {
  const [bookmarksList, setBookmarksList] = useState(['Bookmark 1', 'Bookmark 2', 'Bookmark 3', 'Bookmark 4'])



  return (
    <div className="app">
      <Header />
      <BookmarksList
      bookmarksList={bookmarksList}
      />
    </div>
  );
}

export default App;
