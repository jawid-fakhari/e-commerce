import React, { ComponentProps } from 'react'

// Il tipo ComponentProps è un tipo utility fornito da TypeScript per ottenere i tipi delle proprietà di un componente React o di un elemento JSX nativo. Quando usi ComponentProps<"button">, stai ottenendo il tipo delle proprietà di un elemento HTML <button>.
type TButton = ComponentProps<"button">


// ...rest passa tutto il resto dei props del button, cosi non è necessario passare uno per uno i props l'esempio di qui è onclick
function Button({children, ...rest}: TButton ) {
  return (
    <button {...rest}>
        {children}
    </button>
  )
}

export default Button