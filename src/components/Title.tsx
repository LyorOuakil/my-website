import React from 'react'

interface TitleProps {
    title: string
}
function Title({ title }: TitleProps) {
    return <p className="text-6xl">Fullstack Javascript Developer</p>
}

export default Title
