import { navbar } from "./components/navbar.js";
import { menu } from "./components/menu.js";
import { getBestOfferApi } from "./ui/renderBestOfferCard.js";
import { getBestSellerApi } from "./ui/renderBestSellerCard.js";
import { getBanner } from "./components/heroBanner.js";
import { footer } from "./components/footer.js";

navbar();
menu();
getBestOfferApi();
getBestSellerApi();
getBanner();
footer();
