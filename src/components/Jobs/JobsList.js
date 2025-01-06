import React from 'react'
import useFetch from '@/hooks/useFetch'
import { checkImageURL } from '@/utils/checkImageURL'
import { getGoogleMapsLink } from '@/utils/getGoogleMapsLink'
import { ReadMore } from '@/utils/readMore'
import Link from 'next/link'
import {
    MdArrowOutward,
    MdCastForEducation,
    MdOutlineInfo,
    MdOutlineWorkOutline,
    MdOutlineRocketLaunch,
} from 'react-icons/md'
import { Tabs } from 'flowbite-react'
import { daysFromNow } from '@/utils/daysFromNow'
import { DisplayData } from '@/utils/displayData'
import { useState } from 'react'
import SearchBox from '@/utils/searchBox'
import PaginationWithIcons from '@/utils/pagination'

export default function JobsList() {
    const [query, setQuery] = useState('English Teacher, Malta')
    const [inputValue, setInputValue] = useState('English Teacher, Malta')
    const [currentPage, setCurrentPage] = useState(1)

    const { data: response } = useFetch('search', { query }, currentPage)
    const { data: jobs, parameters, totalPages } = response || {}

    const handlePageChange = page => {
        setCurrentPage(page)
    }

    const handleInputChange = newQueryValue => {
        setInputValue(newQueryValue)
    }

    const handleSearchSubmit = () => {
        setQuery(inputValue)
    }

    return (
        <div>
            <SearchBox
                search={inputValue}
                prevSearch={parameters?.query || ''}
                onInputChange={handleInputChange}
                onSearchSubmit={handleSearchSubmit}
            />
            {!jobs || jobs.length === 0 ? (
                <div className="mt-3">Loading...</div>
            ) : (
                <>
                    <div className="grid grid-cols-1 gap-4 mt-3 mr-3 ml-3 sm:grid-cols-2 sm:mr-0 sm:ml-0 ">
                        {jobs.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div className="grid grid-rows-auto p-4 bg-white border-b border-gray-200 sm:p-6">
                                    <div className="row-start-1">
                                        <img
                                            src={checkImageURL(
                                                job.employer_logo,
                                            )}
                                            alt={job.employer_name}
                                            className="h-24 max-h-24 rounded border bg-white p-1 shadow-sm mx-auto"
                                        />
                                    </div>
                                    <h2 className="row-start-2 sm:whitespace-nowrap overflow-hidden mt-2 font-bold text-2xl text-center sm:text-left">
                                        {job.job_title}
                                        <br />
                                        <span className="text-sm">
                                            {job.job_employment_type}
                                        </span>{' '}
                                        <Link
                                            href={
                                                job?.job_google_link ??
                                                'https://careers.google.com/jobs/results/'
                                            }
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-base inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                            {' - '} Google Job Link
                                            <MdArrowOutward />
                                        </Link>
                                    </h2>
                                    <div className="row-start-3 text-center sm:text-left">
                                        Employer:{' '}
                                        <span className="font-bold text-lg">
                                            {job.employer_name}
                                        </span>
                                    </div>
                                    <div className="row-start-4 text-center sm:text-left">
                                        Posted:{' '}
                                        {daysFromNow(
                                            job.job_posted_at_datetime_utc,
                                        )}
                                    </div>
                                    <div className="row-start-5 text-center sm:text-left">
                                        Expires:{' '}
                                        {daysFromNow(
                                            job.job_offer_expiration_datetime_utc,
                                        )}
                                    </div>
                                    <div className="row-start-6">
                                        {job.job_city}, {job.job_state},{' '}
                                        {job.job_country}
                                        {job.job_latitude && job.job_longitude && (
                                            <>
                                                {' - '}
                                                <Link
                                                    href={getGoogleMapsLink(
                                                        job.job_latitude,
                                                        job.job_longitude,
                                                    )}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                    Google Maps
                                                    <MdArrowOutward />
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                    <div className="row-start-7 h-full items-center">
                                        <Tabs.Group
                                            aria-label="Job Description"
                                            style="underline"
                                            className="flex justify-evenly">
                                            <Tabs.Item
                                                active
                                                icon={MdOutlineInfo}
                                                title="Description">
                                                <ReadMore
                                                    maxCharacterCount={150}
                                                    job_apply_link={
                                                        job.job_apply_link
                                                    }>
                                                    {job.job_description}
                                                    <DisplayData
                                                        data={
                                                            job.job_required_experience
                                                        }
                                                    />
                                                </ReadMore>
                                            </Tabs.Item>
                                            <Tabs.Item
                                                icon={MdCastForEducation}
                                                title="Qualifications">
                                                <ReadMore
                                                    maxCharacterCount={150}
                                                    job_apply_link={
                                                        job.job_apply_link
                                                    }>
                                                    {
                                                        job.job_highlights
                                                            .Qualifications
                                                    }
                                                    <DisplayData
                                                        data={
                                                            job.job_required_education
                                                        }
                                                    />
                                                </ReadMore>
                                            </Tabs.Item>
                                            <Tabs.Item
                                                icon={MdOutlineWorkOutline}
                                                title="Responsibilities">
                                                <ReadMore
                                                    maxCharacterCount={150}
                                                    job_apply_link={
                                                        job.job_apply_link
                                                    }>
                                                    {
                                                        job.job_highlights
                                                            .Responsibilities
                                                    }
                                                </ReadMore>
                                            </Tabs.Item>
                                            <Tabs.Item
                                                icon={MdOutlineRocketLaunch}
                                                title="Benefits">
                                                <ReadMore
                                                    maxCharacterCount={150}
                                                    job_apply_link={
                                                        job.job_apply_link
                                                    }>
                                                    {
                                                        job.job_highlights
                                                            .Benefits
                                                    }
                                                </ReadMore>
                                            </Tabs.Item>
                                        </Tabs.Group>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <PaginationWithIcons
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        totalPages={totalPages}
                    />
                </>
            )}
        </div>
    )
}
