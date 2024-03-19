import React from 'react';
import { useForm } from 'react-hook-form';

const InputInfo = () => {
    
    const {register, formState: {errors}, handleSubmit, watch} = useForm();
    
        const onValid = (data) => {
            console.log('onValid', data)
            console.log(watch(data))
        }
    
        const onInValid = (error) => {
            console.log('onValid', error)
        }

    return (
        <div>
            <form onSubmit={handleSubmit(onValid, onInValid)}>
                <input type="text" placeholder='name' 
                {...register('name', {
                    required: '이름은 필수 항목입니다.'
                })}
                />

                {errors.name?.message}

                <input type="text" placeholder='age'
                {...register('age', {
                    required: '나이를 적어주세요.',
                    validate: {
                        ageRange: (value) => {
                            return(
                                value >= 0 || '0 이상의 숫자만 입력 가능합니다.'
                            )
                        }
                    }
                })}
                />
                {/* <input type="text" placeholder='age'
                {...register('age', {
                    required: '0이상의 숫자만 입력해주세요.',
                    min: {
                        value: 0,
                        message: '0이상이어야 합니다.'
                    }
                })}
                /> */}

                {errors.age?.message}

                <button type="submit">submit</button>

            </form>
        </div>
    );
};

export default InputInfo;