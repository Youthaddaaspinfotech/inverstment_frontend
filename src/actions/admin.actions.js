import { postRequest, getRequest } from "./helper"

export const adminLoginAction = (data) => {
    return postRequest('login', data).then(res => { return res.data });
}

export const socialLoginAction = (data) => {
    return postRequest('socialLogin', data).then(res => { return res.data });
}

export const loginWithOtpAction = (data) => {
    return postRequest('loginWithOtp', data).then(res => { return res.data });
}

export const verifyOtpAction = (data) => {
    return postRequest('verifyOtp', data).then(res => { return res.data });
}

export const addEditAdminsAction = (data) => {
    return postRequest('register', data).then(res => { return res.data });
}

export const getUserAction = (data) => {
    return postRequest('getUser', data).then(res => { return res.data });
}

export const addUserAction = (data) => {
    return postRequest('addUser', data).then(res => { return res.data });
}

export const editUserAction = (data) => {
    return postRequest('editUser', data).then(res => { return res.data });
}

export const deleteUserAction = (data) => {
    return postRequest('deleteUser', data).then(res => { return res.data });
}

export const getPropertyAction = (data) => {
    return postRequest('getProperty', data).then(res => { return res.data });
}

export const addEditPropertyAction = (data) => {
    return postRequest('addEditProperty', data).then(res => { return res.data });
}

export const deletePropertyAction = (data) => {
    return postRequest('deleteProperty', data).then(res => { return res.data });
}

export const addEditTenureAction = (data) => {
    return postRequest('addEditTenure', data).then(res => { return res.data });
}

export const getTenureAction = (data) => {
    return postRequest('getTenure', data).then(res => { return res.data });
}

export const deleteTenureAction = (data) => {
    return postRequest('deleteTenure', data).then(res => { return res.data });
}

export const getPortfolioAction = (data) => {
    return postRequest('getPortfolio', data).then(res => { return res.data });
}

export const getUserPortfolioAction = (data) => {
    return postRequest('getUserPortfolio', data).then(res => { return res.data });
}

export const addEditPortfolioAction = (data) => {
    return postRequest('addEditPortfolio', data).then(res => { return res.data });
}

export const deletePortfolioAction = (data) => {
    return postRequest('deletePortfolio', data).then(res => { return res.data });
}

export const updateReceivedStatusAction = (data) => {
    return postRequest('updateReceivedStatus', data).then(res => { return res.data });
}

export const updateUserAction = (data) => {
    return postRequest('updateUser', data).then(res => { return res.data });
}

export const getUserInfoAction = (data) => {
    return postRequest('getUserInfo', data).then(res => { return res.data });
}


export const _deleteAction = (data) => {
    return postRequest('_delete', data).then(res => { return res.data });
}


export const getbyUserPortfolioPaidIntTransactionPaymentAction = (data) => {
    return postRequest('getbyUserPortfolioPaidIntTransactionPayment', data).then(res => { return res.data });
}

