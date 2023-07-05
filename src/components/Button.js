import classNames from "classnames"

function Button({ text, variant = 'default' }) {
    return(
    <button className={classNames({
        "flex items-center mt-2 py-1 px-4 bg-gray-500 text-white font-semibold rounded": true,
        "bg-gray-500": variant == 'default',
        "bg-green-500": variant == 'success',
    })}>{text}</button>
    )
}

export default Button