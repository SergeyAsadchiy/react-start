import axios from "axios";

export default class PostsService {
  static async getAll(limit = 10, page = 1) {
    const config = {
      params: {
        _limit: limit,
        _page: page
      }
    }

    return await axios.get('https://jsonplaceholder.typicode.com/posts', config)
  }

  static async getById(id) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  }

  static async getCommentsById(id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  }
}