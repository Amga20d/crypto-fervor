import CryptoItem from './CryptoItem';


import classes from './CryptoList.module.css';


function CryptoList (props) {

    return (
        <div>
        
        <CryptoItem list ={props.list} />
        </div>
    );
}

export default CryptoList;