import { navbar } from "./components/common/navbar.js";
import { menu } from "./components/common/menu.js";
import { breadcrumbs } from "./components/common/breadcrumbs.js";
import { footer } from "./components/common/footer.js";
import { getProductDetail } from "./ui/renderProductDetail.js";

getProductDetail();
navbar();
menu();
breadcrumbs();
footer();
