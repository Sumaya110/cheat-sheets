```
npm i axios
```

# proxy

Add this to the vite.config.js file, as it is a Vite project using React.
```
server: {
    proxy: {
      '/api': 'http://localhost:4000'
    }

  },

```

 http://localhost:4000 will be added before any route starts with /api
```
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log("data  : ", response.data)
        setJokes(response.data); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 
```