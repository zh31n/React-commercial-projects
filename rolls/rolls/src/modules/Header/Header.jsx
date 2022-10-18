import s from './Header.module.css';


const Header = () =>{
    return(
        <div className={s.header}>
            <div className="container">
                <div className={s.headerInner}>
                    <div className={s.logo}>
                        <a href="" className="logoTxt">logo</a>
                    </div>
                    <div className={s.nav}>
                        <div><a href="" className="navRolls">Роллы</a></div>
                        <div><a href="" className="navSets">Сеты</a></div>
                        <div><a href="" className="navSush">Суши</a></div>
                        <div><a href="" className="navBusket">Корзина</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header;