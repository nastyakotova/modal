import icon from "../icons/x.svg";
import map from "../image/map.png";
import { data } from "../data/data";
import Addresses from "./Addresses";
import Forms from "./Forms";
import address from "../image/1.svg";

export default function Content({ setModalActive }) {
  return (
    <>
      <h1>Почтовые отделения</h1>
      {/* Поменять на ссылку */}
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
        <img src={address} alt="Метка" className="map-address" />
      </div>
      

      <div></div>

      <br />
      <button
        className="add-button"
      >Добавить все отображаемые отделения</button>

      <Addresses data={data} />
    </>
  );
}
