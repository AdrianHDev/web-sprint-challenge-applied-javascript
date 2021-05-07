const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let headerElement = document.createElement('div');
  let dateElement = document.createElement('span');
  let titleElement = document.createElement('h1');
  let tempElement = document.createElement('temp');

  headerElement.classList.toggle('header');
  dateElement.classList.toggle('date');
  tempElement.classList.toggle('temp');
  dateElement.textContent = date;
  titleElement.textContent = title;
  tempElement.textContent = temp;

  headerElement.append(dateElement, titleElement, tempElement);
  return headerElement;
}

const headerAppender = (selector) => {
  let elemToAppendTo = document.querySelector(selector);
  elemToAppendTo.appendChild(Header('Saint Thomas', "05/7/2021","45°F"));
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
