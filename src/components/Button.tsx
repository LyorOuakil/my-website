import React, { MouseEvent } from 'react'

interface ButtonProps {
    onClick: () => void
    text: string
}

function Button({ onClick, text }: ButtonProps) {
    return (
        <div>
            <button onClick={onClick} data-testid="button_component">
                {text}
            </button>
        </div>
    )
}

export default Button
