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
      output += `
        <li class="collection-item avatar">
          <img src="${rep.photoUrl}" alt="Photo of ${rep.name}" class="circle large">
          <span class="title">${rep.name}</span>
          <a href="${rep.urls[0]}" class="secondary-content"><i class="material-icons">public</i></a>
        </li>
      `
    });

    output += '</ul>';

    this.representativeList.innerHTML = output
  }
}
