
import React, { useState, useEffect } from 'react';
import { getName } from '../services/services';

const ApiCaller: React.FC = () => {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getName();
        setNames(response.map((nameData) => nameData.name));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Names:</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCaller;
