## Running React on Repl.it

### links

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

### vscode ext

@lauren.react-pack  
@xabikos.javascriptsnippets  
@mgmcdermott.vscode-language-babel

### render error

```
setState() change l'état de l'app et déclenche l'appel render(). -> infinite loop

1. Updating the state inside the render
function App() {
  const [count, setCount] = useState(0);
  setCount(1); // infinite loop
}
-> fix:
useEffect(() => { setCount(1); }, [])

2. In useEffect with update dependency
useEffect(() => {
    setCount(count + 1) // infinite loop
  }, [count])
-> fix: use functional update
useEffect(() => {
    setCount(previousCount => previousCount + 1)
  }, [])

3. Event handler
<button onClick={() => setCount(1)}>
```
