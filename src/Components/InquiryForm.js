import React, { useState } from 'react';
import './inquiryForm.css';
import { companies, departments, recipients } from './constant';


const InquiryForm = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [issueType, setIssueType] = useState('');
  const [department, setDepartment] = useState('');
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState('');
  const [issueInput, setIssueInput] = useState('');
  const [choices, setChoices] = useState([]);
  const [note, setNote] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [deadline, setDeadline] = useState('');

  const handleChoiceClick = (choice) => {
    setSelectedChoice(choice);
  };

  const handleIssueTypeChange = (event) => {
    setIssueType(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleCompanyChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCompanies([...selectedCompanies, value]);
    } else {
      const updatedCompanies = selectedCompanies.filter((company) => company !== value);
      setSelectedCompanies(updatedCompanies);
    }
  };

  const handleRecipientClick = (name) => {
    if (selectedRecipient === name) {
      setSelectedRecipient('');
    } else {
      setSelectedRecipient(name);
    }
  };
  

  const handleIssueInputChange = (event) => {
    setIssueInput(event.target.value);
  };

  const handleChoiceAdd = () => {
    const newChoice = prompt('Enter a new choice:');
    if (newChoice) {
      setChoices([...choices, newChoice]);
    }
  };

  const handleChoiceRemove = (choice) => {
    const updatedChoices = choices.filter((c) => c !== choice);
    setChoices(updatedChoices);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSupportingDocChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the form submission here
    alert('Form Submitted')
    console.log('Form submitted');
  };

  const handleSave = () =>{
    // todo save action
    alert('Saved as Draft')
    console.log("Data saved")
  }

  const handleDelete = () => {
    setIssueType('');
    setDepartment('');
    setSelectedCompanies([]);
    setSelectedRecipient('');
    setIssueInput('')
    setChoices(['']);
    setNote('');
    setSelectedFile(null);
    setDeadline('');
  };
  

  return (
    <div className="inquiry-form">
      <h1>Send Inquiry</h1>

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

      <div className="form-field">
        <label htmlFor="department">Related Department:</label>
        <select
          id="department"
          value={department}
          onChange={handleDepartmentChange}
          className="select-field"
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="company">Relating to Which:</label>
        <ul className="companies-list">
          {companies.map((company) => (
            <li key={company.name} className="company-item">
              <label>
                <input
                  type="checkbox"
                  value={company.name}
                  checked={selectedCompanies.includes(company.name)}
                  onChange={handleCompanyChange}
                />
                <img src={company.logo} alt={company.name} className="company-logo" />
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="form-field">
        <label>Direct it to:</label>
        <ul className="recipient-list">
          {recipients.map((recipient) => (
            <li
              key={recipient.name}
              className={`recipient-item ${selectedRecipient === recipient.name ? 'selected' : ''}`}
              onClick={() => handleRecipientClick(recipient.name)}
            >
              <img src={recipient.avatar} alt={recipient.name} className="recipient-avatar" />
              <span className="recipient-name">{recipient.name}</span>
            </li>
          ))}
        </ul>
      </div>


      <div className="form-field">
        <label htmlFor="issue-input">Issue:</label>
        <textarea
          id="issue-input"
          value={issueInput}
          onChange={handleIssueInputChange}
          className="textarea-field"
        />
      </div>

      <div className="form-field">
        <label>Choices:</label>
        <ul className="choices-list">
          {choices.length>0&&choices.map((choice) => (
            <li
              key={choice}
              className={`choice-item ${selectedChoice === choice ? 'selected' : ''}`}
              onClick={() => handleChoiceClick(choice)}
            >
              {choice}
            </li>
          ))}
        </ul>
        <button className="add-choice-btn" onClick={handleChoiceAdd}>Add Choice</button>
      </div>

      <div className="form-field">
        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          value={note}
          onChange={handleNoteChange}
          className="textarea-field"
        />
      </div>

      <div className="form-field">
        <label htmlFor="supporting-doc">Supporting Document:</label>
        <input
          type="file"
          id="supporting-doc"
          accept=".pdf, .doc, .docx"
          onChange={handleSupportingDocChange}
          className="input-field"
        />
      </div>


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

      <div className="form-actions">
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
        <button className="save-btn">Save</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default InquiryForm;
