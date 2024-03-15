// import {Component} from 'react';
import {useState} from 'react';

// class ClassBind extends Component {
//     state = {
//         name: "코딩",
//         age: 19,
//     }
    
//     //클래스 컴포넌트에서 이벤트 쓸 때 : 화살표 함수 사용
//     printConsole = (name) => {
//             console.log(name)
        
//         }
    
//     /**
//      * printConsole3() {)
//      * => this.printConsole3 = this.printConsole3.bind(this);
//      * - bind()는 해당 함수에서 가르킬 this를 직접 설정
//      */
    
//         render(){
        
//         return(
//             <div>
//                 <h1>Class Component Event</h1>
//                 <button onMouseDown={() => this.printConsole("아영")}>Print Console(인자X)</button>
//             </div>
//         )
//     }
// }

const ClassBind = () => {
    const [name, setName] = useState("아영")
    const printConsole = (n) => {
        setName("아영이")
        console.log(n)
    
    }

    return(
        <div>
                <h1>Class Component Event</h1>
                <button onMouseDown={() => printConsole(name)}>Print Console(인자X)</button>
            </div>
    )
}

export default ClassBind;