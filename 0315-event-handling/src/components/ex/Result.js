export default function Result ({data}) {
    const styles = {
        color: data.color,
        backgroundColor: data.backgroundColor,
    }
    return(
        <div className="Result">
            <h1 style={styles}>{data.comment}</h1>
            <img style={{width: 300}} src={`./img/${data.fruit}.png`} />
        </div>
    )
}