export const getGoogleMapsLink = (latitude, longitude, zoom = 15) => {
    if (
        typeof latitude !== 'number' ||
        typeof longitude !== 'number' ||
        latitude < -90 ||
        latitude > 90 ||
        longitude < -180 ||
        longitude > 180
    ) {
        throw new Error('Invalid or missing latitude or longitude values')
    }

    return `https://www.google.com/maps/@${latitude},${longitude},${zoom}z`
}
