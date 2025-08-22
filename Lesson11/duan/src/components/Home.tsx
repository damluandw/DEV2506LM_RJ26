import React from 'react'

import MenuHome from './MenuHome';
import ProductHome from './ProductHome';
import AboutUsHome from './AboutUsHome';
import NewsHome from './NewsHome';
import PartnerHome from './PartnerHome';
import BannerHome from './BannerHome';
import '../assets/css/index.css'
export default function Home() {
    return (
        <>
            <BannerHome></BannerHome>
            <MenuHome></MenuHome>
            <ProductHome></ProductHome>
            <AboutUsHome></AboutUsHome>
            <NewsHome></NewsHome>
            <PartnerHome></PartnerHome>
        </>
    )
}
