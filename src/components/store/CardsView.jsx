import ShopCard from './ShopCard';

function CardsView(props) {
    const { cards } = props;    

    return (
        <div className="cards-container">
            { cards.map(card => ShopCard(card)) }
        </div>
    )
}

export default CardsView;