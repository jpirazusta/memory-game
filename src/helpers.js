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

export const image = {
  Memory_Nivel1_1: require('./assets/images/Memory_Nivel1_1.png'),
  Memory_Nivel1_2: require('./assets/images/Memory_Nivel1_2.png'),
  Memory_Nivel1_3: require('./assets/images/Memory_Nivel1_3.png'),
  Memory_Nivel1_4: require('./assets/images/Memory_Nivel1_4.png'),
  Memory_Nivel1_5: require('./assets/images/Memory_Nivel1_5.png'),
  Memory_Nivel1_6: require('./assets/images/Memory_Nivel1_6.png'),
  Memory_Nivel2_1: require('./assets/images/Memory_Nivel2_1.png'),
  Memory_Nivel2_2: require('./assets/images/Memory_Nivel2_2.png'),
  Memory_Nivel2_3: require('./assets/images/Memory_Nivel2_3.png'),
  Memory_Nivel2_4: require('./assets/images/Memory_Nivel2_4.png'),
  Memory_Nivel2_5: require('./assets/images/Memory_Nivel2_5.png'),
  Memory_Nivel2_6: require('./assets/images/Memory_Nivel2_6.png'),
  Memory_Nivel3_5: require('./assets/images/Memory_Nivel3_5.png'),
  Memory_Nivel3_7: require('./assets/images/Memory_Nivel3_7.png'),
  Memory_Nivel3_1: require('./assets/images/Memory_Nivel3_1.png'),
  Memory_Nivel3_2: require('./assets/images/Memory_Nivel3_2.png'),
  Memory_Nivel3_3: require('./assets/images/Memory_Nivel3_3.png'),
  Memory_Nivel3_4: require('./assets/images/Memory_Nivel3_4.png'),
  Memory_Nivel3_6: require('./assets/images/Memory_Nivel3_6.png'),
  Memory_Nivel3_8: require('./assets/images/Memory_Nivel3_8.png'),
};
