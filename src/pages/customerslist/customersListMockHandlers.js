import { rest } from 'msw'

const CUSTOMERS = 
    [
        { id: 1, name: 'ACME inc', ceo: 'Wiley Coyote' },
        { id: 2, name: 'Amigone Funeral Home', ceo: 'Mr. Under Taker' },
        { id: 3, name: 'Little Hope Cemetery', ceo: 'Rev. Hope' },        
        { id: 4, name: 'Hindenburger', ceo: 'Chef Alfred' },
        { id: 5, name: 'Thai Tanic', ceo: 'Chef Mai Tai' }
    ]
    
export const customersListMockHandlers = [

    rest.get('/customerlist', (req, res, ctx) => {
        return res(
            ctx.json(CUSTOMERS)
        )
    })
]