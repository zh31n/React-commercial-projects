import s from './Poducts.module.css';
import Product from '../Product/Product.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';



const Products = () => {

    
    const [dataProduct, setDataProduct] = useState([]);

    const axiosH = axios.create({
            
    });

    const createType = async () => {
        const { data } = await axiosH.get('/product/get/sushi');
        return data;

    }


    let res;
    if (dataProduct === []) {
           //{return (<div></div>)}
    }

    

    useEffect(() => {
        createType
            .then(data => setDataProduct(data.arrProduct))
    }, []);

    console.log(dataProduct);


    return (
        <div className={s.products}>
            <div className="container">
                <div className={s.productsInner}>
                    <Product />
                    <Product />
                    <Product />
                    <Product />
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