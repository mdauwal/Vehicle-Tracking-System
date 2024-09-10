import { Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/succesful-shipments" element={<SuccesfulShipments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activities" element={<Activities />} />
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
    </>
  );
}

export default App;
