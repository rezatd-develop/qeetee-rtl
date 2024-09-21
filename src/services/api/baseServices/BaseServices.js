import axios from 'axios';

import { routes } from '../routes/routes';

export function GetRequest(route, parameters, result, resolve) {
  axios.get(`${routes.baseRoute.development}${route}`, { params: parameters })
    .then(function (response) {
      result(response);
    })
    .catch(function (error) {
      resolve(error);
    })
}