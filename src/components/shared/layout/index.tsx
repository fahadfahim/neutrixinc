import Footer from '@/components/partials/footer'
import Nav from '@/components/partials/nav'
import React from 'react'

const Layout = ({ children }: any) => {
    return (
        <>
            <Nav />
            <div className='container mx-auto'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout