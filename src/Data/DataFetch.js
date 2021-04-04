const baseUrl = process.env.REACT_APP_SERVER_URL

const getOptions = () => ({
   mode: 'cors',
   headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
   }
})

class DataFetch {

    static get =(url, token) => {
        let options = getOptions();
        options.method = 'GET';
        options.token = {token: token};

        return fetch(`${baseUrl}${url}`, options)
        .then(res => res.json())
        .catch(err => console.log(err))

    }
}

export default DataFetch;