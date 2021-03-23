// UI class
class UI {
  // Constructor
  constructor() {
    this.addressInput = document.querySelector('#address');
    this.addressSubmit = document.querySelector('#address');
    this.representativeList = document.querySelector('#representativeList');
  }

  // Show representatives
  showRepresentatives(reps) {
    let output = '';

    reps.forEach(rep => {
      // Get social media data
      let facebookId = rep.channels.find(x => x.type === 'Facebook').id;
      let twitterId = rep.channels.find(x => x.type === 'Twitter').id;

      output += `
        <div class="col s12 l6">
          <div class="card horizontal">
            <div class="card-image valign-wrapper">
              <img src="${rep.photoUrl}" alt="Photo of ${rep.name}" srcset="">
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <h5>${rep.name}</h5>
                <p>${rep.party}</p>
                <p>${rep.address[0].line1}</p>
                <p>${rep.address[0].city}, ${rep.address[0].state} ${rep.address[0].zip}</p>
                <br>
                <a href="tel:${rep.phones[0]}"><i class="material-icons" style="vertical-align: -6px">call</i> ${rep.phones[0]}</a>
              </div>
              <div class="card-action">
                <a href="${rep.urls[0]}"><i class="material-icons small materialize-red-text">public</i></a>
                <a href="https://www.facebook.com/${facebookId}"><i class="material-icons small materialize-red-text">facebook</i></a>
                <a href="https://www.twitter.com/${twitterId}"><i class="material-icons small materialize-red-text">flutter_dash</i></a>
              </div>
            </div>
          </div>
        </div>
      `
    });

    this.representativeList.innerHTML = output
  }
}
