import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import JobsList from '@/components/Jobs/JobsList'

const jobsearch = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Job Search
                </h2>
            }>
            <Head>
                <title>META Consultancy Job Search</title>
            </Head>

            <div className="pb-12 pt-3">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <JobsList />
                </div>
            </div>
        </AppLayout>
    )
}

export default jobsearch
