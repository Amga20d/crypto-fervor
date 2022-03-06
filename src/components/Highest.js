import classes from './Highest.module.css'


function Highest() {
  return (
    <div>

        <h2 className={classes.description} > Today's Cryptocurrency by general enthusiasm</h2>
      <div className={classes.boxes}>
        <h2 className={classes.box}>Highest sentiment</h2>
        <h2 className={classes.box}>Lowest sentiment</h2>
      </div>
    </div>
  );
}

export default Highest;
