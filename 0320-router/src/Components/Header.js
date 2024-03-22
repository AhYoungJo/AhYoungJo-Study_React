import React from 'react';
import { Link } from 'react-router-dom';


//LINK : 새로고침 없이 경로/컴포넌트를 바꿔주는 기능


const Header = () => {
    return (
        <header>
            <ul>
                <li><Link to='/'>ReactRouter 실습</Link></li>
                <li><Link to='/student/xdt'>학생KDT</Link></li>
                <li><Link to='/student/codingon'>코딩온</Link></li>
            </ul>
        </header>
    );
};

export default Header;