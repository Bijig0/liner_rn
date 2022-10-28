function* zip(arrayOne: any[], arrayTwo: any[]) {
  const len = arrayOne.length;
  for (let i = 0; i < len; i++) {
    yield [arrayOne[i], arrayTwo[i]];
  }
}

export default zip;
