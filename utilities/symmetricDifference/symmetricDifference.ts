const symmetricDifference = <Type>(a: Type[], b: Type[]):any[] => {
  const setA = new Set(a);
  const setB = new Set(b);
  return a.filter((elm) => !setB.has(elm));
};

export default symmetricDifference