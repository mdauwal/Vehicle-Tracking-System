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

      {/* // <div className="border bg-slate-200 mt-10">
      //   <p>Routing examples</p>
      //   <div className="flex gap-2">
      //     <a href="/">home</a>
      //     <a href="/succesful-shipments">succesful-shipments</a>
      //     <a href="/login">login</a>
      //     <a href="/activities">activities</a>
      //     <a href="/destination-tracking">destination-tracking</a>
      //     <a href="/destination-tracking/search-results">search-results</a>
      //     <a href="/destination-tracking/view-in-map">view-in-map</a>
      //     <a href="/destination-tracking/click-to-view">click-to-view</a>
      //   </div>
      // </div> */}
    </>
  );
}

export default App;
