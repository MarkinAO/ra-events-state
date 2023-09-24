import { useState } from 'react';
import './Dropdown.css';
import DropdownList from './DropdownList';

function Dropdown(props) {
    let [ dropState, switchState ] = useState('close');
    const { items } = props;
    const handler = () => {
        switchState(dropState === 'close' ? dropState = 'open' : dropState = 'close');
    }
    const wrapClass = 'dropdown-wrapper ' + dropState;

    return (
        <div className="dropdown-wrap">
            <div className="dropdown-container">
                <div data-id="wrapper" className={wrapClass}>
                    <button data-id="toggle" className="btn" onClick={handler}>
                        <span>Account Settings</span>
                        <i className="material-icons">public</i>
                    </button>
                    <DropdownList items={items} dropState={dropState} />
                </div>
            </div>
        </div>        
    )
}

export default Dropdown;