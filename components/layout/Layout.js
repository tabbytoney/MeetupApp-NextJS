import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      {/* uses props.children to take what's between Layout tags and wrap this component around this content */}
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
