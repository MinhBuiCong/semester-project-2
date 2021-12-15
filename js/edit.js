import { navbar } from "./components/common/navbar.js";
import { menu } from "./components/common/menu.js";
import { footer } from "./components/common/footer.js";
import { api} from "./settings/api.js"
import {getToken} from "./storage/storage.js"



navbar();
menu();
footer();

const getProducts = api + "/products"



window.submitProduct = async function submitProduct(){
    let formData = new FormData();
    let data = {};

    let elements = document.getElementById("editForm").elements;

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        console.log(`element`, element.name);
        if (!['submit', 'file'].includes(element.type)) {
            data[element.id] = element.value;
        } else if (element.type === 'file') {
            let file = element.files[0];
            if (!file) continue
            formData.append(`files.${element.id}`, element.files[0], element.files[0].id)
        }
    };

    console.log(`data`, data)
    formData.append('data', JSON.stringify(data));
    console.log(`string`, JSON.stringify(data))
    let req = new XMLHttpRequest();
    
    req.open('POST', getProducts);
    req.setRequestHeader('Authorization', `Bearer ${getToken()}`);
    req.send(formData);
    
}
