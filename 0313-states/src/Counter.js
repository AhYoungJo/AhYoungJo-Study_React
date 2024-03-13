import React, {Component} from 'react'

class Counter extends Component {
    //state 사용
    state={
        number: 0,
        name: "미미",
    }
    render(){
        //state는 this로 접근 
        // console.log(this.state)
        const{number} = this.state;
        return(
            <div>
                <h1>{number}</h1>
                <button onClick={()=> {
                    //setState : state값을 바꾸는 함수
                    //state는 직접 변경할 수 없다.
                    //state안에 키가 여러개 있을 수 있기 때문에 명시적으로 키:값을 입력해줘서 변경해줘야 함
                    this.setState({number: number+1})
                }
                }>+1</button>
            </div>
        )
    }
}

export default Counter;