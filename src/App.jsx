import { Layout } from "./components/Layout";

function App() {
  return (
    <main className="container mx-auto mt-4 font-vox">
      <h1 className="text-4xl font-bold text-center border-b-4 border-b-vox-yellow pb-4 mb-4">
        Top Stories
      </h1>
      <Layout />
    </main>
  );
}

export default App;
