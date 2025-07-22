export const authHeaderWithToken = () => {
  let token = sessionStorage.getItem('jwt_token');
  if (token) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  } else {
    return {};
  }
};

export const authHeaderWithOutToken = () => {
  return { 'Content-Type': 'application/json' };
};
