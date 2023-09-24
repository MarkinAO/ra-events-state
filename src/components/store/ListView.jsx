import ShopItem from './ShopItem';

function ListView(props) {
    const { items } = props;

    return (
        <div className="items-container">            
            { items.map(item => ShopItem(item)) }
        </div>
    )
}

export default ListView;