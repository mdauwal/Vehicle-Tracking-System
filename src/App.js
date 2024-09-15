import { Route, Routes } from 'react-router-dom';
import { IncidenceProvider } from './context/IncidenceContext';
import {
  Activities,
  ClickToView,
  Dashboard,
  DestinationTracking,
  Layout,
  Login,
  SearchResults,
  ViewInMap,
} from './pages';
import SuccesfulShipments from './pages/Succesfulshipments';
import Decision from './pages/decision';

function App() {
  return (
    <IncidenceProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/succesful-shipments" element={<SuccesfulShipments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/decisions" element={<Decision />} />
          <Route
            path="/destination-tracking"
            element={<DestinationTracking />}
          />
          <Route
            path="/destination-tracking/search-results"
            element={<SearchResults />}
          />
          <Route
            path="/destination-tracking/view-in-map"
            element={<ViewInMap />}
          />
          <Route
            path="/destination-tracking/click-to-view"
            element={<ClickToView />}
          />
        </Route>
      </Routes>
    </IncidenceProvider>
  );
}

export default App;
