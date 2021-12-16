import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import classes from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  const logOutHandler = () => dispatch(authOperations.logOut());

  return (
    <div className={classes.container}>
      <img src={avatar} alt="" width="32" className={classes.avatar} />
      <span className={classes.name}>Welcome, {name}</span>
      <button type="button" onClick={logOutHandler}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
