export type Guitar = {
    id: number
    image: string
    name: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

// interface
/*
    export interface CartItem extends Guitar & {
        quantity: number
    }
*/

// Utilities items
/*  -- tan solo llamar X elementos del type --

    export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'>

    -- Si queremos usar X elemento y agregar nuevos --

    export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
        quanity:number
    }

   -- Si quieremos quitar elementos usar "Omit" --
    export type CartItem = Omit<Guitar, 'id' |'name'|'price'> (en este caso lo que pasara es que quitaremos id, name y price)
    
*/