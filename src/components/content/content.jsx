import "../content/content.scss"
function Content () {
    return(
        <div className='content p-40'>
        <div className="card">
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers"/>
            <h5>Чоловіче взуття Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>12 999 грн</b>
                </div>
                <button>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
      </div>
    )
}
export default Content;