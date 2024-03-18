import {useState} from 'react';

export default function SearchInput ({setInputName, setInputTitle}) {

    const options = [
        {name: "작성자", value: "name", key: "name"},
        {name: "제목", value: "title", key: "name"},
    ]

    return(
        <div className="SearchInput">
            <labe>검색</labe>
            <select>
                {options.map((option) => {
                    <option value={option.value} key={option.key}>{option.name}</option>
                })}
            </select>

           작성자: <input type="text" placeholder="검색" onChange={(e) => 
                    {   const input = e.target.value;
                        if (input.trim().length === 0) return;
                        setInputName(input);
                    }
           }></input>
           제목: <input type="email" placeholder="제목" onChange={(e) => 
                    {   const input = e.target.value;
                        if (input.trim().length === 0) return;
                        setInputTitle(input);
                    }
           }></input>

        </div>
    )
}