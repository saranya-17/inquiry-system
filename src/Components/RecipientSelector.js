import {recipients } from './constant';

const RecipientSelector=({selectedRecipient,handleRecipientClick })=>{
    return(
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
    )
}
export default RecipientSelector;