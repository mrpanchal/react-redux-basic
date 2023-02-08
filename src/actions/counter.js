
// Action creators
export const increment = (newValue) => {
    // Return an action
    return {
        type: 'INCREMENT',
        payload: newValue
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}