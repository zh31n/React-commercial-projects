import s from './Poducts.module.css';
import Product from '../Product/Product.jsx';


const Products = () =>{
    return (
        <div className={s.products}>
            <div className="container">
                <div className={s.productsInner}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div> 
            </div>
        </div>
    );
}



export default Products;