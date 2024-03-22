import React from 'react';
import StudentItem from './StudentItem';

export const studentInfos = [
    {
      id: 1,
      name: '김ㅇㅇ',
      email: 'Eliseo@gardner.biz',
    },
    {
      id: 2,
      name: '이ㅇㅇ',
      email: 'Jayne_Kuhic@sydney.com',
    },
    {
      id: 3,
      name: '나ㅇㅇ',
      email: 'Nikita@garfield.biz',
    },
    {
      id: 4,
      name: '박ㅇㅇ',
      email: 'Lew@alysha.tv',
    },
    {
      id: 5,
      name: '하ㅇㅇ',
      email: 'Hayden@althea.biz',
    },
    {
      id: 6,
      name: '수ㅇㅇ',
      email: 'Presley.Mueller@myrl.com',
    },
    {
      id: 7,
      name: '민ㅇㅇ',
      email: 'Dallas@ole.me',
    },
    {
      id: 8,
      name: '정ㅇㅇ',
      email: 'Mallory_Kunze@marie.org',
    },
    {
      id: 9,
      name: '금ㅇㅇ',
      email: 'Meghan_Littel@rene.us',
    },
    {
      id: 10,
      name: '추ㅇㅇ',
      email: 'Carmen_Keeling@caroline.name',
    },
  ];

const Students = () => {
    return (
        <div className='Students'>
            <h1>학생KDT 목록</h1>
            {studentInfos.map((s) => {
                return <StudentItem key={s.id} info={s} />
            })}
        </div>
    );
};

export default Students;