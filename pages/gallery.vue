<template>
    <div>
        <h1>GALLERY</h1>
    </div>
</template>

<script>
  

export default {

    
}


/*const API_URL = 'https://www.deviantart.com/oauth2/authorize';

const REQUEST_HEADERS = {
    'response_type': 'code',
    'client_id': '13888',
    'redirect_uri': 'http://localhost:3000/gallery',
    
};  */


/*const API_URL = 'https://www.deviantart.com/oauth2/token';

const REQUEST_HEADERS = {
    'grant_type': 'client_credentials',
    'client_id': '13888',
    'client_secret': 'a595cc89bb9fabd4ce32462f78f9abff',   
}; 

    axios.get(API_URL, { headers: REQUEST_HEADERS })

          .then(response => {
              const data = response.data;
            console.log('data', data); 
            console.log('access_token');  
            // Calling a callback function with data from the server
          })
          .catch(error => console.error(error))

/*)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });*/
</script>

