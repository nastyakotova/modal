import grid from "../icons/grid.svg";
import printer from "../icons/printer.svg";
import list from "../icons/list.svg";

export default function Forms({ data }) {
  return (
    <>
      <form  className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Укажите адрес или индекс почтового отделения"
      />
      <button
        className="search-button"
        onClick={(event) => event.preventDefault()}
      >Поиск</button>
    </form>

    <form className="settings-container">
      <div className="settings-label">Параметры фильма</div>

      <select className="settings-select">
        <option>Область</option>
        <option>Ленинградская область</option>
        <option>Ленинградская область</option>
        <option>Ленинградская область</option>
      </select>
      <select className="settings-select">
        <option>Город</option>
        <option>Санкт-Петербург</option>
        <option>Санкт-Петербург</option>
        <option>Санкт-Петербург</option>
      </select>
      <select className="settings-select">
        <option>Район/Округ</option>
        <option>Центральный</option>
        <option>Адмиралтейский</option>
        <option>Приморский</option>
      </select>
      <button
        type="submit"
        className="settings-button"
        onClick={(event) => event.preventDefault()}
      >Применить</button>

      <button className="icon-button">
        <img src={list} alt="Menu" />
      </button>
      <button className="icon-button">
        <img src={grid} alt="Grid" />
      </button>
      <button className="icon-button">
        <img src={printer} alt="Printer" />
      </button>
    </form>
  </>
  );
}
