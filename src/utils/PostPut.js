const POST_URL = "https://striveschool-api.herokuapp.com/api/posts/";
let bearer =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo";

export const putIntoPost = async ({ thisNewPost }) => {
  try {
    const response = await fetch(`${POST_URL}`, {
      method: "POST",
      body: JSON.stringify({ thisNewPost }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `${bearer}`,
      },
    });

    if (response.ok) {
      console.log(response);
      alert("NEW POST CREATE");
    } else {
      console.log("error");
      alert("oi oi");
    }
  } catch (error) {
    throw error;
  }
};
