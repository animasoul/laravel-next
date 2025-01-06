import React from 'react'

const formatKey = key => {
    let formattedKey = key.replace(/_/g, ' ').toLowerCase()

    return formattedKey.charAt(0).toUpperCase() + formattedKey.slice(1)
}

const getColor = value => {
    if (value === null) return 'text-gray-500'
    if (typeof value === 'boolean')
        return value ? 'text-green-500' : 'text-red-500'
    return 'text-black'
}

const getText = value => {
    if (value === null) return 'N/A'
    if (typeof value === 'boolean') return value ? 'Yes' : 'No'
    return value
}

export const DisplayData = ({ data }) => {
    if (!data) return null

    if (typeof data !== 'object') {
        return <p>{String(data)}</p>
    }

    // Handle arrays
    if (Array.isArray(data)) {
        return (
            <div>
                {data.map((item, index) => (
                    <p key={index}>{String(item)}</p>
                ))}
            </div>
        )
    }

    // Final check to ensure we have a valid object before using Object.entries
    if (data === null || typeof data !== 'object') {
        return null
    }

    return (
        <div className="mt-2">
            {Object.entries(data).map(([key, value]) => {
                if (typeof value === 'object' && value !== null) {
                    return (
                        <div key={key}>
                            <h2 className="font-bold text-lg mb-2">
                                {formatKey(key)}
                            </h2>
                            <DisplayData data={value} />
                        </div>
                    )
                }

                return (
                    <p key={key} className="mb-2">
                        {formatKey(key)}:{' '}
                        <strong className={`${getColor(value)}`}>
                            {getText(value)}
                        </strong>
                    </p>
                )
            })}
        </div>
    )
}
