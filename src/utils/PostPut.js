const POST_URL = "https://striveschool-api.herokuapp.com/api/posts/";
let bearer="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo"

//TO GET
export const putIntoPost = async ({thisNewPost}) => {
    
    console.log(thisNewPost);

  try {
    const response = await fetch(`${POST_URL}`, {
        method:'POST',
        body:JSON.stringify(thisNewPost),
        headers: {
            'Content-Type':'application/json',
        Authorization:
          `${bearer}`,
      },
    });
    console.log(POST_URL)
    console.log(response)
    if (response.ok) {
        alert('NEW POST CREATE')
    } else {
        console.log('error')
        alert('oi oi')
    }
  } catch (error) {
    throw error;
  }
};