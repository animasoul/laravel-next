import { Pagination } from 'flowbite-react'

const PaginationWithIcons = ({ currentPage, setCurrentPage, totalPages }) => {
    // Ensure totalPages is always a positive integer
    const safeTotalPages = Math.max(1, Math.floor(totalPages || 1))
    return (
        <div className="flex items-center justify-center text-center">
            <Pagination
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                showIcons
                totalPages={safeTotalPages}
            />
        </div>
    )
}

export default PaginationWithIcons
