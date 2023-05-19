const Note=({note, handleNoteChange})=>{
    return(
        <div className="form-field">
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          value={note}
          onChange={handleNoteChange}
          className="textarea-field"
        />
      </div>
    )
}
export default Note