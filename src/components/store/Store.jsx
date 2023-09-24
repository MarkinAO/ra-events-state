import IconSwitch from "./IconSwitch";
import { useState } from 'react';
import CardsView from "./CardsView";
import ListView from "./ListView";
import './Store.css';

function Store(props) {
    let [ iconState, seticonState ] = useState('view_list');
    const { products } = props;

    return (
        <div className="store-container">
            { iconState === 'view_list' ? <CardsView cards={products} /> : <ListView items={products} /> }
            <IconSwitch icon={iconState} onSwitch={(newIconState) => seticonState(iconState = newIconState)}/>
        </div>
    )
}

export default Store;