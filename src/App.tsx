import React from 'react'
import logo from './logo.svg'
import './App.css'
import Sidebar from './components/SIdebar'
import Button from './components/Button'
import Name from './components/Name'
import Title from './components/Title'
import Navigation from './components/Navigation'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="pt-5">
                    <Name name="Lyor Ouakil" />
                    <Title title="Fullstack Javascript Developer" />
                </div>
                <Navigation />
                <p className="text-lg">Web application, SAAS platform, Web scrapping</p>
                <div>
                    <div className="text-left w-1/4">
                        <p className="items-center content-start">
                            Hello my name is Lyor Ouakil I work in web development for 3 years now
                        </p>
                        <p>Download my CV here</p>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default App
