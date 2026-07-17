import axios from "axios";

const api = axios.create(
    {
        baseURL: "http://localhost:8080"
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
                    "http://localhost:8080/auth/refresh",
                    refreshToken
                );

                localStorage.setItem("accessToken", res.data.token);
                return api(error.config);

            } catch (e) {

                return Promise.reject(e);
            }
        }
    }
);

export default api;