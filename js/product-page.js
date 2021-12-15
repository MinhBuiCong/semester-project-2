import { navbar } from "./components/common/navbar.js";
import { menu } from "./components/common/menu.js";
import { breadcrumbs } from "./components/common/breadcrumbs.js";
import { getProductApi } from "./ui/renderProducts.js";
import { editProducts } from "./components/editProducts.js";
import { footer } from "./components/common/footer.js";

navbar();
menu();
breadcrumbs();
getProductApi();
editProducts();
footer();
