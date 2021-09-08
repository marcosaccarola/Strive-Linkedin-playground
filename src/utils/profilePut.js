const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
let bearer="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM2MGQ1MzdiZTZjMTAwMTVmOWRiYWMiLCJpYXQiOjE2MzA5MzIzMDgsImV4cCI6MTYzMjE0MTkwOH0.ccNFpfohtzhVZFHsX3mCcN4cwHuPiExPCIeBxs1nrTo"
//
//TO PUT
export const putIntoProfile = async ({thisObj,id}) => {
    console.log(id);
    console.log(thisObj);
    if(id==='613884772068d2001522b4c6'){
      bearer="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4ODQ3NzIwNjhkMjAwMTUyMmI0YzYiLCJpYXQiOjE2MzEwOTM4ODAsImV4cCI6MTYzMjMwMzQ4MH0.Ckf38QVqF801iXzjIknOZtireFH6vgeoNw9nXSiH7cA"
    }
    if(id==='613888102068d2001522b4d4'){
      bearer="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM4ODgxMDIwNjhkMjAwMTUyMmI0ZDQiLCJpYXQiOjE2MzEwOTQ4MDAsImV4cCI6MTYzMjMwNDQwMH0.5U4TIdYxh2YFwTVkvYg4muu1_s4EW1EEsP_E0rZLESA"
    }

  try {
    const response = await fetch(`${PROFILES_URL}`, {
        method:'PUT',
        body:JSON.stringify(thisObj),
        headers: {
            'Content-Type':'application/json',
        Authorization:
          `${bearer}`,
      },
    });
    console.log(PROFILES_URL+id)
    //console.log(response)
    if (response.ok) {
        alert('Form was sent!')
    } else {
        //console.log('error')
        throw new Error("changes not posted");
        //alert('something went wrong')
    }
  } catch (error) {
    throw error;
  }
};