const Issue=({issueInput, handleIssueInputChange})=>{
    return(
    <div className="form-field">
        <label htmlFor="issue-input">Issue:</label>
        <textarea
          id="issue-input"
          value={issueInput}
          onChange={handleIssueInputChange}
          className="textarea-field"
        />
      </div>
    )
}
export default Issue;