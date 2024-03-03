import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//import Normalize
import "normalize.css";

// import Fonts
import "@/assets/scss/style.scss";

// import Wow Library
import "animate.css";

//import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

//import font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//import specific icons
//Regular Icons
import { far } from "@fortawesome/free-regular-svg-icons";
//Solid Icons
import { fas } from "@fortawesome/free-solid-svg-icons";
//Brands Icons
import { fab } from "@fortawesome/free-brands-svg-icons";

// import Navbar Component
import Navbar from "@/components/layouts/Navbar.vue";
import NavbarGeneral from "@/components/layouts/NavbarGeneral.vue";

// import Footer Component
import Footer from "@/components/layouts/Footer.vue";

// Swiper imports
import SwiperClass, { Pagination, Keyboard, Mousewheel, Autoplay } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'
import 'swiper/css/pagination'
// Use swiper modules
SwiperClass.use([Pagination, Keyboard, Mousewheel, Autoplay])

//add icons to the library
library.add(fas, far, fab);

const app = createApp(App);
app.use(store);
//Add font awesome icon component
app.component("font-awesome-icon", FontAwesomeIcon);
//Add Navbar Component
app.component('Navbar', Navbar);
app.component('NavbarGeneral', NavbarGeneral);
// Add Footer Component
app.component('Footer', Footer);
// Add Swiper Component
app.use(VueAwesomeSwiper)
app.use(router);
app.mount("#app");
