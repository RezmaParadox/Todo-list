import {ReactComponent as CheckSGV} from './check.svg';
import {ReactComponent as DeleteSGV} from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
    'check': (color) => <CheckSGV 
    className='Icon-svg' fill={color}/>,
    'delete': (color) => <DeleteSGV 
    className='Icon-svg' fill={color}/>
}

function TodoIcon({type,color,onClick}) {
    return(
        <span className={`Icon-container 
            Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )    
}

export {TodoIcon};