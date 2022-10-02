import React from 'react'
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
    return (
        <div className={"footer-container"}>
            <p>GiSoft - Tech | 2022  - Todos os Direitos Reservados</p>
            <p className={"icons"}>
                <AiFillInstagram/>
                <AiOutlineWhatsApp/>
            </p>
        </div>
    )
}

export default Footer