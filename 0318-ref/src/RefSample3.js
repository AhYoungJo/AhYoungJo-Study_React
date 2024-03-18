import {Component, createRef} from 'react';

export default class RefSample3 extends Component {

    myInputA = createRef();
    myInputB = createRef();

    handleKeyDown = () => {
        if(this.myInputA.current.value.trim().length === 0) {
            this.myInputA.current.focus();
            return;
        }
        if(this.myInputB.current.value.trim().length === 0) {
            this.myInputB.current.focus();
            return;
        }

        alert(`${this.myInputA.current.value} : ${this.myInputB.current.value}`)
    }
    
    render(){

        return(
            <div>
                <label>작성자</label><input ref={this.myInputA} placeholder='이름'></input>
                <label>제목</label><input ref={this.myInputB} placeholder='이메일'></input>
                <button type='button' onClick={this.handleKeyDown} >제출</button>
            </div>
        )
    }
}