function showCard(product){
    const col = document.createElement('div'); //<div class="col-4">
    col.className = 'col-4';
    const cardDiv = document.createElement('div'); //<div>
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem;";
    const img = document.createElement('img');
    img.src = product.artworkUrl100;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = product.trackName + " "+" Rs"+product.collectionPrice;
    const pTag = document.createElement('p');
    pTag.innerText  = "Genre:"+" "+ product.primaryGenreName +" " + "Date:" +" "+ product.releaseDate;
    pTag.className = 'card-text';
    const music =document.createElement('audio');
    music.controls='controls';
    music.src=product.previewUrl;
    music.className='music';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(music);
    cardDiv.appendChild(cardBody);
    const button = document.createElement('button');
    button.innerText = 'Download';
    button.className = 'btn btn-primary';
    cardBody.appendChild(button);
    col.appendChild(cardDiv);
    document.querySelector('#output').appendChild(col);  
  }

import productOperations from "../services/product-operations.js";
async function showProducts(){
    const products= await productOperations.readAllProducts();
// console.log("products are",products);
    for(let product of products){
    showCard(product);
    }
}
showProducts();