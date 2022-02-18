import React, { useState } from 'react'

function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-black items-center cursor-pointer fixed left-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
                    fill="black"
                    viewBox="0 0 100 80"
                    width="40"
                    height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}
            <div
                className={`top-0 left-0 bg-white p-10 pl-20 text-black flex fixed h-full xs:w-full sm:w-full ease-in-out duration-300 ${
                    showSidebar ? 'translate-y-0' : 'translate-y-full'
                }`}
            >
                <div className="justify-center">
                    <ul>
                        <li>What I did</li>
                        <li>What I do</li>
                        <li>What I learn</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
