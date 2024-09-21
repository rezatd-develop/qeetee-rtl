import axios from 'axios';

import { routes } from '../routes/routes';
import axiosInstance from './AxiosInstance';

export function GetRequest(route, parameters, result, resolve) {
  axiosInstance.get(`${routes.baseRoute.development}${route}`, { params: parameters })
    .then(function (response) {
      result(response);
    })
    .catch(function (error) {
      resolve(error);
    })
}