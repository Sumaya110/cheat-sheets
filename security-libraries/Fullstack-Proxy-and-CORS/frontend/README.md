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