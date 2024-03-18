import { useEffect, useState } from "react";
import axios from "axios";

export default function GetPosts() {
    const [postList, setPostList] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('title');


    const options = [
        {
            key: 'option1',
            value: 'title',
            name: '제목',
        },
        {
            key: 'option2',
            value: 'body',
            name: '내용',
        }
    ];

    useEffect(() => {
        async function getPosts() {
            try {
                const res = await axios ({
                        method: 'get',
                        url: 'https://jsonplaceholder.typicode.com/posts'
                }) 
                setPostList(res.data);
            } catch(error) {
                console.log(error);
            }
        }

        setTimeout(() => {
            getPosts();
        }, 2000);
    }, []);

    const getKeyword = (e) => {
        setKeyword(e.target.value);
    }

    const getCategory = (e) => {
        setCategory(e.target.value);
    }
    
    const handleSearch = () => {
        //단점 : 검색을 하면 피터링된 배열이 기존 데이터에 덧씌워져서 페이지를 새로고침해야 전체 리스트를 다시 볼 수 있음
        let newPosts = postList;
        
        if(keywordtrim() === ''){
            setPostList(postList)
        }

        if(keyword.trim() !== '') {
            newPosts = postList.filter((post) => {
                if (category === 'title' && keyword.trim() !== '') {
                    return post.title.includes(keyword);
                } else if (category=== 'body' && keyword.trim() !== '') {
                    return post.body.includes(keyword);
                } else return false;
            });
        }
        setPostList(newPosts);
    }

    return (
        <div className="GetPosts">
            <select onChange={getCategory}>
                {options.map((option) => (
                    <option key={option.key} value={option.value}>{option.name}</option>
                ))}
            </select>
            {/*값을 받아온다.. 받아온 값을 useEffect에 보낸다...*/}
            <input type="text" onChange={getKeyword}/>
            <button type='button' onClick={handleSearch}>검색</button>
            {postList.length === 0 ? (
                <h1>Loading</h1>
            ) : (
                postList.map((list) => (
                    <ul key={list.id}>
                        <span>제목</span><li>{list.title}</li>
                        <span>본문</span><li>{list.body}</li>
                    </ul>
                ))
            )}
        </div>
    );
}