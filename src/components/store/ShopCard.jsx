function ShopCard(card) {
    return (
        <div className="card-container" key={card.name+card.color+card.price}>
            <div className="card-name">{card.name.toUpperCase()}</div>
            <div className="card-color">{card.color}</div>
            <div className="card-img-box">
                <img src={card.img} className="card-img" alt="Фото отсутствует" />
            </div>
            <div className="card-footer">
                <div className="card-price">${card.price}</div>
                <button className="card-button">ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopCard;