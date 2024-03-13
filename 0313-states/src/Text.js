import PropsTypes from 'prop-types';
import React, {Component} from 'react';

class TextFunction extends Component {
    render(){
        const {text, valid} = this.props;
        return(
            <>
            <h1>{text}</h1>
            <button onClick={valid}>버튼</button>
            </>
        )
    }
}

export default TextFunction;

TextFunction.PropsTypes = {
    text: PropsTypes.string.isRequired
}

TextFunction.defaultProps = {
    text: "이건 기본 text props입니다.",
}