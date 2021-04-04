import Counter from "../../components/counter";
import Welcome from "../../components/welcome";
function HomePage() {
  return (
    <div className="row">
      <h1>WELCOME</h1>
      <Welcome color="red" />
      <hr />
      <Counter />
    </div>
  );
}

export default HomePage;
