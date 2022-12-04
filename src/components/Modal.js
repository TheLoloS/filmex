import React, { Component } from "react";

function Modal() {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle " />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Ważna Informacja</h3>
          <p className="py-4">
            Aby patrzeć na filmy i seriale bez reklam zainstaluj przeglądarke
            Brave który ma dość dobre zabezpiecznie przed reklamami ❤ (ciężko
            ogladac z 100 reklam 😘)
          </p>

          <div className="modal-action">
            <a
              className="btn btn-primary"
              href="https://brave.com/pl/"
              alt="Pobierz przeglądarke!"
            >
              Pobierz Przeglądarke (chwila)
            </a>
            <label
              id="modalHref"
              htmlFor="my-modal-6"
              className="btn"
              onClick={(e) =>
                (window.location.href = e.target.getAttribute("href"))
              }
            >
              Potem
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
