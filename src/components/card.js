const axios = require('axios');

const Card = (article) => {
  let articleCard = document.createElement('div');
  let headlineDiv = document.createElement('div');
  let authorDiv = document.createElement('div');
  let imgContainer = document.createElement('div');
  let articleImg = document.createElement('img');
  let authorSpan = document.createElement('span');
  
  headlineDiv.classList.add('headline');
  articleCard.classList.add(`card`)
  articleCard.classList.add(`${article[0]}-card`);
  authorDiv.classList.add('author');
  imgContainer.classList.add('img-container');
  
  headlineDiv.textContent = article[1].headline;
  authorSpan.textContent = `By ${article[1].authorName}`;
  articleImg.src = article[1].authorPhoto;

  articleCard.append(headlineDiv, authorDiv);
  authorDiv.append(imgContainer, authorSpan);
  imgContainer.appendChild(articleImg);
  articleCard.addEventListener('click', () => {
    console.log(article.headline);
  })
  return articleCard;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  let elemToAppendTo = document.querySelector(selector);
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  let articles = [] ;
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(result => {
    Object.values(result.data.articles).forEach((darticles, index) => {
      darticles.forEach((article) => {
        articles.push([Object.keys(result.data.articles)[index], article]);
        console.log(articles);
      })
    })
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    articles.forEach(article => {
      elemToAppendTo.appendChild(Card(article));
    })
  })
}

export { Card, cardAppender }
