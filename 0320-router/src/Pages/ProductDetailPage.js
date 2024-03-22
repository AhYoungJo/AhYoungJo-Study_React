import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../Components/ProductList';

const ProductDetailPage = () => {
    // useParams함수를 변수에 선언
    const {productId} = useParams(); 
    console.log(useParams()) // localhost:3000/products/2 = {productId :  '2'}
    console.log('productId', productId) // productId 2

    const targetproduct = productInfos[Number(productId) -1]; // 2번째 인덱스 값이 들어감, 타입스크립트로 넘어가면 명확하게 타입을 적어줘야 함
    const { id, name, email, body} = targetproduct;

    // useNavigate도 변수를 만들어서 사용
    const navigate = useNavigate();

    return (
        <div>
            <h1>ProductDetailPage</h1>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <button onClick={() => navigate('/')}>홈으로 이동</button>
            <ul>
                <li>상품 번호: {id}</li>
                <li>상품명: {name}</li>
                <li>상품 번호: {email}</li>
                <li>상품 내용: {body}</li>
            </ul>
        </div>
    );
};

export default ProductDetailPage;