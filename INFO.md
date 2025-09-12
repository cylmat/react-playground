# Running frontend 

## Run

```shell
# run
docker run --rm -d --name groundnode -v .:/app -w /app -p 5173:5173 node:24 npm run dev
http://localhost:5173
docker exec -it groundnode bash  

# update
docker run --rm -v .:/app -w /app node:24 npm install
```


## info

```shell
npm create vite@latest vite-react -- --template react-ts
npm install
npm run dev
```

## links

```
https://reactrouter.com/en/main
https://www.udemy.com/course/formation-react-js-pour-tous/
https://www.lereacteur.io/formation/react-redux/

@https://www.freecodecamp.org/news/react-libraries-to-use-in-your-projects
@https://nextjs.org/
@https://miro.medium.com/v2/resize:fit:552/1*XCeGc___CN70Bbu2VroYSQ.jpeg
react-bootstrap: https://react-bootstrap.netlify.app/docs/components/spinners/

https://copyprogramming.com/howto/react-event-bus
https://delicious-insights.com/fr/articles-et-tutos/js-binding-this/
https://react.dev/learn/managing-state
https://delicious-insights.com/fr/articles-et-tutos/js-es-modules/
https://www.javascripttutorial.net/es6/javascript-default-parameters/
https://www.typescriptlang.org/docs/handbook/2/basic-types.html
https://plotly.com/javascript/
```

## VsCode ext

- js
@xabikos.javascriptsnippets  
@mgmcdermott.vscode-language-babel

- react
@lauren.react-pack 

- vue
@vue.volar
