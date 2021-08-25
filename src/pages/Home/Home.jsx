import React from 'react'
import Contact from '../../components/Contact/Contact'
import Enterprise from '../../components/Enterprise/Enterprise'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Regulation from '../../components/Regulation/Regulation'

function Home(props) {
    return (
        <div className="container">
            <div className="content">
            <Header />
            <Regulation />
            <Enterprise />
            <Contact />
            <Footer />
            </div>
        </div>
    )
}

export default Home;