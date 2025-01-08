export interface Album {
  userId: Number;
  id: Number;
  title: String;
  completed;
}

export const useAlbum = () => {
  const url = 'https://jsonplaceholder.typicode.com';

  let albums: Album[] | null = [];

  const fetchAlbums = async () => {
    albums = await fetch(url + '/todos')
      .then(response => response.json())
      .catch(error => console.log('Error: ', error));
    console.log('apiTest 결과: ', albums);
  };

  const getAlbums = () => {
    return albums;
  };

  return { fetchAlbums, getAlbums };
};
