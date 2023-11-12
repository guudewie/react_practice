import List from "./List"

function App() {
  const animals = ["Lion", "Pig", "Fuut"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

export default App;
