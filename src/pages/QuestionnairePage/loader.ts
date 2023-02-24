import { LoaderFunctionArgs } from '@remix-run/router/dist/utils';

import { REQUEST_URL } from '../../globalConstants';


export const questionnairePageLoader = async ({ params }:LoaderFunctionArgs) =>{
  return fetch(`${REQUEST_URL}/${params.id}`);
};