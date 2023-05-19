const SupportingDocumentSection=({fileInputRef, handleSupportingDocChange})=>{
    return(
        <div className="form-field">
        <label htmlFor="supporting-doc">Supporting Document:</label>
        <input
          type="file"
          id="supporting-doc"
          ref={fileInputRef}
          accept=".pdf, .doc, .docx"
          onChange={handleSupportingDocChange}
          className="input-field"
        />
      </div>
    )
}
export default SupportingDocumentSection;