//installato axios per gesire meglio api
import axios from "axios";

//creare un basUrl usando il metodo create di axios e salvare il root del api in un variabile
const client = axios.create({
    baseURL: "https://fakestoreapi.com"
})

//creaer un async function che prende il baseUrl da func del client e aggiunge la parte finale del api
export async function getProducts(){
    //usando {data} evitiamo di scrivere data.data 
    const {data} = await client("/products");
    return data;
}

export async function getProduct(id: string | number){
    const {data} = await client(`/products/${id}`);
    return data;
}
