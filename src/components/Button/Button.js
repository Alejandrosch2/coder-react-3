import './Button.css'

const Button = ({ backgroundColor = '#8C30F5', colorText='white', handleClick, children, ...rest}) => {

    return (
        <button className="myButton" style={{ backgroundColor, color: colorText }} onClick={handleClick}>{children}</button>
    )
}

export default Button