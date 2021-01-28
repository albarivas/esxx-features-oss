import { LightningElement } from 'lwc';

export default class DynamicImport extends LightningElement {
    dynamicImport() {
        import('ui/utils')
            .then((obj) => obj.print())
            .catch((err) => console.log('Error loading module' + err));
    }

    get code() {
        return this.dynamicImport.toString();
    }
}
