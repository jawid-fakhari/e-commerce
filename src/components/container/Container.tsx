import React from "react";

// un'interfaccia TypeScript che specifica che il componente accetterà una proprietà `children` di tipo React.ReactNode (ReactNode rappresenta qualsiasi cosa che può essere resa da componente React)
interface IContainer {
    children: React.ReactNode;
}

// una funzione che definisce il componente `Container`
// accettando `children` come proprietà e utilizzando la destructuring per estrarlo dall'oggetto delle proprietà
function Container({ children }: IContainer) {
    return (
        // restituisce un div con le classi Tailwind `container` e `mx-auto`
        // `container` definisce uno stile predefinito di Tailwind CSS per il contenitore
        // `mx-auto` centra il contenitore orizzontalmente
        <div className="container mx-auto ">
            {/* rende i figli passati al componente all'interno del div */}
            {children}
        </div>
    );
}

export default Container;
