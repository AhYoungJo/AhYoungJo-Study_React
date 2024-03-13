import PropsTypes from 'prop-types';
import './Wrapper.css'

export default function Wrapper({children}){
    return(
        <div className='Wrapper'>
            {children}
        </div>
    )
}