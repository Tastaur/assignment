import { REQUEST_URL } from '../../globalConstants';


export const questionnairesListLoader = async ()=> {
  return fetch(REQUEST_URL);
};