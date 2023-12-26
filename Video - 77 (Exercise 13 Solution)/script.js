function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else if (views > 1000) {
    viewStr = views / 1000 + "K";
  }

  let CompleteHTML = `<div class="card">
      <div class="img">
        <img
          src="${thumbnail}"
          alt=""
        />
        <div class="capsule">${duration}</div>
        </div>

      <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months old</p>
      </div>
    </div>`;

  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + CompleteHTML;
}

createCard(
  "Introduction To Backend | Sigma Web Dev Video #02",
  "CodeWithHarry ",
  4567000,
  9,
  31,
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
  "Introduction To Backend | Sigma Web Dev Video #02",
  "CodeWithHarry ",
  4567000,
  9,
  51,
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
  "Introduction To Backend | Sigma Web Dev Video #02",
  "CodeWithHarry ",
  4532600,
  9,
  35,
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
  "Introduction To Backend | Sigma Web Dev Video #02",
  "CodeWithHarry ",
  4000000,
  9,
  35,
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
createCard(
  "Introduction To Backend | Sigma Web Dev Video #02",
  "CodeWithHarry ",
  89000,
  9,
  35,
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
