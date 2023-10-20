import api from "../axios";

const useUsersApi = {
    searchProfile: async (date="sunnatbek07") => api.get(`/users/${date}`, { cache: 'force-cache' }),
    followers: async (date="sunnatbek07") => api.get(`/users/${date}/followers`),
    following: async (date="sunnatbek07") => api.get(`/users/${date}/following`),
    repositories: async (date="sunnatbek07") => api.get(`/users/${date}/repos`),
    stars: async (date="sunnatbek07") => api.get(`/users/${date}/starred`),
}

export default useUsersApi;