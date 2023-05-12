import "./App.css";
import { useQuery } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Car from "./components/Car";

function App() {
  const { data, isLoading, isError } = useQuery("myCars", async () => {
    const response = await fetch("http://localhost:3000/cars/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  if (!data.length) {
    return (
      <div>
        <h1>No data</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          {
            data.map((currentCar) => (
              <Route path={`/${currentCar.id}.html`} key={currentCar.id}
              render={(props) => <Car currentCar={currentCar} />}
              >
              </Route>
            ))
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
