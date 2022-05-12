import classes from './Highest.module.css'


function Highest(props) {
  const list = props.list;
  const ordered = list.sort(function(a,b){return b.fervorChange-a.fervorChange});
  const highest = ordered.slice(0,3);
  const Lowest = ordered.slice(-3);
  
  return (
    
    <div>

        <h2 className={classes.description} > Today's Cryptocurrency by general enthusiasm</h2>
      <div className={classes.boxes}>
        <h2 className={classes.box}>Highest sentiment</h2>
         <div>
           <tr>
             <th>Name</th>
             <th>Fervor</th>
           </tr>
           {highest.map((high) =>
           <tr>
             <td>{high.name}</td>
             <td>{high.fervorChange}</td>
           </tr>)}
         </div>
        <h2 className={classes.box}>Lowest sentiment</h2>
        <div>
           <tr>
             <th>Name</th>
             <th>Fervor</th>
           </tr>
           {Lowest.map((low) =>
           <tr>
             <td>{low.name}</td>
             <td>{low.fervorChange}</td>
           </tr>)}
         </div>
      </div>
     
    </div>
  );
}

export default Highest;
