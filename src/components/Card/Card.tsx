import React from "react";
import { RickAndMortyStatus, RickAndMorty, RickAndMortySpecies } from "../../api/rickandmortyApi";
import "./Card.style.css";

type CardProps = {
    character: RickAndMorty;
};

const Card = ({ character }: CardProps) => {
    const { name, image, status, species } = character;

    const RickAndMortyStatusColors: Record<RickAndMortyStatus, string> = {
        Alive: "#4CAF50",
        Dead: "#ff2f2f",
        unknown: "#9E9E9E"
    };

    const RickAndMortySpeciesColors: Record<RickAndMortySpecies, string> = {
        Human: "#90A4AE",
        Alien: "#7E57C2",
        Humanoid: "#B0BEC5",
        Poopybutthole: "#FFD54F",
        "Mythological Creature": "#8D6E63",
        Animal: "#546E7A",
        Robot: "#78909C",
        Cronenberg: "#5D4037",
        Disease: "#4DB6AC",
        Planet: "#455A64",
        unknown: "#9E9E9E"
    };

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={image} alt={name} />
                </div>
                <div className="card-back">
                    <h3>{name}</h3>
                    <div className="card-back-info">
                        <span
                            style={{
                                backgroundColor: RickAndMortyStatusColors[status]
                            }}
                        >
                            {status}
                        </span>
                        <span
                            style={{
                                backgroundColor: RickAndMortySpeciesColors[species]
                            }}
                        >
                            {species}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
