import "../card/card.scss"
function Card ({item}) {
    
    return (
        <div className="card m-20">
            <img width={133} height={112} src={item.img} alt="Sneakers"/>
            <h5>{item.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>{item.price}</b>
                </div>
                <button>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    )
}
export default Card;