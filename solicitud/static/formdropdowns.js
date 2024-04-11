document.addEventListener('DOMContentLoaded', function() {
  // Define the options for each group
  var productoOptions = ['','Tabla', 'Tablón', 'Polín', 'Barrote' , 'Triplay Cim.', 'Triplay Cim. cd', 'Triplay Cim. cdx','Cepillado','Corte','MDF'];
  var maderaOptions = {
    ' ': ['','Teca', 'Parota', 'Cedro Rojo', 'Pino','Natural'],
    'Tabla': ['','Teca', 'Parota', 'Cedro Rojo', 'Pino'],
    'Tablón': ['','Parota','Cedro Rojo','Pino'],
    'Polín': ['','Pino'],
    'Barrote': ['','Pino'],
    'Triplay Cim.': ['','Pino'],
    'Triplay Cim. cd': ['','Pino'],
    'Triplay Cim. cdx': ['','Pino'],
    'MDF': ['','Natural']
};
  var medidasOptions = {
    ' ': [" ","1inx4inx8ft", "1inx4inx10ft", "1inx4inx12ft", "1inx4inx14ft", "1inx4inx16ft","1inx6inx8ft", "1inx6inx10ft", "1inx6inx12ft", "1inx6inx14ft", "1inx6inx16ft", "1inx8inx8ft", "1inx8inx10ft", "1inx8inx12ft", "1inx8inx14ft", "1inx8inx16ft", "1inx10inx8ft", "1inx10inx10ft", "1inx10inx12ft", "1inx10inx14ft", "1inx10inx16ft", "1inx12inx8ft", "1inx12inx10ft", "1inx12inx12ft", "1inx12inx14ft", "1inx12inx16ft","1.5inx8inx8ft", "1.5inx8inx10ft", "1.5inx10inx8ft", "1.5inx10inx10ft", "1.5inx12inx8ft", "1.5inx12inx10ft","3inx3inx8.25ft", "3inx3inx12ft","3inx3inx16ft" ,"4inx4inx8.25ft", "4inx4inx12ft","4inx4inx16ft","3mmx122cmx244cm","4.5mmx122cmx244cm","6mmx122cmx244cm","9mmx122cmx244cm","12mmx122cmx244cm","15mmx122cmx244cm","18mmx122cmx244cm"],
    'Tabla': ['',"1inx4inx8ft", "1inx4inx10ft", "1inx4inx12ft", "1inx4inx14ft", "1inx4inx16ft", "1inx6inx8ft", "1inx6inx10ft", "1inx6inx12ft", "1inx6inx14ft", "1inx6inx16ft", "1inx8inx8ft", "1inx8inx10ft", "1inx8inx12ft", "1inx8inx14ft", "1inx8inx16ft", "1inx10inx8ft", "1inx10inx10ft", "1inx10inx12ft", "1inx10inx14ft", "1inx10inx16ft", "1inx12inx8ft", "1inx12inx10ft", "1inx12inx12ft", "1inx12inx14ft", "1inx12inx16ft","NOTAS"],
    'Tablón': ['',"2inx4inx8ft", "2inx4inx10ft", "2inx4inx16ft","2inx6inx8ft", "2inx6inx10ft", "2inx6inx16ft","2inx8inx8ft", "2inx8inx10ft", "2inx8inx16ft", "2inx10inx8ft", "2inx10inx10ft", "2inx10inx16ft", "2inx12inx8ft", "2inx12inx10ft", "2inx12inx16ft","NOTAS"],
    'Polín': ['',"3inx3inx4ft","3inx3inx8.25ft", "3inx3inx12ft", "3inx3inx16ft" ,"4inx4inx8.25ft","4inx4inx10ft" ,"4inx4inx12ft","4inx4inx16ft"],
    'Barrote': ['',"1.5inx3inx8ft","1.5inx3inx16ft","2inx4inx10ft"],
    'Triplay Cim.': ['',"4.5mmx122cmx244cm","6mmx122cmx244cm","9mmx122cmx244cm","12mmx122cmx244cm","15mmx122cmx244cm","18mmx122cmx244cm"],
    'Triplay Cim. cd': ['',"4.5mmx122cmx244cm","6mmx122cmx244cm","9mmx122cmx244cm","12mmx122cmx244cm","15mmx122cmx244cm","18mmx122cmx244cm"],
    'Triplay Cim. cdx': ['',"4.5mmx122cmx244cm","6mmx122cmx244cm","9mmx122cmx244cm","12mmx122cmx244cm","15mmx122cmx244cm","18mmx122cmx244cm"],
    'MDF': ['','3mmx122cmx244cm','6mmx122cmx244cm','9mmx122cmx244cm'],
    'Cepillado': ['','Cepillado'],
    'Corte': ['','Corte']
  };

  for (var i = 1; i <= 6; i++) {
    var productoElement = document.getElementById('p' + i + 'shell');
    productoOptions.forEach(function(option) {
      var optionElement = document.createElement('option');
      optionElement.text = option;
      productoElement.add(optionElement);
    });

    var maderaElement = document.getElementById('w' + i + 'shell');
    maderaOptions[' '].forEach(function(option) {
      var optionElement = document.createElement('option');
      optionElement.text = option;
      maderaElement.add(optionElement);
    });

    var medidasElement = document.getElementById('d' + i + 'shell');
    medidasOptions[' '].forEach(function(option) {
      var optionElement = document.createElement('option');
      optionElement.text = option;
      medidasElement.add(optionElement);
    });
  }

  // Add event listeners to the Producto group
  for (var i = 1; i <= 6; i++) {
    document.getElementById('p' + i + 'shell').addEventListener('change', function(e) {
      var id = e.target.id;
      var value = e.target.value;
      var number = id.substring(1, id.indexOf('shell'));

      // Activate the corresponding Madera element
      var maderaElement = document.getElementById('w' + number + 'shell');
      maderaElement.disabled = false;

      // Populate the Madera element with the appropriate options
      maderaElement.innerHTML = '';
      if (maderaOptions[value]) {
        maderaOptions[value].forEach(function(option) {
          var optionElement = document.createElement('option');
          optionElement.text = option;
          maderaElement.add(optionElement);
        });
      }
    });
  }

  // Add event listeners to the Madera group
  for (var i = 1; i <= 6; i++) {
    document.getElementById('w' + i + 'shell').addEventListener('change', function(e) {
      var id = e.target.id;
      var number = id.substring(1, id.indexOf('shell'));

      // Get the selected value from the corresponding Producto element
      var productoValue = document.getElementById('p' + number + 'shell').value;

      // Activate the corresponding Medidas element
      var medidasElement = document.getElementById('d' + number + 'shell');
      medidasElement.disabled = false;

      // Populate the Medidas element with the appropriate options
      medidasElement.innerHTML = '';
      if (medidasOptions[productoValue]) {
        medidasOptions[productoValue].forEach(function(option) {
          var optionElement = document.createElement('option');
          optionElement.text = option;
          medidasElement.add(optionElement);
        });
      }
    });
  }
});
