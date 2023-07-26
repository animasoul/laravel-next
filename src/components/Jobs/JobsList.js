import React from 'react'
import useFetch from '@/hooks/useFetch'
import { checkImageURL } from '@/utils/checkImageURL'
import { formatUTCDate } from '@/utils/formatUTCDate'
import { getGoogleMapsLink } from '@/utils/getGoogleMapsLink'
import { ReadMore } from '@/utils/readMore'
import { MdArrowOutward } from 'react-icons/md'

export default function JobsList() {
    const response = useFetch('/jobs', {}) // replace with your endpoint and query
    const { data: jobs } = response.data || {} // access the nested data property

    if (!jobs || jobs.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <div className="grid grid-cols-1 gap-4 mt-3 mr-3 ml-3 sm:grid-cols-2 sm:mr-0 sm:ml-0 ">
            {jobs.map((job, index) => (
                <div
                    key={index}
                    className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="grid grid-rows-auto p-4 bg-white border-b border-gray-200 sm:p-6">
                        <div className="row-start-1">
                            <img
                                src={checkImageURL(job.employer_logo)}
                                alt={job.employer_name}
                                className="h-24 max-h-24 rounded border bg-white p-1 shadow-sm mx-auto"
                            />
                        </div>
                        <h2 className="row-start-2 sm:whitespace-nowrap overflow-hidden mt-2 font-bold text-2xl text-center sm:text-left">
                            {job.job_title}
                            <br />
                            <span className="text-sm">
                                {job.job_employment_type}
                            </span>
                        </h2>
                        <div className="row-start-3 text-center sm:text-left">
                            Employer:{' '}
                            <span className="font-bold text-lg">
                                {job.employer_name}
                            </span>
                        </div>
                        <div className="row-start-4 text-center sm:text-left">
                            Posted:{' '}
                            {formatUTCDate(job.job_posted_at_datetime_utc)}
                        </div>
                        <div className="row-start-5 text-center sm:text-left">
                            Expires:{' '}
                            {formatUTCDate(
                                job.job_offer_expiration_datetime_utc,
                            )}
                        </div>
                        <div className="row-start-6">
                            {job.job_city}, {job.job_state}, {job.job_country} -{' '}
                            <a
                                href={getGoogleMapsLink(
                                    job.job_latitude,
                                    job.job_longitude,
                                )}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Google Maps
                                <MdArrowOutward />
                            </a>
                        </div>
                        <div className="row-start-7">
                            <ReadMore
                                maxCharacterCount={150}
                                job_apply_link={job.job_apply_link}>
                                {job.job_description}
                            </ReadMore>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
