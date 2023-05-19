const IssueTypeSelector=({issueType, handleIssueTypeChange})=>{
    return(
        <div className="form-field">
        <label htmlFor="issue-type">Issue Type:</label>
        <select
          id="issue-type"
          value={issueType}
          onChange={handleIssueTypeChange}
          className="select-field"
        >
          <option value="">Select Type</option>
          <option value="urgent">Urgent</option>
          <option value="typical">Typical</option>
        </select>
      </div>
    )
}
export default IssueTypeSelector;