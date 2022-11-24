function CookiesCard() {
  return (
    <div className="card w-96 bg-neutral text-neutral-content absolute bottom-4 left-4">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Ciasteczka!</h2>
        <p>Używamy ciasteczek w celu poprawnego działania serwisu.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Zezwól</button>
          <button className="btn btn-ghost">Odmów</button>
        </div>
      </div>
    </div>
  );
}

export default CookiesCard;
