const instrumentFamilyData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const SelectView = require('./views/select_view.js')
const InstrumentInfoView = require('./views/instrument_info_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentFamilies = new InstrumentFamilies(instrumentFamilyData);
  instrumentFamilies.bindEvents();

  const selectForm = document.querySelector('#instrument-families');
  const selectView = new SelectView(selectForm);
  selectView.bindEvents();

  const infoViewField = document.querySelector('#instrument-info-field')
  const infoView = new InstrumentInfoView(infoViewField);
  // infoViewField.bindEvents();

});
