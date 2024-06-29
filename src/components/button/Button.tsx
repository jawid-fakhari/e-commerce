import React, { ComponentProps } from 'react'


type TVariant = "primary" | "secondary" | "pashmak";

// Il tipo ComponentProps è un tipo utility fornito da TypeScript per ottenere i tipi delle proprietà di un componente React o di un elemento JSX nativo. Quando usi ComponentProps<"button">, stai ottenendo il tipo delle proprietà di un elemento HTML <button>.
type TButton = ComponentProps<"button"> & {
    variant: TVariant; // dare 3 type al variante che abbiamo creato; line 4 
}


// ...rest passa tutto il resto dei props del button, cosi non è necessario passare uno per uno i props l'esempio di qui è onclick
function Button({children, variant, style, ...rest}: TButton ) { //passare il variante come props al func - passare il nuovo costum props
  return (
    //chiamare il variante all'interno della func checkVariant per avere il return di cio che vogliamo, qui un oggetto di stile
    // chimare il nuovo costum props e mettere tutto all'interno di style
    <button {...rest} style={{...style, ...checkVariant(variant)}}>
      {children}
    </button>
  );
}

export default Button

//func checkVariant che ritorna un oggetto di stile in base alle condizioni preposti
function checkVariant(variant: TVariant){
    if(variant === 'primary'){
        return{backgroundColor: "blue",
        color: 'white',}
    }
    if(variant === 'secondary'){
        return{backgroundColor: "green",
        color: 'white',}
    }
    if(variant === 'pashmak'){
        return{backgroundColor: "black",
        color: 'white',}
    }
}