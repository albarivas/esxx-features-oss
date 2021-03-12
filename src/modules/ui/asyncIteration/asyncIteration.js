import { LightningElement } from "lwc";

export default class AsyncIteration extends LightningElement {
  async asyncIteration() {
      async function* fetchLwcRecipesCommits(repo) {
        let url = "https://api.github.com/repos/trailheadapps/lwc-recipes/commits";
      
        while (url) {
          // GitHub API responds with a JSON of 30 commits
          // providing a link to the next page in the Link header 
          const response = await fetch(url);
      
          const body = await response.json();
      
          // Extract URL for the next page
          let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
          url = (nextPage) ? nextPage[1] : undefined;

          for(let commit of body) { //Yield commits one by one, until the page ends
            yield commit;
          }
        }
      }

      for await (const commit of fetchLwcRecipesCommits()) {
        console.log(commit.author.login);
      }
  }

  get code() {
    return this.asyncIteration.toString();
  }
}
