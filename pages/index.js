import React from 'react'
import Header from '../components/Header'
import Head from 'next/head'
import Navbar from '../components/Navbar.js'
import Intro from '../components/Intro.js'
import Customers from '../components/Customers.js'
import Benifits from '../components/Benifits.js'
import Vedio from '../components/Vedio.js'
import Testimonials from '../components/Testimonials.js'
import Faq from '../components/Faq.js'
import Footer from '../components/Footer.js'
import Popup from '../components/Popup.js'
import ThemeSwitch from '../components/ThemeSwitch'
import ThemeToggler from '../components/ThemeToggler.js'


const index = () => {
    return (
        <>
            <Head>
                <title>Nextly</title>
                <meta
                    name="description"
                    content="Just another landing Page"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Intro />
            <Customers />
            <Benifits />
            <Vedio />
            <Testimonials />
            <Faq />
            <Footer />
            <Popup />
            <ThemeToggler />
        </>
    )
}

export default index
