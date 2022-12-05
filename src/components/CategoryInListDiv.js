function CategoryInListDiv() {
  return (
    <div className="card p-4 w-full">
      <h1 className="card-title self-center text-2xl">Wyniki Wyszukiwania:</h1>
      <div className="divider" />
      <div className="filterDiv w-full flex nowrap justify-evenly">
        <div className="dropdown">
          <label tabIndex={0} className="btn m-1">
            Click
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        {/* <select className="select select-primary w-1/4 max-w-xs">
          <option selected disabled>
            Typ
          </option>
          <option value="Wszystko">Wszystko</option>
          <option value="Filmy">Filmy</option>
          <option value="Seriale">Seriale</option>
          <option value="Programy">Programy</option>
          <option value="Gry">Gry</option>
          <option value="Aplikacje">Aplikacje</option>
        </select>
        <select className="select select-primary w-1/4 max-w-xs">
          <option selected disabled>
            Kategoria
          </option>
          <option value="komedia">komedia</option>
          <option value="thriller">thriller</option>
          <option value="dramat">dramat</option>
          <option value="melodramat">melodramat</option>
          <option value="fantasy">fantasy</option>
          <option value="fantastycznonaukowy">fantastycznonaukowy</option>
          <option value="kryminał">kryminał</option>
          <option value="horror">horror</option>
          <option value="przygoda">przygoda</option>
          <option value="muzyczny">muzyczny</option>
          <option value="sensacyjny">sensacyjny</option>
          <option value="wojenny">wojenny</option>
          <option value="akcja">akcja</option>
        </select>
        <select className="select select-primary w-1/4 max-w-xs">
          <option selected disabled>
            Sortuj
          </option>
          <option value="akcja">Najczesciej ogladane</option>
          <option value="akcja">Najlepiej oceniane</option>
          <option value="akcja">Najnowsze</option>
        </select> */}
      </div>
    </div>
  );
}

export default CategoryInListDiv;
