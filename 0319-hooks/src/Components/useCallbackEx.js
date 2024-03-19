import {useState, useEffect, useCallback} from 'react';
import axios from "axios";

// useCallback
// 매번 함수를 생성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수 재사용
export default function useCallbackEx ({postId}) {
    const [post, setPost] = useState([]);

    // async function getPosts() {
    //     try {
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts/9');
    //         setPost(res.data);
    //     } catch(error) {
    //         console.log(error);
    //     }
    // }

    //postId가 바뀔 때만 다시 가져온다
    // useCallback 훅으로 메모이제이션 -> 의존성 배열에 postId가 변경되지 않는 한
    // getPost다시 호출하지 않음
    const getPosts = useCallback(async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            setPost(res.data);
        }, [postId]);


    // 처음 렌더링 될때 한번 실행되도록
    useEffect(() => {
        getPosts()
    }, [getPosts])
    // useEffect 의존성 배열에 "함수"를 넣는 이유:
    // 컴포넌트가 리렌더링되면 함수 재생성되고 (=이때 주소값이 변경 되면) > getPost 재호출

    return (
        <div>
            <h1>UseCallbackEx</h1>
            {post.id ? post.title : 'Lodaing...'}
        </div>
    )
}