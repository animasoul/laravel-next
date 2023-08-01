import React, { useState } from 'react'
import Input from '@/components/Common/Input'
import InputError from '@/components/Common/InputError'
import Button from '@/components/Common/Button'

const SearchBox = ({ search, prevSearch, onInputChange, onSearchSubmit }) => {
    const [errors] = useState({ query: [] })

    const submitForm = event => {
        event.preventDefault()
        onSearchSubmit()
    }

    const handleChange = event => {
        onInputChange(event.target.value)
    }

    return (
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
                <form
                    onSubmit={submitForm}
                    className="grid grid-flow-row sm:grid-flow-row-dense grid-cols-6 grid-rows-2 md:grid-rows-1">
                    <Input
                        id="query"
                        type="search"
                        value={search}
                        onChange={handleChange}
                        placeholder="Search for jobs"
                        className="block w-full col-span-6 md:col-span-5 normal-case"
                        autoFocus
                    />
                    <InputError
                        messages={
                            Array.isArray(errors.query)
                                ? errors.query
                                : [errors.query]
                        }
                        className=" col-span-6"
                    />
                    <div className="md:mt-0 mt-2 md:ml-3 col-span-2 md:col-span-1 self-center">
                        <Button>Search</Button>
                    </div>
                </form>
                <div className="mt-3 normal-case">
                    Current search: <strong>{prevSearch}</strong>
                </div>
            </div>
        </div>
    )
}

export default SearchBox
