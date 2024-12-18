import { ComponentProps } from "react";

type TVariant = "primary" | "secondary" | "warning" | "success";

// Il tipo ComponentProps è un tipo utility fornito da TypeScript per ottenere i tipi delle proprietà di un componente React o di un elemento JSX nativo. Quando usi ComponentProps<"button">, stai ottenendo il tipo delle proprietà di un elemento HTML <button>.
type TButton = ComponentProps<"button"> & {
    variant?: TVariant; // dare 3 type al variante che abbiamo creato; line 4 - variant? ora è opzionale
};

// ...rest passa tutto il resto dei props del button, cosi non è necessario passare uno per uno i props l'esempio di qui è onclick
function Button({ children, className, variant, ...rest }: TButton) {
    //passare il variante come props al func - passare il nuovo costum props
    return (
        //chiamare il variante all'interno della func checkVariant per avere il return di cio che vogliamo, qui un oggetto di stile
        //se vogliamo chiamare un stile o una funzione che va applicato su tutte le copie
        <button
            {...rest}
            className={`button ${className}`}
            style={{
                ...checkVariant(variant),
            }}
        >
            {children}
        </button>
    );
}

export default Button;

//func checkVariant che ritorna un oggetto di stile in base alle condizioni preposti
function checkVariant(variant?: TVariant) {
    const baseStyle = {
        border: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
    };

    if (variant === "primary") {
        return {
            ...baseStyle,
            backgroundColor: "rgb(80, 124, 149)",
            color: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        };
    }
    if (variant === "secondary") {
        return {
            ...baseStyle,
            backgroundColor: "rgb(149, 106, 80)",
            color: "white",
        };
    }
    if (variant === "warning") {
        return {
            ...baseStyle,
            backgroundColor: "#9b2321",
            color: "white",
        };
    }
    if (variant === "success") {
        return {
            ...baseStyle,
            backgroundColor: "green",
            color: "white",
        };
    }
    //se non è definito nessun variante, ritorna l'oggetto di stile base
    return baseStyle;
}
