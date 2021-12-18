import { api } from "../settings/api.js"
import { getToken } from "../storage/storage.js"

const form = document.querySelector("#addForm")
const getProducts = api + "/products"


export async function renderAddPage(){
  let product = {};
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  
  if(id){
    let productDetail =  api + "/products/" + id;
    const response = await fetch(productDetail);
    product = await response.json();
  }
    form.innerHTML =`<input id="id" type="hidden" value="${product.id || ''}"/>
                      <div>
                      <label for="name">Name</label>
                      <input class="form-control"id="name" type="text" placeholder="title" value="${product.name || ''}" required />
                        </div>
                          <div>
                        <label for="price">Price</label>
                        <input class="form-control"id="price"type="number" placeholder="price" value="${product.price || ''}" required />
                        </div>
                        <div>
                       <label for="description">Description</label>
                          <input class="form-control"id="description"type="text" placeholder="description" value="${product.description || ''}" required />
                    </div>
                      <div>
                        <label for="feature">Feature Type</label> 
                        <select class="form-control" id="feature">
                          <option value="NONE" ${product.feature === 'NONE' ? 'selected' : ''}>
                            None
                          </option>
                          <option value="FEATURED_OFFER" ${product.feature === 'FEATURED_OFFER' ? 'selected' : ''}>
                            Best Offer
                          </option>
                          <option value="FEATURED_SELLER" ${product.feature === 'FEATURED_SELLER' ? 'selected' : ''}>
                            Best Seller
                          </option>
                        </select>
                       </div>
                         <div class="${product.id ? 'd-none' : ''}">
                             <label for="image">Image</label>
                          <input class="form-control" id="image"type="file" ${product.id ? '' : 'required'} >
                          </div>
                        <button class="btn btn-primary"type="submit" >
                          ${product.id ? 'Update' : 'Create'}
                        </button>
                                `
}




window.submitProduct = async function submitProduct(){
    let formData = new FormData();
    
    let productId = document.getElementById("id").value || '';
    let name = document.getElementById("name");
    let price = document.getElementById("price");
    let description = document.getElementById("description");
    let feature = document.getElementById("feature");
    let image = document.getElementById("image");

    let data = {
      id: productId.value,
      name: name.value,
      price: price.value,
      description: description.value,
      feature: feature.value,
    };

    if (!productId) {
      formData.append(`files.image`, image.files[0], image.files[0].id)
    }

    formData.append('data', JSON.stringify(data));

    let req = new XMLHttpRequest();
 
    req.open(productId ? 'PUT':'POST', getProducts + '/' + productId);
    req.setRequestHeader('Authorization', `Bearer ${getToken()}`);
    console.log(`req`, req)
    req.send(formData);

  
    location.href = "/product-page.html"

    

   
    
    
}