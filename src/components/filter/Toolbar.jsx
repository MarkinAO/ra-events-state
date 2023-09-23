function Toolbar(props) {
    const { categories, selected, onSelect } = props;
    const handler = (e) => onSelect(e.target.textContent);

    return (
        <div className="toolbar">
            { categories.map(category => {
                let classes = 'toolbar-item';
                if(category === selected) classes += ' toolbar-item__select';
                
                return (
                    <button className={classes} onClick={handler}>
                        {category}
                    </button>
                )                
            }) }
        </div>
    )
}

export default Toolbar;