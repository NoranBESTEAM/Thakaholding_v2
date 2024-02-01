import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//import Normalize
import "normalize.css";

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

// import Wow Library
import "animate.css";

//add icons to the library
library.add(fas, far, fab);

const app = createApp(App);
app.use(store);
//Add font awesome icon component
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
