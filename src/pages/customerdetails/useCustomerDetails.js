import { useEffect, useState } from "react"

export const useCustomerDetails = (props) => {

    const [isloading, setIsloading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [message, setMessage] = useState('')
    const [customer, setCustomer] = useState({})

    const initializeStatus = () => {
        setIsloading(true)
        setErrorMessage('')
        setMessage('')
    }

    const fetchCustomer = async (id) => {

        initializeStatus()

        const fetchResult = await fetch(`/customer/${id}`, { method: 'GET' })

        const result = await fetchResult.json()

        if (fetchResult.ok) {
            setCustomer({ ...result })
            setMessage('Customer loaded from rest api')
            setIsloading(false)
            return;
        } else {
            setIsloading(false)
            setErrorMessage(result.errorMessage)
        }
    }

    const postCustomer = async (customer) => {
        
        initializeStatus()

        const fetchResult = await fetch('/customer', {
            method: 'POST',
            body: JSON.stringify(customer)
        })

        const result = await fetchResult.json()

        if (fetchResult.ok) {
            setCustomer({ ...result })
            setMessage(result.message)
            setIsloading(false)
            return;
        } else {
            setIsloading(false)
            setErrorMessage(result.errorMessage)
        }
    }

    const deleteCustomer = async (id) => {

        initializeStatus()

        const fetchResult = await fetch(`customer/${id}`, {
            method: 'DELETE',
        })

        const result = await fetchResult.json()

        if (fetchResult.ok) {
            setCustomer({ ...result })
            setMessage('Customer loaded from rest api')
            setIsloading(false)
            return;
        } else {
            setIsloading(false)
            setErrorMessage(result.errorMessage)
        }
    }

    useEffect(() => {
        fetchCustomer(props.customerId);
    }, [props.customerId])

    const formValueOnChange = (e) => {
        console.log(e.target.name, e.target.value)
        setCustomer({ ...customer, [e.target.name]: e.target.value })
    }

    const clear = () => setCustomer({ id: '', name: '', ceo: '' })

    return { isloading, errorMessage, message, customer, fetchCustomer, clear, postCustomer, deleteCustomer, formValueOnChange }

}