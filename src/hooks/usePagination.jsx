import {useMemo} from "react";
import {getPagesArray} from "../utils/pages";


export const usePagination = (totalPages) => {
  return useMemo(() => {
    return getPagesArray(totalPages)
  }, [totalPages])
}