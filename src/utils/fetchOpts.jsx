const fetchOpts = (method, req = null) => {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const body = req ? { body: JSON.stringify(req) } : {};
  return Object.assign({}, options, body);
};

export default fetchOpts;
