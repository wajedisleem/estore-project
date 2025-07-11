const setupAxios = (axios) => {
  axios.defaults.headers.Accept = 'application/json';
  axios.defaults.withCredentials = true;
  axios.interceptors.request.use(
    (config) => {
      const currentLanguage = localStorage.getItem('store-lang') || 'en';
      config.headers['Accept-Language'] = currentLanguage;

      const token = localStorage.getItem('estore-auth');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    async (err) => await Promise.reject(err)
  );
};

export { setupAxios };