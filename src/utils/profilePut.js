const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";

//TO GET
export const putIntoProfile = async ({thisObj}) => {
  try {
    const response = await fetch(`${PROFILES_URL}`, {
        method:'PUT',
        body:JSON.stringify(thisObj),
        headers: {
            'Content-type':'application/json',
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error("ERR FETCHING:");
    }
  } catch (error) {
    throw error;
  }
};