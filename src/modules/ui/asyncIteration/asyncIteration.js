import { LightningElement } from "lwc";

export default class AsyncIteration extends LightningElement {
  async asyncIteration() {

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    const iterables = [
      sleep(1000).then(() => { console.log("Promise 1 resolved"); return "Astro";}),
      sleep(3000).then(() => { console.log("Promise 2 resolved"); return "Codey";}),
      sleep(2000).then(() => { console.log("Promise 3 resolved"); return "Appy";})
    ];

    const mascots = [];
    const startTimestamp = Date.now();
    for await (const obj of iterables) {
      console.log(`${obj} arrived in ${Date.now() - startTimestamp} ms!`);
      mascots.push(obj);
    }

    console.log(`These mascots went to the party:${mascots.join(',')}`);

    /* expected ouput
        Promise 1 resolved
        Astro arrived in 1000 ms!
        Promise 3 resolved
        Promise 2 resolved
        Codey arrived in 3000 ms!
        Appy arrived in 3000 ms!
        These mascots went to the party:Astro,Codey,Appy
    */
  }

  get code() {
    return this.asyncIteration.toString();
  }
}
