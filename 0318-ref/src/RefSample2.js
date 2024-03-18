import React, {Component, createRef} from 'react';

class RefSample2 extends Component{
    refSample2 = createRef();
    //class에서는 함수를 이렇게 작성할 수도. 다만, 이 방식을 활용한다면 this써서 불어와야함
    focusHandler2 = () => {
        this.refSample2.current.focus();
        console.log(this.refSample2.current);
    }
    
    render(){ 

        return(
            <div className='RefSample1'>
                
                <p>(클래형 컴포넌트)createRef 써서 ref 만들어보기</p>
                <input type='text' ref={this.refSample2}></input>
                <button onClick={this.focusHandler2}>포커스2</button>
                
            </div>
        )
    }
}

export default RefSample2;