// export const BASE_URL=http://192.168.1.5:5000

export const BASE_URL="https://luxchono.onrender.com"

export const prepareHeaders = (headers: any) => {
    const token = localStorage.getItem("lw-token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  };
  
  