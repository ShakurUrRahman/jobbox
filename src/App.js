import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
  // console.log(process.env);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
