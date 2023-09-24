function IconSwitch(props) {
    const { icon, onSwitch } = props;
    const handler = (e) => {
        if(e.target.textContent === 'view_list') {
            onSwitch('view_module');
        } else {
            onSwitch('view_list');
        }
    }

    return (
        <span className="material-icons store-icon" onClick={handler}>{icon}</span>
    )
}

export default IconSwitch;