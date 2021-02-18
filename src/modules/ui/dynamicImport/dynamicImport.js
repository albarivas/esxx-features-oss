import { LightningElement } from "lwc";

export default class DynamicImport extends LightningElement {
    dynamicImport() {
        import("ui/utils")
            .then((obj) => obj.dance("Astro", "salsa"))
            .catch((err) => console.log("Error loading module" + err));
            // expected output: Astro danced salsa
    }

    get code() {
        return this.dynamicImport.toString();
    }
}
