import { navbar } from "./components/common/navbar.js";
import { menu } from "./components/common/menu.js";
import { breadcrumbs } from "./components/common/breadcrumbs.js";
import { createCartContent } from "./ui/renderCartItem.js";
import { footer } from "./components/common/footer.js";

navbar();
menu();
breadcrumbs();
createCartContent();
footer();
