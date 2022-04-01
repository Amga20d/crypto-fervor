import classes from './NavBar.module.css'



function NavBar ()  {
    return(
        <div className= {classes.layout}>
       <h1 className= {classes.icon}>Crypto Fervor</h1>
       <ul className={classes.list}>
           <li>Fervor?</li>
           <li>Watchlist</li>
           <li>About us</li>
       </ul>

        </div>
    ) ;

};


export default NavBar;