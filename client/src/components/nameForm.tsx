// client/src/components/NameForm.tsx

import React, { useState } from 'react';
import { addName } from '../services/services';
import { getName } from '../services/services';
import '../App.css';


const NameForm: React.FC = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      if (avatar) {
        formData.append('avatar', avatar);
      }

      await addName(formData);

      const updatedNames = await getName();

      console.log('Updated names:', updatedNames);

      setName('');
      setAvatar(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form className="margin_style" onSubmit={handleSubmit}>
      <h2 className="title_style">Create form</h2>
      <div className='container'>
        <label className="label_style">
          Name:
          <input
            className="input_style"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="label_style">
          Avatar:
          <input
            className="input_style_button"
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files?.[0] || null)}
          />
        </label>
        <br />
        <button className='button_style' type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NameForm;
