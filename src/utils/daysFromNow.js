export const daysFromNow = dateString => {
    const date = new Date(dateString)
    const now = new Date()

    const oneDay = 1000 * 60 * 60 * 24 // milliseconds in one day
    const differenceInTime = date.getTime() - now.getTime()
    const differenceInDays = Math.ceil(differenceInTime / oneDay)

    if (differenceInDays === 0) {
        return 'today'
    } else if (differenceInDays > 0) {
        if (
            differenceInDays <=
            new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
        ) {
            return `in ${differenceInDays} day(s)`
        } else {
            const differenceInMonths =
                date.getMonth() -
                now.getMonth() +
                12 * (date.getFullYear() - now.getFullYear())
            return `in ${differenceInMonths} month(s) and ${differenceInDays} day(s)`
        }
    } else {
        if (
            Math.abs(differenceInDays) <=
            new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
        ) {
            return `${Math.abs(differenceInDays)} day(s) ago`
        } else {
            const differenceInMonths =
                now.getMonth() -
                date.getMonth() +
                12 * (now.getFullYear() - date.getFullYear())
            return `${differenceInMonths} month(s) and ${Math.abs(
                differenceInDays,
            )} day(s) ago`
        }
    }
}
