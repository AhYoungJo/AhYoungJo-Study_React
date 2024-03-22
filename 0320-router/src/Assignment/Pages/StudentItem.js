import React from 'react';
import { Link } from 'react-router-dom';

const StudentItem = ({ info }) => {
    return (
        <div className='Search'>
            <Link to={`/student/new?name=${info.name}`}>
                <ul key={info.id}>
                    <li>{info.name}</li>
                </ul>
            </Link>
        </div>
    );
};

export default StudentItem;