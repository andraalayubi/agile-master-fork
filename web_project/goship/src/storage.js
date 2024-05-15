const CACHE_KEY = "key";

function checkForStorage() {
  return typeof Storage !== "undefined";
}

function putHistory(data) {
  if (checkForStorage()) {
    let cookieData = null;
    if (localStorage.getItem(CACHE_KEY) === null) {
      cookieData = [];
    } else {
      cookieData = JSON.parse(localStorage.getItem(CACHE_KEY));
    }

    cookieData.unshift(data);

    localStorage.setItem(CACHE_KEY, JSON.stringify(cookieData));
  }
}

function showHistory() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
    return [];
  }
}

module.exports = {putHistory, showHistory}