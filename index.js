console.log("Successfully loaded scripts! Good job!");

function populateNews() {
  newsItems = [
    {
      headline: "You'll never guess what that weird little guy did this time.",
      location: "/",
    },
    { headline: "This pop star is actually seven crows in a trenchcoat" },
    { headline: "Company announces subscription service for ad-free reality" },
    {
      headline:
        'WMO to move away from human names for hurricanes. "Not terrifying enough." says spokesperson. ',
    },
  ];

  function shortenHeadline(headline, limit) {
    if (headline.length <= limit) {
      return headline;
    } else {
      return `${headline.slice(0, limit)}...`;
    }
  }

  const news = document.querySelector(".news-container");
  const currentHeadlines = document.createDocumentFragment();
  newsItems.forEach((item) => {
    let newsItem;
    if (!item.location) {
      newsItem = document.createElement("button");
      newsItem.addEventListener("pointerup", (e) => {
        e.preventDefault();
        alert("No.");
      });
    } else {
      newsItem = document.createElement("a");
      newsItem.href = item.location;
    }
    newsItem.innerText = shortenHeadline(item.headline, 40);
    newsItem.classList.add("news-item");

    currentHeadlines.appendChild(newsItem);
  });

  news.appendChild(currentHeadlines);
}

const dateTimeDisplay = document.querySelector(".date-time");
const newsItemElements = document.querySelectorAll(".headline");
function updateDateTime() {
  const now = new Date();
  dateTimeDisplay.innerText = `${now.toLocaleDateString("default", {
    month: "long",
    year: "numeric",
    day: "numeric",
  })} | ${now.toLocaleTimeString("default", {
    hour: "numeric",
    minute: "numeric",
  })}`;
}

updateDateTime();
populateNews();
