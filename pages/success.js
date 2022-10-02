import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/util';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    },[]);
    

    return (
        <div className={"success-wrapper"}>
            <div className={"success"}>
                <p className={"icon"}>
                    <BsBagCheckFill/>
                </p>
                <h2>Agradecemos pelo seu pedido!</h2>
                <p className={"email-msg"}>Fique de olho em sua caixa de e-mail. Enviaremos as informações por lá</p>
                <p className={"description"}>
                    Em caso de dúvidas, nos contate por e-mail:
                    <a className={"email"} href={"mailto:gabrielpw212@gmail.com"}>gabrielpw212@gmail.com</a>
                </p>
                <Link href={"/"}>
                    <button type={"button"} width={"300px"} className={"btn"}>
                        Continuar comprando
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success