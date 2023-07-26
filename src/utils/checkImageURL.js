export const checkImageURL = url => {
    const defaultImageUrl = '/meta-logo-WHT-300x300.jpg' // replace with your default image url

    if (!url) {
        return defaultImageUrl
    } else {
        const pattern = new RegExp(
            '^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$',
            'i',
        )
        const doesMatch = pattern.test(url)

        return doesMatch ? url : defaultImageUrl
    }
}
