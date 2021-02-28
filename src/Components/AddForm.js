import React from 'react'

function AddForm(props) {
    const {
        handleAddBookmark,
        handleUpdateAddBookmarkInput,
        addBookmarkInput
    } = props
    return (
        <div>
            <form>
                <input type="text" onChange={handleUpdateAddBookmarkInput}
                value={addBookmarkInput}></input>
                <button onClick={handleAddBookmark}>Add Todo</button>
            </form>
        </div>
    )
}

export default AddForm
