import React, { useState } from 'react'

const DropDownName = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
  return (
    <div>
    <label htmlFor='dropdown'>Select an Option -</label>
    <select id="dropdown"  value={selectedOption} onChange={handleOptionChange}>
        <option value="">-- Select --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}
export default DropDownName;

