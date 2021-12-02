import { navbar } from "./components/navbar.js";
import { menu } from "./components/menu.js";
import { breadcrumbs } from "./components/breadcrumbs.js";
import { footer } from "./components/footer.js";
import { getProductDetail } from "./ui/renderProductDetail.js";

getProductDetail();
navbar();
menu();
breadcrumbs();
footer();
