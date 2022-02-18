import React, { MouseEvent } from 'react'

interface ButtonProps {
    onClick: () => void
    text: string
    className?: string
}

const buttonClass =
    'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
function Button({ onClick, text, className }: ButtonProps) {
    return (
        <div className={`${buttonClass} ${className ? className : ''} `}>
            <button onClick={onClick} data-testid="button_component">
                {text}
            </button>
        </div>
    )
}

export default Button
