import React from 'react'

interface NameProps {
    name: string
}
function Name({ name }: NameProps) {
    return (
        <div data-testid="name_component">
            <h1 className="white text-4xl pt-28">{name}</h1>
        </div>
    )
}

export default Name
