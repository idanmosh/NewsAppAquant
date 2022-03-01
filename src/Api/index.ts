import axios from 'axios';
import {config} from '../Config';
import {CATEGORIES} from '../Constants';
import {urlBuilder} from '../Utils';

const api = axios.create({
  baseURL: config.BASE_URL,
});

export const fetchCategories = async () => {
  try {
    let requests: Array<Promise<void>> = [];

    CATEGORIES.map(category => {
      requests.push(api.get(urlBuilder(`country=us&category=${category}`)));
    });

    let response: Array<any> = await Promise.all(requests);

    response.forEach((categories, index) => {
      response[index] = {
        category: CATEGORIES[index],
        data: categories?.data?.articles,
      };
    });

    return response;
  } catch (error) {
    return [];
  }
};
