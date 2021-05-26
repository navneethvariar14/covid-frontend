import React from "react";
import Header from '../components/Header'

export default function Details() {
  return (
    <>
    <Header title="Details"/>
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((one) => {
        return (
  
          <div>
            Check the top-level render call using. See
            https://reactjs.org/link/warning-keys for more information. at div
            at Details at div at Layout
            (C:\Users\Lenovo\Desktop\TOW_EVERYTHING\TOW_WEBSITES\Web10_Nextjs\app1\.next\server\pages\_app.js:73:3)
            at MyApp
            (C:\Users\Lenovo\Desktop\TOW_EVERYTHING\TOW_WEBSITES\Web10_Nextjs\app1\.next\server\pag
          </div>
        );
      })}
    </div>
    </>
  );
}
