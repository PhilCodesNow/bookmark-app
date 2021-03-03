import React from 'react'

function Bookmark(props) {
    const {
        bookmark
    } = props
    return (
        <div>
            {bookmark.bookmark}
        </div>
    )
}

export default Bookmark
