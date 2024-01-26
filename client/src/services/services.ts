// client/src/services/apiCallerService.ts

import axios from 'axios';

interface ApiResponse {
  code: number;
  data: NameData[];
}

interface NameData {
  id: string;
  name: string;
}

export const getName = async () => {
  // const response = await axios.get<ApiResponse>('/api/getName');
  return  [
        {
            "id": "06967396-5f98-4a07-8ddf-4d5681990576",
            "name": "Jorge Hernandez"
        } ]
};
