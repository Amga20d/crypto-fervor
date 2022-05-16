import classes from './Highest.module.css'


function Highest(props) {
  const list = props.list;
  const ordered = [...list].sort(function(a,b){return b.fervorChange-a.fervorChange});
  const highest = ordered.slice(0,3);
  const Lowest = ordered.slice(-3).sort(function(a,b){return a.fervorChange-b.fervorChange});
  
  return (
    
    <div>

        <h2 className={classes.description} > Today's Cryptocurrency by General Enthusiasm</h2>
      <div className={classes.boxes}>
        
         <div className={classes.box}>
         <h2 className={classes.title} >Highest Sentiment Today</h2>
         <div className={classes.table}>
           <tr >
             <th>Name</th>
             <th>Fervor</th>
           </tr>
           {highest.map((high) =>
           <tr>
             <td className={classes.name}>{high.name}</td>
             <td>{high.fervorChange} %</td>
           </tr>)}
           </div>
         </div>
        
        <div className={classes.box}>
        <h2 className={classes.title} >Lowest Sentiment Today</h2>
        <div className={classes.table}>
           <tr>
             <th>Name</th>
             <th>Fervor</th>
           </tr>
           {Lowest.map((low) =>
           <tr>
             <td className={classes.name}>{low.name}</td>
             <td>{low.fervorChange} %</td>
           </tr>)}
           </div>
         </div>
      </div>
     
    </div>
  );
}

export default Highest;
