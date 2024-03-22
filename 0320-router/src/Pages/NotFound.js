import React from 'react';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <Link to='/'> 홈으로 돌아가기</Link>
        </div>
    );
};

export default NotFound;