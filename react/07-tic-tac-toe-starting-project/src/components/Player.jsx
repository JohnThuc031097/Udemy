import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setEditing] = useState(false);

    function handleEditClick() {
        setEditing((editing) => !editing);
    }

    function handleChange(e) {
        setPlayerName(e.target.value);
    }

    return (
        <li>
            <span className="player">
                {!isEditing ? (
                    <span className="player-name">{playerName}</span>
                ) : (
                    <input
                        autoFocus
                        className="player-name"
                        type="text"
                        defaultValue={playerName}
                        onChange={handleChange}
                    />
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"}
            </button>
        </li>
    );
}
