// client/src/components/ApiCaller.tsx

import React, { useState, useEffect } from 'react';
import { getName } from '../services/services';
import '../App.css';

const ApiCaller: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response = await getName();
      setNames(response.map((nameData) => nameData.name));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 
  useEffect(() => {
    fetchData();
  }, [names]);

  return (
    <div className='margin_style'>
      <h1 className='title_style'>All Names:</h1>
      <ul className='list_names'>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCaller;
