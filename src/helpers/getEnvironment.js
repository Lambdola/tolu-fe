let dotEnv = import.meta.env;

let baseUrl;
if (dotEnv.MODE === "development") {
  baseUrl = dotEnv.VITE_DEV_URL;
} else {
  baseUrl = dotEnv.VITE_PROD_URL;
}

export default baseUrl;