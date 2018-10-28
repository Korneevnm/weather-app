function request(url) {
  const res = fetch(url).then(result => result.json());
  return res;
}

export default request;
