import icon from "../icons/x.svg";
import map from "../image/map.png";
import { data } from "../data/data";
import Addresses from "./Addresses";
import Forms from "./Forms";
import address from "../image/1.svg";
import { useState } from "react";

export default function Content({ setModalActive }) {
  const [markActive, setMarkSctive] = useState(false);

  return (
    <>
      <h1 className="title">Почтовые отделения</h1>

      <a
        href="/"
        className="close-button"
        onClick={(event) => {
          event.preventDefault();
          setModalActive(false);
        }}
      >
        <img src={icon} alt="Закрыть" />
      </a>

      <Forms />

      <div className="imd-div">
        <img src={map} alt="Карта" className="map-image" />
        {markActive && <img src={address} alt="Метка" className="map-address" />}
      </div>

      <br />
      <button
        className="add-button"
      >Добавить все отображаемые отделения</button>

      <Addresses data={data} setMarkSctive={setMarkSctive} />
    </>
  );
}
