import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    es2021 = true;
    es2020 = false;
    es2019 = false;
    es2018 = false;

    showEs2021() {
        this.es2021 = true;
        this.es2020 = false;
        this.es2019 = false;
        this.es2018 = false;
    }

    showEs2020() {
        this.es2021 = false;
        this.es2020 = true;
        this.es2019 = false;
        this.es2018 = false;
    }

    showEs2019() {
        this.es2021 = false;
        this.es2020 = false;
        this.es2019 = true;
        this.es2018 = false;
    }

    showEs2018() {
        this.es2021 = false;
        this.es2020 = false;
        this.es2019 = false;
        this.es2018 = true;
    }
}
