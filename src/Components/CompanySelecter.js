import { companies} from './constant';

const CompanySelector=({selectedCompanies, handleCompanyChange})=>{
    return(
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
    )
}
export default CompanySelector;