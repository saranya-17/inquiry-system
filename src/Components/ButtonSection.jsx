const ButtonSection = ({handleSubmit, handleSave, handleDelete}) =>{
    return(
        <div className="form-actions">
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        <button className="save-btn" onClick={handleSave}>Save</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    )
}
export default ButtonSection;