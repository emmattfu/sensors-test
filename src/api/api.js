import { BASE_URL, ENDPOINTS } from "./endpoints";

export const fetchData = async ({
  method,
  id = null,
  body = undefined,
  endpoint,
}) => {
  const url = makeUrl(endpoint, id);
  const resp = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  const data = await resp.json();

  return data;
};

const makeUrl = (endpoint, id) => {
  if (id === null) {
    return `${BASE_URL}${ENDPOINTS[endpoint].uri}`;
  } else {
    return `${BASE_URL}${ENDPOINTS[endpoint].uri}/${id}`;
  }
};
