import React, { useState, useRef } from 'react';
import './inquiryForm.css';
import IssueTypeSelector from './IssueTypeSelector';
import DepartmentSelector from './DepartmentSelector';
import RecipientSelector from './RecipientSelector';
import SupportingDocumentSection from './SupportingDocumentSection';
import DeadLineDateComponent from './DeadlineDateComponent';
import CompanySelector from './CompanySelecter'
import Issue from './Issue';
import ChoicesList from './ChoicesList';
import Note from './Note';
import ButtonSection from './ButtonSection';

const InquiryForm = () => {
  const fileInputRef= useRef(null)
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
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
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
      <IssueTypeSelector issueType={issueType} handleIssueTypeChange={handleIssueTypeChange}/>
      <DepartmentSelector department={department} handleDepartmentChange={handleDepartmentChange}/>
      <CompanySelector selectedCompanies={selectedCompanies ||[]} handleCompanyChange={handleCompanyChange}/>
      <RecipientSelector selectedRecipient={selectedRecipient} handleRecipientClick={handleRecipientClick}/>
      <Issue issueInput={issueInput} handleIssueInputChange={handleIssueInputChange}/>
      <ChoicesList choices={choices} selectedChoice={selectedChoice} handleChoiceClick={handleChoiceClick} handleChoiceAdd={handleChoiceAdd}/>
      <Note note={note} handleNoteChange={handleNoteChange}/>
      <SupportingDocumentSection fileInputRef={fileInputRef} handleSupportingDocChange={handleSupportingDocChange}/>
      <DeadLineDateComponent deadline={deadline} handleDeadlineChange={handleDeadlineChange}/>
      <ButtonSection handleSubmit={handleSubmit} handleSave={handleSave} handleDelete={handleDelete}/>
    </div>
  );
};

export default InquiryForm;
