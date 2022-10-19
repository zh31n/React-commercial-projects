import s from './Modalwin.css';

const Modalwin = ({active, setActive}) =>{
    return (
        <div  className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div class="modalContent" onClick={e => e.stopPropagation()}>
                <p>content</p>
            </div>
        </div>
    );
    
}

export default Modalwin;