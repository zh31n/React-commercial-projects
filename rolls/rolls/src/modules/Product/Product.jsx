import s from './Product.module.css';
import prodImg from './../../img/prod.svg';

const Product = () =>{
    return(
        <div className={s.product}>
            <div className={s.productInner}>
                <img src={prodImg} alt="product image" className="productImg" />
                <h1 className={s.prodTitle}>Калифорния</h1>
                <h1 className={s.prodValue}>8 шт.</h1>
                <h1 className={s.prodPrice}>600 руб.</h1>
                <div className={s.prodBtns}>
                    <button className="prodBtn">Купить</button>
                    <button className="prodBtn">В корзину</button>
                </div>
            </div>
        </div>
    );
}

export default Product;