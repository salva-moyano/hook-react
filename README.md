# Hook

## Reducer
1. Es una función común y corriente
2. Debe ser una función pura
   1. No debe de tener efectos secundarios
   2. No debe de realizar tareas asíncronas
   3. Debe de retornar siempre un estado nuevo
   4. No debe de llamar localStorage o sessionStorage
   5. No debe de requerir más que una acción que puede tener un argumento
3. Debe retornar un nuevo estado
4. Usualmente solo recibes dos argumentos
    * El valor inicial(initialState) y la acción a ejecutar

````.js
   const initialTODO = [{
    id: 1,
    todo: 'Buy bread',
    done: false
   }] 
   const todoReducer = (state = initialTODO, action) => {
    
    return state;
   }
````

## Context
