export const getTokenFromUrl = (url: string | URL) => {
    const params = new URLSearchParams(new URL(url).search);
    return params.get("token");
};