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
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setPostList(res.data);
            } catch(error) {
                console.log(error);
            }
        }

        setTimeout(() => {
            getPosts();
        }, 2000);
    }, []);

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleKeywordChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleSearch = () => {
        const newPosts = postList.filter((post) => {
            if (category === 'title' && keyword.trim() !== '') {
                return post.title.includes(keyword);
            } else if (category === 'body' && keyword.trim() !== '') {
                return post.body.includes(keyword);
            }
            return false;
        });
        setPostList(newPosts);
    }

    return (
        <div className="GetPosts">
            <select onChange={handleCategoryChange}>
                {options.map((option) => (
                    <option key={option.key} value={option.value}>{option.name}</option>
                ))}
            </select>
            <input type="text" onChange={handleKeywordChange}/>
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