const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(selectMenu) {
  this.selectMenu = selectMenu;
};

SelectView.prototype.bindEvents = function() {
  console.log("test");
  PubSub.subscribe('instruments-ready', (event)=>{
    console.log("test2");
    const allInstrumentsInfo = event.detail;
    console.log(allInstrumentsInfo);
    this.populate(allInstrumentsInfo);
  });

  this.selectMenu.addEventListener('change', (event)=>{
    const selectedIndex = event.target.value;
    PubSub.publish('instrument-selected', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentsData){
  console.log(instrumentsData);
  instrumentsData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    console.log(index);
    this.selectMenu.appendChild(option);
  });
};

module.exports = SelectView;
