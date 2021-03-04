import React from 'react'

function AddForm(props) {
    const {
        handleAddBookmark,
        handleUpdateAddBookmarkNameInput,
        handleUpdateAddBookmarkURLInput,
        addBookmarkNameInput,
        addBookmarkURLInput
    } = props
    return (
        <div>
            <form>
                <label>Name: </label>
                <input type="text" onChange={handleUpdateAddBookmarkNameInput}
                value={addBookmarkNameInput}></input>

                <label>URL: </label>
                <input type="text" onChange={handleUpdateAddBookmarkURLInput}
                value={addBookmarkURLInput}></input>
                <button onClick={handleAddBookmark}>Add Todo</button>
            </form>
        </div>
    )
}

export default AddForm
