export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=crJWyE6IJM5YWaC7sesOBuYUeOPHf5D1`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => {
      return {
        id: id,
        title: title,
        url: url,
      };
    }
  );
  return gifs;
};
