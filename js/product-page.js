import { navbar } from "./components/common/navbar.js";
import { menu } from "./components/common/menu.js";
import { breadcrumbs } from "./components/common/breadcrumbs.js";
import { getProductApi } from "./ui/renderProducts.js";
import { footer } from "./components/common/footer.js";

navbar();
menu();
breadcrumbs();
getProductApi();
footer();
