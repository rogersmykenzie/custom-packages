export function looseCheckUrl(pathToMatch, actualPath) {
  for (let i = 0; i < pathToMatch.length; i++) {
    if (pathToMatch[i] !== actualPath[i]) {
      return false;
    }
  }
  return true;
}

export function strictCheckUrl(url1, url2) {
  if (url1 === url2) {
    return true;
  }
  return false;
}

export function getCurrUrl() {
  return window.location.href.substring(
    window.location.href.indexOf("/#/") + 2
  );
}
