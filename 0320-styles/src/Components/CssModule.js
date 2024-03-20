import React from 'react';
import styles from '../Styles/CssModule.module.css'


// Css Moudle
// - 클라스명 중복 방지
// - css 파일 확장자: .module.css
// - 리액트 컴포넌트 파일에서 해당 css파일을 불러올 때 css 파일에 선언한 클래스 이름들이 고유한 값을 가짐
// - 고유 css 클래스 이름이 만들어지는 과정에서 파일 경로. 파일 이름
const CssModule = () => {
    console.log(styles)
    return (
        <div className={styles.container}>
            <div className={[styles.box, styles.red].join(' ')}></div>
            <div className={[styles.box, styles.orange].join(' ')}></div>
            <div className={`${styles.box} ${styles.yellowgreen}`}></div>
        </div>
    );
};

export default CssModule;