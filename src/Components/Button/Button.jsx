import PropTypes from 'prop-types'

const Button = ({ btnType, btnName, onClick , classButton}) => {
    return (<>
            <button type={btnType} onClick={onClick} className={classButton}>{btnName}</button>
        </>
    )
}

Button.defaultProps = {
    btnType: "button",
}

Button.propTypes = {
  btnType: PropTypes.string.isRequired,
  btnName: PropTypes.string.isRequired,
  price: PropTypes.func,
  classButton: PropTypes.string,
};

export default Button