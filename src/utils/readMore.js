import React, { useState } from 'react'
import Link from 'next/link'

export const ReadMore = ({ children, maxHeight = '120px', job_apply_link }) => {
    const [isExpanded, setIsExpanded] = useState(false)
    const [buttonText, setButtonText] = useState('... Read More')

    const expandContainer = () => {
        if (isExpanded) {
            setIsExpanded(false)
            setTimeout(() => setButtonText('... Read More'), 500)
        } else {
            setIsExpanded(true)
            setTimeout(() => setButtonText('Read Less ...'), 500)
        }
    }

    return (
        <div>
            <div
                className="whitespace-pre-wrap mb-2"
                style={{
                    maxHeight: isExpanded ? '6000px' : maxHeight,
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease-in-out',
                }}>
                {children}
            </div>
            <button
                onClick={expandContainer}
                className="cursor-pointer mx-auto my-3 items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                {buttonText}
            </button>
            <Link
                type="button"
                href={job_apply_link}
                className="inline-block font-bold mt-1.5 float-right rounded-full bg-success px-6 pb-2 pt-2.5 text-xl uppercase leading-normal bg-orange-400 hover:bg-orange-600 focus:bg-orange-500 text-black shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                Apply Now!
            </Link>
        </div>
    )
}
