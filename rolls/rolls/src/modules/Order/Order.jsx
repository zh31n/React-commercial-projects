import roll from '../../img/prod.svg';
import s from './Order.module.css';

const Order = () =>{
    return(
        <div className={s.orderInner}>
            <div className={s.imgName}>
                <img src={roll} alt="order" className={s.rollImg} />
                <h1 className="orderName">Калифорния</h1>
            </div>
            <div className={s.orderCount}>
                <div className={s.minus}>&minus;</div>
                <div className={s.orderValue}>1</div>
                <div className={s.plus}>&#43;</div>
            </div>
            <div className={s.priceDel}>
                <div className="orderPrice">600 руб.</div>
                <div className={s.orderDel}>&times;</div>
            </div>
        </div>
    );
}




export default Order;