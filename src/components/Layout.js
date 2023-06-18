import React from "react";
import { Helmet } from 'react-helmet';
import "../styles/plooh.css";
import plooh_Logo from "../img/plooh_Logo.jpeg";
import favicon from "../img/favicon.jpeg";
import i17_openGraph_Plooh_1 from "../img/17_openGraph_Plooh_1.jpeg";

export default function Layout({ children }) {
    return (
        <div className="hero--section">            
            <Helmet>
                <meta charset="utf-8" />
                <title>Plooh, the incubator of Mondial Wallet</title>
                <meta
                    content="A completely private and truly non-custodial wallet for cryptocurrencies, digital identities, and digital peer-to-peer transactions!"
                    name="description" />
                <meta content="Plooh, Incubator of Mondial Wallet" property="og:title" />
                <meta
                    content="A completely private and truly non-custodial wallet for cryptocurrencies, digital identities, and digital peer-to-peer transactions!"
                    property="og:description" />
                <meta content={i17_openGraph_Plooh_1} property="og:image" />
                <meta content="Plooh, Incubator of Mondial Wallet" property="twitter:title" />
                <meta
                    content="A completely private and truly non-custodial wallet for cryptocurrencies, digital identities, and digital peer-to-peer transactions!"
                    property="twitter:description" />
                <meta content={i17_openGraph_Plooh_1} property="twitter:image" />
                <meta property="og:type" content="website" />
                <meta content="summary_large_image" name="twitter:card" />
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta content="Webflow" name="generator" />
                <link href={plooh_Logo} rel="apple-touch-icon" />
                <link href={favicon} rel="shortcut icon" type="image/x-icon" />
            </Helmet>
            <div className="mycontain hero">
                {children}
            </div>
        </div>
    );
}