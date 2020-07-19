import React from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'
import { MainSection } from './mainSection'

export const Layout = () => {
    return(
        <>  
            <Header />
            <Sidebar />
            <MainSection />
        </>
    )   
}