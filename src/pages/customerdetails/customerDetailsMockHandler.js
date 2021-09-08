import { rest } from 'msw'

export const customerDetailsMockHandler = [

    // Handling GET requests
    rest.get('/customer/:id', (req, res, ctx) => {
        
        const { id } = req.params

        if (id === '1') {
            return res(
                ctx.json({ id: 1, name: 'ACME inc', ceo: 'Wiley Coyote' })
            )
        } else {
            return res(
                ctx.status(404),
                ctx.json({
                    errorMessage: `Customer not found`,
                }),
            )
        }   
    }),

    rest.post('/customer', (req, res, ctx) => {

        const customer = JSON.parse(req.body)

        if ((!customer.name) )
            return res(
                ctx.status(403),
                ctx.json({
                    errorMessage: `Name is empty`,
                }),
            )

        return res(
            ctx.json({
                ...customer,
                customerId: !customer.customerId ? '21' : customer.customerId,
                message: `New customer saved with id 21`,
            })
        )
    }),
    
    rest.delete('/customer/:id', (req, res, ctx) => {

        const { id } = req.params

        if (id === '1') {
            return res(
                ctx.json({
                message: `Customer deleted`,
                })
            )
        } else {
            return res(
                ctx.status(404),
                ctx.json({
                    errorMessage: `Customer not found`,
                })
            )
        }
    }),
]