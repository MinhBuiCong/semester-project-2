import { navbar } from "./components/common/navbar.js";
import { menu } from "./components/common/menu.js";
import { getBestOfferApi } from "./ui/renderBestOfferCard.js";
import { getBestSellerApi } from "./ui/renderBestSellerCard.js";
import { getBanner } from "./components/heroBanner.js";
import { footer } from "./components/common/footer.js";

navbar();
menu();
// getBestOfferApi();
// getBestSellerApi();
getBanner();
footer();
