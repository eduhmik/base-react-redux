import React from 'react'

const Button = (props) => {
    const {handleClick, title} = props
    return (
        <button onClick={handleClick}>{title }</button>
    )
}

export default Button;