import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArray = getPagesArray(totalPages)

  return (
    <div className={"pagination__wrapper"}>
      {pagesArray.map(e =>
        <span
          onClick={() =>  changePage(e)}
          key={e}
          className={page === e
            ? "pagination__page pagination__current"
            : "pagination__page"
          }
        >
             {e}
           </span>
      )}
    </div>
  );
};

export default Pagination;