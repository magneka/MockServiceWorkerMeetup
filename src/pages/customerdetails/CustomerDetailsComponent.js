import { useCustomerDetails } from "./useCustomerDetails"

export const CustomerDetails = (props) => {

    const {
        isloading, errorMessage, message, customer, fetchCustomer,
        clear, postCustomer, deleteCustomer, formValueOnChange } = useCustomerDetails(props)
    
    const spanStyle = {
        width: "100px",
        display: "inline-block"
    }

    if (isloading)
        return (<div>loading data</div>)
    else if (errorMessage)
        return (<div>something bad has happened: {errorMessage}</div>)
    else
        return (
            <div>
                <div>
                    <span style={spanStyle} >Id</span>
                    <input
                        data-testid="id" id="id" name="id"
                        value={customer.id}
                        onChange={formValueOnChange}
                    />
                </div>

                <div>
                    <span style={spanStyle} >Company</span>
                    <input
                        data-testid="name" id="name" name="name"
                        value={customer.name}
                        onChange={formValueOnChange}
                    />
                </div>

                <div>
                    <span style={spanStyle} >CEO</span>
                    <input
                        data-testid="ceo" id="ceo" name="ceo"
                        value={customer.ceo}
                        onChange={formValueOnChange}
                    />
                </div>
                <div>{message}</div>
                <div>
                    <button name="get" onClick={async () => await fetchCustomer(customer.id)}>Get customer</button>&nbsp;
                    <button name="clear" onClick={clear}>Clear fields</button>&nbsp;
                    <button name="save" onClick={async () => await postCustomer(customer)}>Save</button>&nbsp;
                    <button name="delete" onClick={async () => await deleteCustomer(customer.id)}>Delete</button>&nbsp;
                </div>
            </div>        
        )
}
