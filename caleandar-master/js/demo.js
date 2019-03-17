var events = [
  //AÑO, MES, DIA
  //                                                    NOVIEMBRE
  //ESC DOM
  {'Date': new Date(2018, 11-1, 4), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 11-1, 11), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 11-1, 18), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 11-1, 25), 'Title': 'Escuela dominical y CFT 10:30 hrs.','Link':'http://ieucblautaro.cl'},
    //ORAC
  {'Date': new Date(2018, 11-1, 7), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 11-1, 14), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 11-1, 21), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 11-1, 28), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  //OTROS
  {'Date': new Date(2018, 11-1, 17), 'Title': 'Encuentro familiar en UCB Bethel y Encuentro de jóvenes en UCB Pitrufquén','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 11-1, 30), 'Title': 'CONFERENCIA - Desde las 18hrs.','Link':'http://ieucblautaro.cl'},
    
  
  
  //                                                    DICIEMBRE
  //ESC DOM
  {'Date': new Date(2018, 12-1, 2), 'Title': 'CONFERENCIA - Desde las 10hrs (No hay escuela dominical)','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 12-1, 9), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 12-1, 16), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 12-1, 23), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 12-1, 30), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
    //ORAC
  {'Date': new Date(2018, 12-1, 5), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 12-1, 12), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 12-1, 19), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2018, 12-1, 26), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  //OTROS
  {'Date': new Date(2018, 12-1, 1), 'Title': 'CONFERENCIA - Desde las 10hrs.','Link':'http://ieucblautaro.cl'},
    

  //MARZO
  {'Date': new Date(2019, 3-1, 3), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 3-1, 10), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 3-1, 17), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 3-1, 31), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  
  {'Date': new Date(2019, 11-1, 7), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 11-1, 14), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 11-1, 21), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 11-1, 28), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  
  //ABRIL
  {'Date': new Date(2019, 4-1, 7), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 4-1, 14), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 4-1, 21), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 4-1, 28), 'Title': 'Escuela dominical 10:30 hrs.','Link':'http://ieucblautaro.cl'},
  
  {'Date': new Date(2019, 11-1, 3), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 11-1, 19), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 11-1, 17), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  {'Date': new Date(2019, 11-1, 24), 'Title': 'Culto de oración  20:00 hrs.','Link':'http://ieucblautaro.cl'},
  
  {'Date': new Date(2019, 4-1, 20), 'Title': 'Taller de Escatología - Invitado: Ps. Claudio Villarroel','Link':'http://ieucblautaro.cl'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
