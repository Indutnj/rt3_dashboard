export default function AreaChart() {
    return (
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Area Chart</h6>
        </div>
        <div className="card-body">
            <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
            </div>
           
        </div>
    </div>
    );
}
