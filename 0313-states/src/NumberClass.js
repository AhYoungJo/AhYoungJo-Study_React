import React, {Component} from 'react';

class NumberClass extends Component {
    state = {
        number: 0,
    }
    render(){     
        const {number} = this.state;
        const plusTwo = () => {
            this.setState({number: number+2})
        }
        const minusOne = () => {
            this.setState({number: number-1})
        }
        return(
            <>
            <h1>{number}</h1>
            <button onClick={plusTwo}>2더하기</button>
            <button onClick={minusOne}>1빼기</button>
            </>
        )
    }
}

export default NumberClass