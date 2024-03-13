// import Reat, {Component} from 'react';
import PropsTypes from 'prop-types';
import './Header.css'
import logo from './logo.svg'

// export default function Header(text1, text2){
//     return(
//         <header>
//             <img src={logo}></img>
//             <div>
//                 <span>{text1}</span>
//                 <span>{text2}</span>
//             </div>
//         </header>
//     )
// }
export default function Header({text1, text2}){
    // const {text1, text2} = props;
    return(
        <header>
            <img src={logo}></img>
            <div>
                <span>{text1}</span>
                <span>{text2}</span>
            </div>
        </header>
    )
}

Header.props = {
    text1: PropsTypes.string,
    text2: PropsTypes.string
}