import React, { useEffect, useState } from 'react';

import Player from './Player'; // Import the Player component

import { fetchAllPlayers } from './api';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    // Function to get data from the database
    const getAllPlayers = async () => {
        try {
            const data = await fetchAllPlayers();
            if (data && data.cards) {
                setPlayers(data.cards);
            } else {
                console.error("Data or cards property is undefined");
            }
        } catch (error) {
            console.error("Error fetching players:", error);
        }
    };
    // Render Data of DataBase
    useEffect(() => {
        getAllPlayers();
        console.log(players);
    }, []);

    return (
        <div>
            <h1>Player List</h1>
            <div className="d-flex flex-wrap">
                {players.map((player) => (
                    <Player
                        key={player._id}
                        title={player.title}
                        team={player.Team}
                        nationality={player.Nationality}
                        age={player.Age}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlayerList;
