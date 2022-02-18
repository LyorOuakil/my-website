import React from 'react'
import Button from './Button'

function Navigation() {
    return (
        <div className="pt-20 pb-20 bg-white mt-5 mb-5 flex justify-center">
            <Button className="mr-2" onClick={() => {}} text="What I did" />
            <Button className="mr-2" onClick={() => {}} text="What I do" />
            <Button className="mr-2" onClick={() => {}} text="What I learn" />
            <Button className="mr-2" onClick={() => {}} text="Personal blog" />
        </div>
    )
}

export default Navigation
