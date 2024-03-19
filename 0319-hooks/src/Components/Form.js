import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {

    //1. 리액트 훅 폼에서 register 가져오기
    //4. formState가 가지고 있는 errors 객체 가져오기
    //6. handleSubmit 가져오기
    const { register, formState: { errors }, handleSubmit, watch } = useForm();

    // 유효할 때 처리되는 함수
    const onValid = (data) => {
        // data : 폼 데이터
        console.log('onValid', data)
    }

    // 유효하지 않을 때를 처리하는 함수
    const onInValid = (error) => {
        console.log('onValid', error)
    }

    console.log('errors', errors)
    console.log('watch', watch('username'))
    return (
        <div>
            <h1>React-Hook-Form 라이브러리 데모</h1>

            {/* 2. 폼 구조 만들기 */}
            {/** 7. handleSubmit 입력
             * handleSubmit(funcA[, funcB]) : 두개의 함수를 받음
             * - funcA: 필수, 유효할 때 실행
             * - funcB: 선택, 유효하지 않을 때 실행
            */}
            <form onSubmit={handleSubmit(onValid, onInValid)}>
            
                <input type='text' placeholder='username' 
                /** 3. register 처리하기 
                * register는 구조 분해해서 가져와야 한다.
                * 서버에서 태그를 구분하는 기준으로 username했던 것을 register로 명시해주는 것
                * 즉, register('username') = 이 input태그의 이름이 uername이다.
                */
                {...register('username', {
                    // 입력하지 않았을 때 뜨는 값
                    required: '이름을 입력해주세요.',
                    minLength: {
                        //최소값을 지키지 않았을 때 뜨는 안내 문구
                        message: '이름은 최소 2글자 이상 작성해주세요.',
                        //최소값
                        value: 2,
                    },
                })}
                />

                {/* 5. username의 input태그에서 에러 발생했을 때 메시지 지정
                    - 여기서 설정한 에러 처리 내용은 유저네임이 없으면 메시지 출력한다.임
                */}
                {errors.username?.message}

                <br />
                <input type="email" placeholder='email (gmail)' 
                {...register('email', {
                        required: '이메일을 입력해주세요.',
                        //8. validate를 사용하면 register 커스텀할 수도 있다.
                        validate: {
                            //input'email' 에서 입력한 값(=value)을 콜백함수로 받아 처리
                            useGmail: (value) => {
                                return(
                                    value.includes('gmail.com') || 'gamil로만 가입 가능합니다.'
                            );
                        },
                    },
                })}
                />
                
                {errors.email?.message}

                <br />
                <input type="password" placeholder='password'{...register('password')} />
                <br />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default Form;