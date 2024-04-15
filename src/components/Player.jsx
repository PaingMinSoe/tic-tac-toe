import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [name, setName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((prevIsEdit) => !prevIsEdit);

        if (isEditing) {
            onChangeName(symbol, name);
        }
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    let playerName = <span className="player-name">{name}</span>;

    if (isEditing) {
        playerName = <input type="text" value={name} required onChange={handleNameChange} />;
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span> 
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}