import classes from './HomeView.module.css';

const HomeView = () => (
  <div className={classes.container}>
    <h1 className={classes.title}>
      Welcome!{' '}
      <span role="img" aria-label="Welcome icon">
        👋
      </span>
    </h1>
  </div>
);

export default HomeView;
