import PropsTypes from 'prop-types';

const Food = ({foodName}) => {
    const styles = {
        color: "red",
    }
    return(
        <span style={styles}>{foodName}</span>
    )
}

Food.defaultProps = {
    foodName: "간장게장"
}

export default Food;