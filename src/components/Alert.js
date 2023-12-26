import PropTypes from 'prop-types'

export default function Alert(props) {
    const capitalize = (word) => {
        let w = word.toLowerCase();
        return (w.charAt(0).toUpperCase() + w.slice(1,w.length));
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    );
}

Alert.prototype = {
    alertMsg: PropTypes.object
}

Alert.defaultProps = {
    alertMsg: "Alert messege goes here"
}