import React, { useState } from 'react';
import { updateName } from '../services/services';
import { getName } from '../services/services';


const UpdateNameForm: React.FC  = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleUpdateName = async () => {
    try {
      await updateName(id, name, avatar || undefined);

      const updatedNames = await getName();

      console.log('Updated names:', updatedNames);
    } catch (error) {
      console.error('Error updating name:', error);
    }
  };

  return (
    <div>
      <h2>Update Name</h2>
      <div>
        <label htmlFor="updateId">ID:</label>
        <input
          type="text"
          id="updateId"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="updateName">Name:</label>
        <input
          type="text"
          id="updateName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="updateAvatar">Avatar:</label>
        <input
          type="file"
          id="updateAvatar"
          onChange={(e) => setAvatar(e.target.files?.[0] || null)}
        />
      </div>
      <button onClick={handleUpdateName}>Update Name</button>
    </div>
  );
};

export default UpdateNameForm;
