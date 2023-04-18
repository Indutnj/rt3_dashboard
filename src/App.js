import AreaChart from "./AreaChart";
import Dashboard_card1 from "./Dashboard_card1";
import Dashboard_card2 from "./Dashboard_card2";
import Dashboard_card3 from "./Dashboard_card3";
import Dashboard_card4 from "./Dashboard_card4";
import Pie_Chart from "./Pie_Chart";
import Proj_illu from "./Proj_illu";
import Wrapper from "./Wrapper";
function App() {
  return (
    <div>
      <div className="row">
        <div className="col-2">
          <Wrapper />
        </div>
        <div className="col">
          <div class="container-fluid">
            <div className="row">
              {/*<!-- Earnings (Monthly) Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <Dashboard_card1 />
              </div>
              {/*<!-- Earnings (Monthly) Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <Dashboard_card2 />
              </div>
              {/*<!-- Earnings (Monthly) Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <Dashboard_card3 />
              </div>
              {/*<!-- Pending Requests Card Example -->*/}
              <div className="col-xl-3 col-md-6 mb-4">
                <Dashboard_card4 />
              </div>
            </div>
            <div className="row">
              {/*<!-- Area Chart -->*/}
              <div className="col-xl-8 col-lg-7">
                <AreaChart />
              </div>
              {/*<!-- Pie Chart -->*/}
              <div className="col-xl-4 col-lg-5">
                <Pie_Chart />
              </div>
            </div>
            <div class="row">
              <Proj_illu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
