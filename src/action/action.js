
export const removeFeature = (feature) => {
    return {
        type: 'REMOVEFEATURE', payload: feature
    }
}

export const addFeature = (feature) => {
    return {
        type: 'ADDFEATURE', payload: feature
    }
}