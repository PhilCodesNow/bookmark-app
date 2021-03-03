import React from 'react';

import Bookmark from './Bookmark';

function BookmarksList(props) {
    const {
        bookmarksList,
    } = props
    return (
        <div>
            {
            bookmarksList.map(bookmark => {
                return(
                <div key={bookmark.id}>
                    <Bookmark 
                    bookmark={bookmark}
                    />
                </div>)
            })
            }
        </div>
    )
}

export default BookmarksList
