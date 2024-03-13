import PropsTypes from 'prop-types';
import './Content.css'

export default function Content ({title, imgURL}){
    return(
        <div className="ContentBox">
            <span>{title}</span>
            <img className="topImg" src={imgURL}></img>
        </div>
    )
}

Content.PropsTypes = {
    title: PropsTypes.string,
}