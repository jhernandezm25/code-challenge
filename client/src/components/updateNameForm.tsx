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
    <div className='margin_style container'>
      <h2 className='title_style'>Update Name</h2>
      <div className='container' >
        <label className='label_style' htmlFor="updateId">ID:</label>
        <input className='input_style'
          type="text"
          id="updateId"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div className='container'>
        <label className='label_style' htmlFor="updateName">Name:</label>
        <input className='input_style'
          type="text"
          id="updateName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='container'>
        <label className='label_style' htmlFor="updateAvatar">Avatar:</label>
        <input className='input_style_button'
          type="file"
          id="updateAvatar"
          onChange={(e) => setAvatar(e.target.files?.[0] || null)}
        />
      </div>
      <button className='button_style' onClick={handleUpdateName}>Update Name</button>
    </div>
  );
};

export default UpdateNameForm;
