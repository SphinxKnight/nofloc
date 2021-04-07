let changeHeaders = function (details) {
  details.responseHeaders.forEach(function (header) {
    if (header.name.toLowerCase() == "permissions-policy") {
      const rawValue = header.value;
      let noInterestCohort = rawValue.replace(/interest-cohort=.*?,?/, "");
      header.value = noInterestCohort;
      if (header.value === "") {
        header.value = "interest-cohort=()";
      } else {
        header.value = "interest-cohort=()," + header.value;
      }
    } else {
      details.responseHeaders.push({
        "name": "Permissions-Policy",
        "value": "interest-cohort=()"
      })
    }
  });
  return {
    responseHeaders: details.responseHeaders
  };
};


chrome.webRequest.onHeadersReceived.addListener(
  changeHeaders, {
    urls: ["<all_urls>"]
  },
  ["responseHeaders", "blocking"]
);