const isIE = (): boolean => {
  return (
    !!window.navigator.userAgent.match(/Trident/g) ||
    !!window.navigator.userAgent.match(/MSIE/g)
  );
};

export default isIE;
