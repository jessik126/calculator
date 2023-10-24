import React from "react";  
import './Button.css'

export default props =>
    <button 
        onClick={e => props.click && props.click(props.label)}
        className={`button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}    
            `}
    >
        {props.label}
    </button>


// //another option:
// export default props => {
//     let classtype = 'button';
//     classtype += props.operation ? 'operation' : '';
//     classtype += props.double ? 'double' : '';
//     classtype += props.triple ? 'triple' : '';

//     return (
//         <button className={classtype}>
//             {props.label}
//         </button>
//     )
// }