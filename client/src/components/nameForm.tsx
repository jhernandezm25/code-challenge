// client/src/components/NameForm.tsx

import React, { useState } from 'react';
import { addName } from '../services/services';
import { getName } from '../services/services';

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

      // Luego de agregar un nombre, obtener la lista actualizada
      const updatedNames = await getName();
      // Aquí puedes realizar acciones con la lista actualizada

      console.log('Updated names:', updatedNames);

      // Puedes limpiar los campos del formulario o realizar otras acciones después de la operación
      setName('');
      setAvatar(null);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Avatar:
        <input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files?.[0] || null)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameForm;
