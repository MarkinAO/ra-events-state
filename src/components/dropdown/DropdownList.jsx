import { useState } from 'react';
import DropdownItem from "./DropdownItem";

function DropdownList(props) {
    const { items } = props;
    let [ activeItem, switchActiveItem ] = useState(items[0]);

    return (
        <ul className="dropdown">            
            {items.map(el => <DropdownItem item={el} activeItem={activeItem} switchItem={(item) => switchActiveItem(activeItem = item)} key={el} />)}
        </ul>
    )
}

export default DropdownList;