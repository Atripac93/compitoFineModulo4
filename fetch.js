const API_URL ="https://striveschool-api.herokuapp.com/api/product/";
export async function fetchProductById= (productID) =>{
    const response = await fetch(`${API_URL}/${productID}`, {
        headers:{
            authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmYzVjZTczMjBjNjAwMThiOGYwMjEiLCJpYXQiOjE3MDYwMTgyNTQsImV4cCI6MTcwNzIyNzg1NH0.adHhNogNz7-k_4h2Ybx9AUqGFW2wG1785jJPSzE1d-E",

        },
    }
    );
    const product = await response.json();
    return product;
}

