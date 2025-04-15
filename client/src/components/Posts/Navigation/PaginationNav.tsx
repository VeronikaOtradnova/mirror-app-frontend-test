interface IProps {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
}

export function PaginationNav({totalPages, currentPage, setPage}: IProps) {
  const generatePages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    pages.push(1);

    if (currentPage <= 4) {
      pages.push(2, 3, 4, 5);
      pages.push('next');
    } else if (currentPage >= totalPages - 3) {
      pages.push('prev');
      for (let i = totalPages - 4; i < totalPages; i++) {
        pages.push(i);
      }
    }  else {
      pages.push('prev');
      pages.push(currentPage - 1, currentPage, currentPage + 1);
      pages.push('next');
    }

    pages.push(totalPages);

    return pages;
  };

  const prevHandler = () => {
    const prev = Math.max(currentPage - 5, 1)
    setPage(prev)
  }

  const nextHandler = () => {
    const next = Math.min(currentPage + 5, totalPages)
    setPage(next)
  }

  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      {generatePages().map((page) => (
        typeof page === "number" ?
        <button
          key={page}
          onClick={() => setPage(page)}
          className={`px-3 py-1 rounded border text-sm transition cursor-pointer
            ${page === currentPage 
              ? 'bg-blue-600 text-white border-blue-600' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        >
          {page}
        </button>
        :
        <span 
          key={page} 
          className="px-2 text-gray-500 text-sm cursor-pointer"
          onClick={page === 'prev' ? prevHandler : nextHandler}
        >...</span>
      ))}
    </div>
  )
}