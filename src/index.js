import "@lwc/synthetic-shadow";

import { createElement } from "lwc";
import MyApp from "ui/app";

const app = createElement("ui-app", { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector("#main").appendChild(app);
