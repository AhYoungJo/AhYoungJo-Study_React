import React, {Component} from 'react'

export default class LifeCycleClassChil extends Component {
    //Mount
    componentDidMount(){
        console.log('컴포넌트 마운트')
    }
    
    componentDidUpdate(){
        console.log('컴포넌트 업데이트')
    }

    //UnMount
    componentWillUnmount(){
        console.log('컴포넌트 실행 X')
    }


    render(){
        return(
            <div>현재 Number 값은 {this.props.number}입니다.</div>
        )
    }
}