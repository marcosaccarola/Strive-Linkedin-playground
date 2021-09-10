const POST_URL = "https://striveschool-api.herokuapp.com/api/posts/";


export const getPosts = async () => {
  try {
    const response = await fetch(`${POST_URL}`, {
    
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
      },
    });

    if (response.ok) {
      console.log(response)
      const data = await response.json();
      
      return data;
    } else {
      throw new Error("error:");
    }
  } catch (error) {
    throw error;
  }
};