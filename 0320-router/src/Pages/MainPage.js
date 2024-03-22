import React from 'react';
import { useSearchParams } from 'react-router-dom';

const MainPage = () => {
    // useSearchParams에서 반환된 값으로 배열을 나눠 처리한다?
    const [searchParams, setSearchParams] = useSearchParams();
    // console.log(searchParams.get('mode')); //get()메소드로 mode의 키 값을 가져옴. 초기 값은 없어서 'null'로 나오지만, 버튼을 클릭하면 dark로 나옴
    const darkWhite = ['Main', searchParams.get('mode')].join(' ');
    return (
        //다크 모드
        <div className={darkWhite}>
            <h1>Home</h1>
            <button onClick={() => {
                darkWhite === 'dark' ? setSearchParams({mode: 'white'}) : setSearchParams({mode: 'dark'});
            }}>Dark Mode</button>
        </div>
    );
};

export default MainPage;