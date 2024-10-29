async function populateLocation() {
  const locationElement = document.querySelector(".location");
  const ipResponse = await fetch("https://api.ipify.org?format=json");
  const ipData = await ipResponse.json();
  const ip = await ipData.ip;
  const locationResponse = await fetch(
    `http://ip-api.com/json/${ip}?fields=region,city`
  );
  const locationData = await locationResponse.json();
  const location = `${locationData.city}, ${locationData.region}`;
  locationElement.innerText = location;
}

function populateCondition() {
  const condition = document.querySelector(".condition");
  const possibleConditions = ["Sunny", "Cloudy", "Snow", "Rain", "Anomaly"];
  const randomIndex = Math.floor(Math.random() * possibleConditions.length);
  const currentCondition = possibleConditions[randomIndex];
  condition.innerText = currentCondition;
}

function populateAdvisory() {
  const advisory = document.querySelector(".advisory");
  const possibleAdvisories = [
    "High risk of anomalies in your area. Please stay indoors.",
  ];
  const randomIndex = Math.floor(Math.random() * possibleAdvisories.length);
  const currentAdvisory = possibleAdvisories[randomIndex];
  advisory.innerText = currentAdvisory;
}
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
populateLocation();
populateCondition();
populateAdvisory();
