function App() {
  const routeContext = useRouteContext();
  const routes = routeContext ? routeContext.routes : [];

  // Initialize code2 state variable using useState
  const [code2, setCode2] = useState([
    {
      path:'/new-page',
      element:<NewPage/>
    }
  ]);

  // Function to add a new route to the code2 state
  const addNewRoute = () => {
    const newRoute = {
      path: '/new-page',
      element: <NewPage />
    };
    setCode2([...code2, newRoute]); // Update code2 state with the new route
  };

  return (
    <RouteProvider> 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/property" element={<Property />} />
        {/* Render routes from code2 state */}
        {code2.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </RouteProvider>
  );
}

export default App;
