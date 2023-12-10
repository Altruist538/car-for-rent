import axios from 'axios';
axios.defaults.baseURL = 'https://6572101fd61ba6fcc0145108.mockapi.io/';

export const fetchData = async (page, limit) => {
    try {
      const response = await axios.get(`/adverts` ,
      {params:{
        page,
        limit,
      }});
      return response.data;
    } catch (error) {
      console.log(error);
    }}


