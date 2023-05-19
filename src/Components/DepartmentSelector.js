import { departments } from './constant';
const DepartmentSelector=({department,handleDepartmentChange})=>{
    return(
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
    )
}
export default DepartmentSelector;