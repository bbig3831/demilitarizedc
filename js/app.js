// Init UI
const ui = new UI();

// Set states for state dropdown
const states = {
  'AL': {
    'name': 'Alabama',
    'ngUrl': 'https://al.ng.mil/'
  },
  'VA': {
    'name': 'Virginia',
    'ngUrl': 'https://va.ng.mil/'
  },
  'WY': {
    'name': 'Wyoming',
    'ngUrl': 'https://www.wyomilitary.wyo.gov/guard/army/'
  }
};

// Set states for dropdown
function initDropdownList(stateDict) {

  // Get dropdown element
  select = document.getElementById('stateSelect');

  // Create options
  for (const [stateCode, properties] of Object.entries(stateDict)) {
    var opt = document.createElement('option');
    opt.value = stateCode;
    opt.innerHTML = properties.name;
    select.appendChild(opt);
  }
};

initDropdownList(states);

// Set milliseconds per day constant
const _MS_PER_DAY = 1000 * 60 * 60 *24

// Days since date function
function calculateDaysDiff(startDate) {
  // Get today's date
  const today = new Date();
  const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const utcStartDate = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());

  return Math.floor((utcToday - utcStartDate) / _MS_PER_DAY)
}

// Date differences
// January 6th
const jan6 = new Date('2021-01-06T05:00:00+00:00'),
  jan6Diff = calculateDaysDiff(jan6),
  // January 20th - Inauguration
  jan20 = new Date('2021-01-20T05:00:00+00:00'),
  jan20Diff = calculateDaysDiff(jan20)
  // February 9th - Impeachment trail begins
  feb9 = new Date('2021-02-09T05:00:00+00:00'),
  feb9Diff = calculateDaysDiff(feb9)
  // March 4th - Congress stops work
  mar4 = new Date('2021-03-04T05:00:00+00:00'),
  mar4Diff = calculateDaysDiff(mar4)
;

// Set date differences in HTML page
document.getElementById('january-6').textContent = jan6Diff.toString();
document.getElementById('january-20').textContent = jan20Diff.toString();
document.getElementById('february-9').textContent = feb9Diff.toString();
document.getElementById('march-4').textContent = mar4Diff.toString();

// EasyHTTP class
class EasyHTTP {
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  };
}

// Get representative information
const apiKey = 'AIzaSyA0bOMkrZ4gSkm-YIx1Wd0kxQcZiR2hQ5w';
const http = new EasyHTTP;

// Listen for find representative event
document.querySelector('#findRepresentatives').addEventListener('click', findRepresentatives);

// Find representatives
function findRepresentatives() {
  // Get address components
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('stateSelect').value;
  const addressUri = encodeURIComponent(address.concat(', ', city, ', ', state));

  // GET request to Google Civic Info API
  http.get(`https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&levels=country&roles=legislatorLowerBody&roles=legislatorUpperBody&address=${addressUri}`)
  .then(data => ui.showRepresentatives(data.officials))
  .catch(err => console.log(err));
}

// Set Twitter href
let text = `
  ${jan6Diff.toString()} days since January 6th
  ${jan20Diff.toString()} days since the Inauguration
  ${feb9Diff.toString()} days since the start of the impeachment trial
  Tear down the Capitol fence!
`;
let twitterUrl = `https://twitter.com/share?text=${text}&hashtags=DemilitarizeDC`;
document.getElementById('twitterButton').href = twitterUrl;

// Set Facebook href
let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=example.org`;
document.getElementById('facebookButton').href = facebookUrl;
