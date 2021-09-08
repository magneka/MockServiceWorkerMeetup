import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

export const CustomersList = (props) => {

    const [isloading, setIsloading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [customers, setCustomers] = useState([])

    async function fetchCustomers() {

        setIsloading(true)
        setErrorMessage('')

        const fetchResult = await fetch(`/customerlist`, { method: 'GET' })

        const result = await fetchResult.json()

        if (fetchResult.ok) {
            setCustomers([...result])
            setIsloading(false)
            return;
        } else {
            setIsloading(false)
            setErrorMessage(result.errorMessage)
        }
    }

    useEffect(() => {       
        fetchCustomers();           
    }, [])

    if (isloading)
        return (<div>loading data</div>)
    else if (errorMessage)
        return (<div>something bad has happened: {errorMessage}</div>)
   else return (
        <div>
            <h1>Customer list</h1>
            {customers.map(function (item, i) {
                return (
                    <div key={i}>                        
                        <NavLink to={`/customerdetails/${item.id}`}>
                            <b>{item.name}</b>
                        </NavLink>
                        &nbsp;
                        <span>ceo: {item.ceo}</span>
                    </div>
                )
                    
                })
            }
        </div>
    )
}