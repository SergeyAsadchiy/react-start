import {usePagination} from "../../../hooks/usePagination";
import classes from './pagination.module.css'
const Pagination = ({totalPages, page, changePage}) => {
  const pagesArray = usePagination(totalPages)

  return (
    <div className={classes.pagination__wrapper}>
      {pagesArray.map(e =>
        <span
          onClick={() =>  changePage(e)}
          key={e}
          className={page === e
            ? `${classes.pagination__page} ${classes.pagination__current}`
            : classes.pagination__page
          }
        >
          {e}
        </span>
      )}
    </div>
  );
};

export default Pagination;