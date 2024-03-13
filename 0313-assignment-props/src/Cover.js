const Cover = ({title, author, price, type, children, valid}) => {
    return (
        <>
        {children}
        <div className="innerBox">
            <h1 onClick={valid}>{title}</h1>
            <span>저자: {author}</span>
            <span>가격: {price}</span>
            <span>장르: {type}</span>
        </div>
        </>
        
    )
}

export default Cover;