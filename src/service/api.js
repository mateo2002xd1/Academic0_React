import axios from "axios";

const api = axios.create(
    {
        baseURL: import.meta.env.VITE_API_URL
    }
);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if (token){
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if(error.response.status==401){
            const refreshToken = {refreshToken: localStorage.getItem("refreshToken")};
            try {

                const res = await axios.post(
                    import.meta.env.VITE_API_URL + "/auth/refresh",
                    refreshToken
                );

                localStorage.setItem("accessToken", res.data.token);
                return api(error.config);

            } catch (e) {
                localStorage.clear();
                return Promise.reject(e);
            }
        }
    }
);

export default api;