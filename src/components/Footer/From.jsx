import React from "react";

function From() {
  return (
    <div>
      <div className="w-[50%]">
        <div>
          <h3 className="text-2xl text-[#99F51D] uppercase py-2 ">Fitnation</h3>
          <p className="text-xl">
            Recibí las novedades y promociones exclusivas de FitNation.
          </p>
        </div>
        <div>
          <form className="flex gap-4 items-center py-3 ">
            <input
              type="email"
              className="outline-none px-3 rounded h-[40px] bg-transparent border border-[#99F51D] w-[70%]"
              placeholder="fitnation@gmail.com"
            />
            <button type="submit" className="py-2 px-4 bg-[#99F51D] rounded">
              Suscribete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default From;
