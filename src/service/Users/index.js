import api from "../axios";

const useUsersApi = {
    searchProfile: async (date="sunnatbek07") => api.get(`/users/${date}`, { cache: 'force-cache' }),
    followers: async (date="sunnatbek07") => api.get(`/users/${date}/followers`),
    following: async (date="sunnatbek07") => api.get(`/users/${date}/following`),
    followers: async (date="sunnatbek07") => api.get(`/users/${date}/followers`),
    stars: async (date="sunnatbek07") => api.get(`/users/${date}/starred`),
}

export default useUsersApi;