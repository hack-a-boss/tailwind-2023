import { Layout } from "./components/Layout";

function App() {
  return (
    <main className="container mx-auto mt-4 font-vox">
      <h1 className="text-4xl font-bold text-center border-b-4 border-b-vox-yellow pb-4 mb-4">
        Top Stories
      </h1>
      <Layout />
      <p className="p-4 bg-gray-400 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa esse
        maiores impedit eaque cumque corrupti ea quae! Rerum esse nisi nihil
        soluta dolores autem, praesentium, nulla officiis voluptatum nesciunt
        dicta.
      </p>
    </main>
  );
}

export default App;
