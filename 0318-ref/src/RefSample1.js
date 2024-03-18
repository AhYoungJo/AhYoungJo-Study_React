import React, {Component, createRef} from 'react';

class RefSample1 extends Component{
    refB = React.createRef();
    render(){ 
        const focusHandler = () => {
            this.refA.focus();
        }

        return(
            <div className='RefSample1'>
                <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 foucs 처리</p>
                <input ref={(ref) => {this.refA = ref}} />
                <button type='button' onClick={focusHandler}>포커스</button>
            </div>
        )
    }
}

export default RefSample1;