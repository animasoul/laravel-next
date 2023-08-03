import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Image from 'next/image'
import { FcLike } from 'react-icons/fc'
import { MdOutlineInfo, MdCode, MdFastForward } from 'react-icons/md'
import ApplicationLogo from '@/components/Common/ApplicationLogo'
import { Tooltip, Avatar } from 'flowbite-react'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>META Job Search demo site</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex-1 sm:flex items-center justify-center pt-8 sm:justify-start sm:pt-0">
                        <Image
                            src="/meta-logo-WHT-260x300.png"
                            width="260"
                            height="300"
                            alt="META Job Search demo site"
                            className="mx-auto sm:mx-0 sm:flex-shrink-0"
                        />
                        <div>
                            <h1 className="sm:text-3xl text-xl mx-4 text-center mt-5 sm:mt-0 sm:ml-4 align-middle font-bold">
                                META Job Search demo site
                            </h1>
                        </div>
                        <div className="mx-auto sm:px-0 px-3 text-center font-bold text-lg">
                            {user ? (
                                <Link
                                    href="/jobsearch"
                                    type="button"
                                    className="block mt-1.5 rounded-full bg-success px-6 pb-2 pt-2.5 text-xl uppercase leading-normal bg-orange-400 hover:bg-orange-600 focus:bg-orange-500 text-black shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                                    jobsearch now!
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className=" text-gray-700 underline">
                                        Login
                                    </Link>

                                    <Link
                                        href="/register"
                                        className="ml-4  text-gray-700 underline">
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <MdOutlineInfo className="w-8 h-8 text-gray-500" />

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <Tooltip content="Link to AJ Partners Ltd. website, the people behind this project">
                                            <a
                                                href="https://www.ajpartnersltd.com/"
                                                className="underline text-gray-900 dark:text-white"
                                                alt="AJ Partners Ltd. website, the people behind this project">
                                                About this demo
                                            </a>
                                        </Tooltip>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        This is a project site to demonstrate
                                        the use of Laravel Breeze API for user
                                        authentication with a Next.js frontend
                                        integrated with a Job Search API. The
                                        jobs displayed are <strong>REAL</strong>
                                        , but the login/registration is for demo
                                        puposes only. We do not process any of
                                        your data and you are free to enter
                                        whatever you like!
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                                <div className="flex items-center">
                                    <MdFastForward className="w-8 h-8 text-gray-500" />

                                    <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                        Future Plans
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        This is a work in progress, (first live
                                        August 2023) but we have plans to
                                        separate the read more about the job to
                                        an individual page, and add a "save to
                                        favourites" feature. Would also like to
                                        integrate better into our big sister
                                        site,{' '}
                                        <a
                                            href="https://www.meta.mt/"
                                            className="underline">
                                            meta.mt
                                        </a>
                                        <br />
                                        If you have any suggestions, please
                                        email me at{' '}
                                        <a
                                            href="mailto:abel@ajpartnersltd.com"
                                            className="underline">
                                            abel@ajpartnersltd.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center">
                                    <Avatar img="/abel.jpg" rounded size="sm">
                                        <div className="space-y-1 font-medium dark:text-white">
                                            <div>Abel Rogers M.Sc.</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 sm:w-full w-60">
                                                Founder of{' '}
                                                <a
                                                    href="https://www.ajpartnersltd.com/"
                                                    className="underline">
                                                    AJ Partners Ltd.
                                                </a>{' '}
                                                &{' '}
                                                <a
                                                    href="https://www.meta.mt/"
                                                    className="underline">
                                                    Co-founder of META
                                                    Consultancy Ltd.
                                                </a>
                                            </div>
                                        </div>
                                    </Avatar>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        I have a tutorial on{' '}
                                        <a
                                            href="https://www.ajpartnersltd.com/building-a-wordpress-gutenberg-block-plugin-a-revised-guide/"
                                            className="underline">
                                            how to build a Gutenburg block for
                                            WordPress
                                        </a>
                                        , and I am working on a tutorial for
                                        this project.
                                        <br />
                                        Another React project of a terminal type
                                        website that you might like can also be{' '}
                                        <a
                                            href="https://abel.meta.mt/"
                                            className="underline">
                                            found here
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                                <div className="flex items-center">
                                    <MdCode className="w-8 h-8 text-gray-500" />

                                    <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                        Code References
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel's robust library of{' '}
                                        <a
                                            href="https://laravel.com/docs/10.x/starter-kits#breeze-and-next"
                                            className="underline">
                                            Breeze API
                                        </a>
                                        , with{' '}
                                        <a
                                            href="https://laravel.com/docs/10.x/starter-kits#breeze-and-next"
                                            className="underline">
                                            Breeze Next.js
                                        </a>
                                        , with my custom fork and build for this
                                        demo{' '}
                                        <a
                                            href="https://github.com/animasoul/laravel-next"
                                            className="underline">
                                            My Github Repo
                                        </a>
                                        .<br /> Integration with a RapidAPI{' '}
                                        <a
                                            href="https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch"
                                            className="underline">
                                            Job Search API
                                        </a>
                                        .<br />
                                        Special shout out to{' '}
                                        <a
                                            href="https://react-icons.github.io/react-icons"
                                            className="underline">
                                            React Icons
                                        </a>
                                        , and React components from{' '}
                                        <a
                                            href="https://www.flowbite-react.com/"
                                            className="underline">
                                            Flowbite React
                                        </a>
                                        , and more.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4 sm:items-center sm:justify-between">
                        <div className="text-center text-sm text-gray-500 sm:text-left">
                            <div className="flex items-center">
                                <FcLike className="w-6 h-6" />
                                <a
                                    href="https://www.ajpartnersltd.com/"
                                    className="ml-1 underline">
                                    Built by AJ Partners Ltd.
                                </a>
                                <ApplicationLogo className="w-6 h-6 ml-3" />
                                <a
                                    href="https://www.meta.mt/"
                                    className="ml-1 underline">
                                    meta.mt home
                                </a>
                            </div>
                        </div>

                        <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                            Laravel Breeze API + Next.js + job Search API
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
