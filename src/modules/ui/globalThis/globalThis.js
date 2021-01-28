import { LightningElement } from 'lwc';

export default class GlobalThis extends LightningElement {
    globalThis() {
        console.log(typeof globalThis.XMLHttpRequest === 'function');
        // expected output: true
    }

    get code() {
        return this.globalThis.toString();
    }
}
