import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
  return useMemo(() => {
    return sort
      ? [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
      : posts
  }, [posts, sort])
}

export const usePosts = (posts, sort,  query) => {
  const sortedPosts = useSortedPosts(posts, sort)

  return useMemo(() => {
    return sortedPosts.filter(e => e.body.toLowerCase().includes(query.toLowerCase()))
  }, [sortedPosts, query])
}