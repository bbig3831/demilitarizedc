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
    let output = '<ul class="collection">';

    reps.forEach(rep => {
      // Get social media data
      let facebookId = rep.channels.find(x => x.type === 'Facebook');
      let twitterId = rep.channels.find(x => x.type === 'Twitter');

      output += `
        <li class="collection-item avatar">
          <img src="${rep.photoUrl}" alt="Photo of ${rep.name}" class="circle large">
          <span class="title">${rep.name} (${rep.party})</span>
          <p>${rep.address[0].line1}</p>
          <p>${rep.address[0].city}, ${rep.address[0].state} ${rep.address[0].zip}</p>

          <span>
          <a href="${facebookId}" class="secondary-content"><i class="material-icons">facebook</i></a>

          <a href="${twitterId}" class="secondary-content"><i class="material-icons">twitter</i></a>

          <a href="${rep.urls[0]}" class="secondary-content"><i class="material-icons">public</i></a>
          </span>
        </li>
      `
    });

    output += '</ul>';

    this.representativeList.innerHTML = output
  }
}
