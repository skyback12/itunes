import Product from "../models/product.js";
import doNetworkCall from "./api-client.js";

const productOperations = {
    sort(){

    },
    search(){

    },
    async readAllProducts(){
        const object=await doNetworkCall();
        const musics=object['results'];
        const products=[];
        for(let music of musics){
            const product=new Product(music.artworkUrl100,
                music.trackName,music.releaseDate,
                music.primaryGenreName,
                music.collectionPrice,
                music.trackViewUrl)
            products.push(product);
        }
        return products;
    }
}
export default productOperations;