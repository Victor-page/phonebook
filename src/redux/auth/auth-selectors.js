const getIsLoggedIn = (state) => {
  return state.auth.isLoggedIn;
};

const getUserName = (state) => {
  return state.auth.user.name;
};

const getToken = (state) => {
  return state.auth.token;
};

const getIsBeingReloggedIn = (state) => state.auth.isBeingReloggedIn;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getToken,
  getIsBeingReloggedIn,
};

export default authSelectors;
