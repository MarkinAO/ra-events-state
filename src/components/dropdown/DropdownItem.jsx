function DropdownItem(props) {
    const { item, activeItem, switchItem } = props;
    let itemClass = '';
    if(item === activeItem) itemClass = 'active';   

    return (
        <li className={itemClass} onClick={(e) => switchItem(e.target.textContent)}>
            <a href="#" key={'a' + item}>{item}</a>            
        </li>
    )
}

export default DropdownItem;