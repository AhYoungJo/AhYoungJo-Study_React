import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { studentInfos } from './Students';

const SearchStudent = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');

    const navigate = useNavigate();

    console.log(name)

    const getInfo = studentInfos.filter((el) => el.name === name);

    return (
        <div>
            <h1>학생 정보</h1>
            <ul>
                <li>학생명: {getInfo[0].name}</li>
                <li>이메일: {getInfo[0].email}</li>
            </ul>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    );
};

export default SearchStudent;