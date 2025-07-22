import Axios from 'axios';

export const get = (url, headers = {}) => {
  return Axios.get(url, { headers: headers }).then(
    (resp) => {
      return resp;
    },
    (err) => {
      console.error('Error from GET call of ', url);
    }
  );
};

export const post = (url, data, headers = {}) => {
  return Axios.post(url, data, { headers: headers }).then(
    (resp) => {
      return resp;
    },
    (err) => {
      console.error('Error from POST call of ', url);
      return err;
    }
  );
};
export const baseUrl = 'http://ec2-13-234-116-225.ap-south-1.compute.amazonaws.com:2000/';
