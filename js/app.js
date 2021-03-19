// Init UI
const ui = new UI();

// Set states for state dropdown
const states = {
  'AL': {
    'name': 'Alabama',
    'ngUrl': 'https://al.ng.mil/'
  },
  'AK': {
    'name': 'Alaska',
    'ngUrl': 'https://ak.ng.mil/'
  },
  'AZ': {
    'name': 'Arizona',
    'ngUrl': 'https://dema.az.gov/army-national-guard'
  },
  'AK': {
    'name': 'Arkansas',
    'ngUrl': 'https://arkansas.nationalguard.mil/'
  },
  'CA': {
    'name': 'California',
    'ngUrl': 'https://calguard.ca.gov/'
  },
  'CO': {
    'name': 'Colorado',
    'ngUrl': 'https://co.ng.mil/'
  },
  'CT': {
    'name': 'Connecticut',
    'ngUrl': 'https://ct.ng.mil/Pages/default.aspx'
  },
  'DE': {
    'name': 'Delaware',
    'ngUrl': 'https://www.de.ng.mil/'
  },
  'DC': {
    'name': 'District of Columbia',
    'ngUrl': 'https://dc.ng.mil/'
  },
  'FL': {
    'name': 'Florida',
    'ngUrl': 'https://fl.ng.mil/Pages/Home.aspx'
  },
  'GA': {
    'name': 'Georgia',
    'ngUrl': 'https://www.nationalguard.com/select-your-state/GA'
  },
  'GU': {
    'name': 'Guam',
    'ngUrl': 'https://www.nationalguard.com/select-your-state/USGU'
  },
  'HI': {
    'name': 'Hawaii',
    'ngUrl': 'http://dod.hawaii.gov/hiarng/'
  },
  'ID': {
    'name': 'Idaho',
    'ngUrl': 'https://www.imd.idaho.gov/idaho-army-national-guard/'
  },
  'IL': {
    'name': 'Illinois',
    'ngUrl': 'https://www.il.ngb.army.mil/'
  },
  'IN': {
    'name': 'Indiana',
    'ngUrl': 'https://www.in.ng.mil/'
  },
  'IA': {
    'name': 'Iowa',
    'ngUrl': 'https://www.iowanationalguard.com/'
  },
  'KS': {
    'name': 'Kansas',
    'ngUrl': 'http://www.kansastag.gov/'
  },
  'KY': {
    'name': 'Kentucky',
    'ngUrl': 'https://kentuckyguard.dodlive.mil/'
  },
  'LA': {
    'name': 'Louisiana',
    'ngUrl': 'https://geauxguard.la.gov/'
  },
  'ME': {
    'name': 'Maine',
    'ngUrl': 'https://www.me.ng.mil/'
  },
  'MD': {
    'name': 'Maryland',
    'ngUrl': 'https://military.maryland.gov/ng/'
  },
  'MA': {
    'name': 'Massachusetts',
    'ngUrl': 'https://www.massnationalguard.org/'
  },
  'MI': {
    'name': 'Michigan',
    'ngUrl': 'https://minationalguard.dodlive.mil/'
  },
  'MN': {
    'name': 'Minnesota',
    'ngUrl': 'https://minnesotanationalguard.ng.mil/'
  },
  'MS': {
    'name': 'Mississippi',
    'ngUrl': 'https://ms.ng.mil/'
  },
  'MO': {
    'name': 'Missouri',
    'ngUrl': 'https://www.moguard.ngb.mil/'
  },
  'MT': {
    'name': 'Montana',
    'ngUrl': 'https://montanaguard.net/'
  },
  'NE': {
    'name': 'Nebraska',
    'ngUrl': 'https://ne.ng.mil/'
  },
  'NV': {
    'name': 'Nevada',
    'ngUrl': 'https://nv.ng.mil/'
  },
  'NH': {
    'name': 'New Hampshire',
    'ngUrl': 'https://nh.ng.mil/'
  },
  'NJ': {
    'name': 'New Jersey',
    'ngUrl': 'https://www.nj.gov/military/guard/'
  },
  'NM': {
    'name': 'New Mexico',
    'ngUrl': 'https://www.dma.state.nm.us/'
  },
  'NY': {
    'name': 'New York',
    'ngUrl': 'http://www.dmna.state.ny.us/'
  },
  'NC': {
    'name': 'North Carolina',
    'ngUrl': 'https://nc.ng.mil/'
  },
  'ND': {
    'name': 'North Dakota',
    'ngUrl': 'https://www.ndguard.nd.gov/'
  },
  'OH': {
    'name': 'Ohio',
    'ngUrl': 'https://ong.ohio.gov/'
  },
  'OK': {
    'name': 'Oklahoma',
    'ngUrl': 'https://ok.ng.mil/'
  },
  'OR': {
    'name': 'Oregon',
    'ngUrl': 'https://www.oregon.gov/omd/ONG/'
  },
  'PA': {
    'name': 'Pennsylvania',
    'ngUrl': 'https://www.pa.ng.mil/'
  },
  'PR': {
    'name': 'Puerto Rico',
    'ngUrl': 'https://nationalguard.com/select-your-state/USPR'
  },
  'RI': {
    'name': 'Rhode Island',
    'ngUrl': 'https://ri.ng.mil/'
  },
  'SC': {
    'name': 'South Carolina',
    'ngUrl': 'https://www.scguard.ng.mil/'
  },
  'SD': {
    'name': 'South Dakota',
    'ngUrl': 'https://sd.ng.mil/'
  },
  'TN': {
    'name': 'Tennessee',
    'ngUrl': 'https://www.tn.gov/military/'
  },
  'TX': {
    'name': 'Texas',
    'ngUrl': 'https://tmd.texas.gov/state-guard'
  },
  'UT': {
    'name': 'Utah',
    'ngUrl': 'https://ut.ng.mil/'
  },
  'VT': {
    'name': 'Vermont',
    'ngUrl': 'https://vt.public.ng.mil/'
  },
  'VI': {
    'name': 'Virgin Islands',
    'ngUrl': 'https://vi.ng.mil/'
  },
  'VA': {
    'name': 'Virginia',
    'ngUrl': 'https://va.ng.mil/'
  },
  'WA': {
    'name': 'Washington',
    'ngUrl': 'https://mil.wa.gov/army-guard'
  },
  'WV': {
    'name': 'West Virginia',
    'ngUrl': 'https://www.wv.ng.mil/'
  },
  'WI': {
    'name': 'Wisconsin',
    'ngUrl': 'https://dma.wi.gov/DMA/'
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
