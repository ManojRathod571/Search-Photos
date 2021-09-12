import axios from "axios";

export default axios.create({ // create method going to create instance of the axios client which is has some default properties
    baseURL: "https://api.unsplash.com",
    headers: { // we need authorization to get data from this endpoint so we have an authorization key 
        Authorization:
            "Client-ID 8e89kWmUOsV0O2jolA2PSWW6lvF5jErwwBn7Gdu3LMY" // this is the access key
    }
})

