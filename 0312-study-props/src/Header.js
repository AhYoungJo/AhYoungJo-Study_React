// import Reat, {Component} from 'react';
import React from 'react';
import propTypes from 'prop-types';
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

Header.defaultProps = {
    text1: "로그인",
    text2: "회원가입"
}

Header.propTypes = {
    text1: propTypes.string.isRequired,
    text2: propTypes.string.isRequired,
}