import React from 'react'

interface LinkProps {
    href: string
    text: string
}
function Link({ href, text }: LinkProps) {
    return (
        <div data-testid="link_component">
            <a href={href}>{text}</a>
        </div>
    )
}

export default Link
