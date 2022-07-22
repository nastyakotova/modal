import { useState } from "react";

export default function Addresses({ data }) {
  const [page, setPage] = useState(1);

  return (
    <>
      <ul className="adress-list">
        {data.map((data, index) => {
          return (index < page * 9 && index >= (page - 1) * 9) ? (
            <li className="adress-list-item">
              <p className="adress">{data.city}</p>
              <p className="adress">{data.street}</p>
              <a
                href="/"
                className="add-adress"
                onClick={(event) => event.preventDefault()}
              >+ Добавить</a>
            </li>
          ) : '';
        })}
      </ul>

      <hr className="line" />

      <div className="stepper">
        <input
          type="button"
          value="<"
          className="page-num"
          onClick={() => setPage((prev) => setPage(prev - 1))}
        />
        <input
          type="button"
          value="1"
          className={`page-num ${page === 1 ? 'active' : ''}`}
          onClick={() => setPage(1)}
        />
        <input
          type="button"
          value="2"
          className={`page-num ${page === 2 ? 'active' : ''}`}
          onClick={() => setPage(2)}
        />
        <input
          type="button"
          value="3"
          className="page-num"
        />
        <input
          type="button"
          value="..."
          className="page-num"
        />
        <input
          type="button"
          value="5"
          className="page-num"
        />
        <input
          type="button"
          value=">"
          className="page-num"
          onClick={() => setPage((prev) => setPage(prev + 1))}
        />
      </div>
    </>
  );
}
