import Order from "../Order/Order";



const Modalwin = ({active, setActive}) =>{
    return (
        <div  className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div class="modalContent" onClick={e => e.stopPropagation()}>
                <h1 className="modalTitle">Ваш заказ</h1>
                <span class="close" onClick={() => setActive(false)}>&times;</span>
                <div className="contentInner">
                    <Order />
                    <Order />
                    <Order />
                </div>
                <h1 className="modalPrice">Сумма: 1600 руб.</h1>
            </div>
        </div>
    );
    
}

export default Modalwin;