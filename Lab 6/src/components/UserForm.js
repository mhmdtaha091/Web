import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');

  const handleInputChange = event => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      <p>Your name: {name}</p>
    </div>
  );
}

export default UserForm;
