const getIsLoggedIn = (state) => {
  return state.auth.isLoggedIn;
};

const getUserName = (state) => {
  return state.auth.user.name;
};

const getToken = (state) => {
  return state.auth.token;
};

const authSelectors = { getIsLoggedIn, getUserName, getToken };

export default authSelectors;
