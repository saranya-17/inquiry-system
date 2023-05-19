const ChoicesList=({choices, selectedChoice, handleChoiceClick, handleChoiceAdd})=>{
    return(
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
    )
}
export default ChoicesList;