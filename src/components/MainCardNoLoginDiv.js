export default function MainCardNoLoginDiv() {
  //   console.log(LoginStatus, setLoginStatus);

  return (
    <div className="mainCardNoLogin flex justify-center items-center">
      <div className="card card-side bg-neutral shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Zaloguj się!</h2>
          <p>
            Zaloguj się, Aby uzyskać dostep do Filmów, Programów, seriali i
            wiele więcej!
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-lg btn-primary">Zaloguj</button>
          </div>
        </div>
      </div>
    </div>
  );
}
