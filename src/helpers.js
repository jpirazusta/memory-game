export function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export function getImageByName(name) {
  switch (name) {
  case 'Memory_Nivel1_1.png':
    return require('./assets/images/Memory_Nivel1_1.png');
  case 'Memory_Nivel1_2.png':
    return require('./assets/images/Memory_Nivel1_2.png');
  case 'Memory_Nivel1_3.png':
    return require('./assets/images/Memory_Nivel1_3.png');
  case 'Memory_Nivel1_4.png':
    return require('./assets/images/Memory_Nivel1_4.png');
  case 'Memory_Nivel1_5.png':
    return require('./assets/images/Memory_Nivel1_5.png');
  case 'Memory_Nivel1_6.png':
    return require('./assets/images/Memory_Nivel1_6.png');
  case 'Memory_Nivel2_1.png':
    return require('./assets/images/Memory_Nivel2_1.png');
  case 'Memory_Nivel2_2.png':
    return require('./assets/images/Memory_Nivel2_2.png');
  case 'Memory_Nivel2_3.png':
    return require('./assets/images/Memory_Nivel2_3.png');
  case 'Memory_Nivel2_4.png':
    return require('./assets/images/Memory_Nivel2_4.png');
  case 'Memory_Nivel2_5.png':
    return require('./assets/images/Memory_Nivel2_5.png');
  case 'Memory_Nivel2_6.png':
    return require('./assets/images/Memory_Nivel2_6.png');
  case 'Memory_Nivel3_5.png':
    return require('./assets/images/Memory_Nivel3_5.png');
  case 'Memory_Nivel3_7.png':
    return require('./assets/images/Memory_Nivel3_7.png');
  case 'Memory_Nivel3_1.png':
    return require('./assets/images/Memory_Nivel3_1.png');
  case 'Memory_Nivel3_2.png':
    return require('./assets/images/Memory_Nivel3_2.png');
  case 'Memory_Nivel3_3.png':
    return require('./assets/images/Memory_Nivel3_3.png');
  case 'Memory_Nivel3_4.png':
    return require('./assets/images/Memory_Nivel3_4.png');
  case 'Memory_Nivel3_6.png':
    return require('./assets/images/Memory_Nivel3_6.png');
  case 'Memory_Nivel3_8.png':
    return require('./assets/images/Memory_Nivel3_8.png');
  default:
    break;
  };
};
