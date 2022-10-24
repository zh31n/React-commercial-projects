import { useState } from 'react';
import Modalwin from '../Modalwin/Modalwin';
import s from './Header.module.css';
import style from './../Modalwin/Modalwin.css';


const Header = () =>{
    const [modalActive, setModalActive] =  useState(false)

    return(
        <div className={s.header}>
            <div className="container">
                <div className={s.headerInner}>
                    <div className={s.logo}>
                        <a href="" className="logoTxt">logo</a>
                    </div>
                    <div className={s.nav}>
                        <div><a className="navRolls">Роллы</a></div>
                        <div><a className="navSets">Сеты</a></div>
                        <div><a className="navSush">Напитки</a></div>
                        <div><a className="navBusket" onClick={() => setModalActive(true)}>Корзина</a></div>
                    </div>
                </div>
            </div>
            <Modalwin active={modalActive} setActive={setModalActive}/>
        </div>
    );
}


export default Header;

