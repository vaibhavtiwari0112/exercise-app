export const exerciseOptions  = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    //'3ad9e12087msh2ee2f5dbded64e4p1889b8jsn8683edbdba37'
   ,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  params: {id: 'UCE_M8A5yxnLfW0KghEeajjw'},
  headers: {
    'X-RapidAPI-Key': '3ad9e12087msh2ee2f5dbded64e4p1889b8jsn8683edbdba37',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
