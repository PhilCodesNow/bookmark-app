import React from 'react'

function Bookmark(props) {
    const {
        bookmark
    } = props
    return (
        <div>
            <a href={bookmark.url} >{bookmark.name}</a>
        </div>
    )
}

export default Bookmark
