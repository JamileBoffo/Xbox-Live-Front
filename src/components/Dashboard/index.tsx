import "./style.css";
import { dashboard } from "../../services/dashboard";
import { user } from "../../services/user";
import { useState, useEffect } from "react";
import { getAllByPlaceholderText } from "@testing-library/react";
import { idText } from "typescript";

type Response = {
  id: string;
  thumbnail_url: string;
  techs: string[];
  company: string;
  price: number;
};

const Dashboard = () => {
  const [spots, setSpots] = useState<Response[]>([]);
  const [count, setCount] = useState(0);

  const loadSpots = async () => {
    const user_id = localStorage.getItem("user");
    if (user_id) {
      const response = await dashboard.spotList(user_id);
      setSpots(response.data);
    }
  };

  useEffect(() => {
    loadSpots();
  }, []);

  return (
    <>
      <ul className="spot-list">
        {spots.map((spot) => (
          <li key={spot.id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}></header>
            <h2><strong>{spot.company}</strong></h2>
            <p>Techs: {spot.techs.map((tech, index) => {
              if(index === spot.techs.length -1) {
                return `${tech}.`
              }
              return `${tech},`
            })}</p>
            <p className="value">Preço</p>
          </li>
        ))}
      </ul>
      <button className="btn"> Cadastrar novo spot</button>
    </>
  );
};

export default Dashboard;
