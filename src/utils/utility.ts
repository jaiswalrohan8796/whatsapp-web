export const createUserParams = (user_data: any) => {
  return {
    email: user_data.email,
    full_name: user_data.full_name,
    picture: user_data.picture,
  };
};
