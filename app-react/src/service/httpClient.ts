export async function httpClient(url: string, options: RequestInit) {
  const baseURL = 'http://localhost:8000'; // TODO: move to .env

  const res = await fetch(`${baseURL}${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  let data;
  try {
    data = await res.json();
  } catch (error) {
    console.error(error);
  }

  if (res.status > 299 || res.status < 200) {
    const message =
      data && data.message ? data.message : 'Something went wrong! 🤪';
    throw new Error(message);
  }
  return data;
}
