export const SEARCH_FOR_IMAGES = 'SEARCH_FOR_IMAGES';
export const searchForImages = (text) => dispatch => {
  dispatch(searchForImagesRequest());
  return fetch(
        `https://api.gettyimages.com/v3/search/images?minimum_size=large&fields=id,title,thumb,referral_destinations&sort_order=best&phrase=${text}`,
        {
          headers: {
            "Api-key": "b8deg4gzw7ggc78kzzj7uzyq",
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          if(!response.ok) {
            Promise.reject(response.statusText);
          }
          return response.json();
        })
        .then(images => {
          return dispatch(searchForImagesSuccess(images))
        })
        .catch(error => {
          return dispatch(searchForImagesError(error));
        });
}

export const SEARCH_FOR_IMAGES_REQUEST = 'SEARCH_FOR_IMAGES_REQUEST';
export const searchForImagesRequest = () => ({
  type: SEARCH_FOR_IMAGES_REQUEST
});

export const SEARCH_FOR_IMAGES_SUCCESS = 'SEARCH_FOR_IMAGES_SUCCESS';
export const searchForImagesSuccess = (imageList) => ({
  type: SEARCH_FOR_IMAGES_SUCCESS,
  imageList
});

export const SEARCH_FOR_IMAGES_ERROR = 'SEARCH_FOR_IMAGES_ERROR';
export const searchForImagesError = (error) => ({
  type: SEARCH_FOR_IMAGES_ERROR,
  error
});