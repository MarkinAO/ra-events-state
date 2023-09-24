function ShopItem(item) {
    return (
        <div className="item-container" key={item.name+item.color+item.price}>
            <div className="item-img-box">
                <img src={item.img} className="item-img" alt="Фото отсутствует" />
            </div>
            <div className="card-name">{item.name.toUpperCase()}</div>
            <div className="card-color">{item.color}</div>            
            <div className="card-price">${item.price}</div>
            <button className="card-button">ADD TO CART</button>
        </div>
    )
}

export default ShopItem;