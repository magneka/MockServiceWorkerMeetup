import { customerDetailsMockHandler } from "../pages/customerdetails/customerDetailsMockHandler";
import { customersListMockHandlers } from "../pages/customerslist/customersListMockHandlers";

export const handlers = [
    ...customersListMockHandlers,
    ...customerDetailsMockHandler
]