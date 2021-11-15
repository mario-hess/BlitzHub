export const setUser = (payload) => {
    return {
        type: 'SET_USER',
        payload: payload,
    }
}

export const toggleNavbar = () => {
    return {
        type: 'TOGGLE',
    }
}
