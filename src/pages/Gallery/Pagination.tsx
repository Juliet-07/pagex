import { useNavigate } from "react-router-dom";

type GalleryPaginationProps = {
  currentPage: number;
  rowsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rows: number) => void;
}

export const GalleryPagination = ({
  currentPage,
  rowsPerPage,
  totalItems,
  onPageChange,
  onRowsPerPageChange,
}: GalleryPaginationProps) => {

  const totalPages = Math.ceil(totalItems/rowsPerPage);
  const pageNumbers = [1, 2, 3, '...', totalPages - 1, totalPages];
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-between items-center mt-6 mb-6 space x-2">
      <div className="flex flex-wrap space-x-2 items-center text-[#515151]">
        <span className="flex flex-row">Rows per page: </span>
        <select
        className="border border-[#515151] py-1 px-3 rounded-md" 
        value={rowsPerPage}
        onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
        >
          <option value={3}>3</option>
          <option value={6}>6</option>
          <option value={9}>9</option>
        </select>
        <span>1 - {Math.min(rowsPerPage, totalItems)} of {totalItems}</span> 
      </div>
      <div className="flex flex-wrap space-x-2">
        <button
          className="px-3 py-1 border rounded-md"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>
        {pageNumbers.map((num, index) => (
          <button
          key={index}
          className={`px-3 py-1 border rounded-md ${currentPage === num ? 'border-[#379E23] text-white' : '' }`}
          onClick={() => typeof num === 'number' && onPageChange(num)}
          disabled={num === '...'}
          >
            {num}
          </button>
        ))}
        <button 
        className="px-4 py-2 border text-[#379E23] rounded md"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
        <button 
        onClick={() => navigate(`/gallery/archive`)}
        className="px-4 py-2 bg-[#379E23] text-white rounded-md"
        >
          See Archives
          </button>
      </div>
    </div>

)};
