const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";

//TO GET
export const putIntoProfile = async ({thisObj,id}) => {
    console.log(id);
    console.log(thisObj);
  try {
    const response = await fetch(`${PROFILES_URL}`, {
        method:'PUT',
        body:JSON.stringify(thisObj),
        headers: {
            'Content-Type':'application/json',
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo",
      },
    });
    console.log(PROFILES_URL+id)
    console.log(response)
    if (response.ok) {
        alert('Form was sent!')
    } else {
        console.log('error')
        alert('something went wrong')
    }
  } catch (error) {
    throw error;
  }
};