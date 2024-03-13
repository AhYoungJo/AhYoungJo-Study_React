const Button = ({link, childern, buttonName}) => {
    return(
        <a href={link}>
            <button>{childern}<span>{buttonName}</span></button>
        </a>
    )
}

export default Button