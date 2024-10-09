import React from 'react';
import Card from 'react-bootstrap/Card';
import './Player.css'; // Optional: If you want separate styling for player cards

const Player = ({ title, team, nationality, age }) => {
  return (
    <Card className="player-card" style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">
          <strong>Team:</strong> {team} <br />
          <strong>Nationality:</strong> {nationality} <br />
          <strong>Age:</strong> {age}
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default Player;
