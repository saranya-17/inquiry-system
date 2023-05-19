const DeadLineDateComponent=({deadline, handleDeadlineChange})=>{
    return(
        <div className="form-field">
        <label htmlFor="deadline">Deadline:</label>
        <input
          type="date"
          id="deadline"
          value={deadline}
          onChange={handleDeadlineChange}
          className="input-field"
        />
      </div>
    )
}
export default DeadLineDateComponent;