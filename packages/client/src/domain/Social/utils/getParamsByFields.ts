const getParamsByFields = (keys: string[], querystring: string): any => {
  const params: URLSearchParams = new URLSearchParams(querystring);

  return keys.reduce((accum: any, current) => {
    return { ...accum, [current]: params.get(current) };
  }, {});
};

export default getParamsByFields;
