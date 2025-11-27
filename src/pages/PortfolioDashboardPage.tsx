import {monthlyData, sectorColors, sectorData, totalCost, totalGainLoss, totalReturn, totalValue, enrichedData} from "../constants/portfolio.constants";

interface HoldingData {
  symbol: string;
  name: string;
  totalValue: number;
  gainLossPercent: number;
}

interface PortfolioDashboardProps {
  totalValue: number;
  totalCost: number;
  totalGainLoss: number;
  totalReturn: number;
}

const PortfolioDashboardPage: React.FC<PortfolioDashboardProps> = ({
  totalValue,
  totalCost,
  totalGainLoss,
  totalReturn,

}) => {
  return (
    <div>
      <h2
        className="mb-4 fw-bold"
        style={{ fontSize: "24px", color: "#212529" }}
      >
        Portfolio Dashboard
      </h2>

      {/* Stats Cards */}
     <div className="row g-4 mb-4">
  {/* Portfolio Value */}
  <div className="col-lg-3 col-md-6">
    <div className="stat-card shadow-sm p-3 rounded" style={{ borderLeft: "5px solid #0d6efd" }}>
      <div className="text-uppercase text-muted small mb-1">Portfolio Value</div>
      <div className="fw-bold h3">${((totalValue ?? 0)/1000).toFixed(1)}K</div>
      <div className="text-muted small">${(totalValue ?? 0).toLocaleString("en-US", {minimumFractionDigits: 2})}</div>
    </div>
  </div>

  {/* Cost Basis */}
  <div className="col-lg-3 col-md-6">
    <div className="stat-card shadow-sm p-3 rounded" style={{ borderLeft: "5px solid #6c757d" }}>
      <div className="text-uppercase text-muted small mb-1">Cost Basis</div>
      <div className="fw-bold h3">${((totalCost ?? 0)/1000).toFixed(1)}K</div>
      <div className="text-muted small">${(totalCost ?? 0).toLocaleString("en-US", {minimumFractionDigits: 2})}</div>
    </div>
  </div>

  {/* Gain/Loss */}
  <div className="col-lg-3 col-md-6">
    <div className="stat-card shadow-sm p-3 rounded" style={{ borderLeft: `5px solid ${totalGainLoss >= 0 ? "#198754" : "#dc3545"}` }}>
      <div className="text-uppercase text-muted small mb-1">Gain/Loss</div>
      <div className={`fw-bold h3 text-${totalGainLoss >= 0 ? "success" : "danger"}`}>
        {totalGainLoss >= 0 ? "+" : ""}${((Math.abs(totalGainLoss ?? 0))/1000).toFixed(1)}K
      </div>
      <div className="text-muted small">{totalGainLoss >= 0 ? "+" : ""}${(totalGainLoss ?? 0).toLocaleString("en-US", {minimumFractionDigits: 2})}</div>
    </div>
  </div>

  {/* Total Return */}
  <div className="col-lg-3 col-md-6">
    <div className="stat-card shadow-sm p-3 rounded" style={{ borderLeft: `5px solid ${totalReturn >= 0 ? "#198754" : "#dc3545"}` }}>
      <div className="text-uppercase text-muted small mb-1">Total Return</div>
      <div className={`fw-bold h3 text-${totalReturn >= 0 ? "success" : "danger"}`}>
        {totalReturn >= 0 ? "+" : ""}{(totalReturn ?? 0).toFixed(2)}%
      </div>
      <div className="text-muted small">Since inception</div>
    </div>
  </div>
</div>


      {/* Charts */}
<div className="card shadow-sm p-4 mb-4 rounded">
  <h5 className="fw-bold mb-4">Portfolio Growth (6 Months)</h5>
  <div className="d-flex align-items-end gap-2" style={{ height: 200 }}>
    {monthlyData.map(item => {
      const maxVal = Math.max(...monthlyData.map(d => d.value));
      const barHeight = ((item.value ?? 0) / maxVal) * 100;
      return (
        <div key={item.month} className="d-flex flex-column align-items-center" style={{ flex: 1 }}>
          <div className="small text-primary mb-1">${((item.value ?? 0)/1000).toFixed(0)}K</div>
          <div style={{
            width: "100%",
            height: `${barHeight}%`,
            minHeight: "20px",
            background: "linear-gradient(180deg, #0d6efd, #0a58ca)",
            borderRadius: "6px 6px 0 0"
          }}></div>
          <div className="small mt-2 text-muted">{item.month}</div>
        </div>
      )
    })}
  </div>
  <div className="text-center mt-3">
    <span className="badge bg-success px-3 py-2">
      +{(((totalValue ?? 0) - (monthlyData[0]?.value ?? 0)) / (monthlyData[0]?.value ?? 1) * 100).toFixed(1)}% Growth
    </span>
  </div>
</div>

<div className="card shadow-sm p-4 mb-4 rounded">
  <h5 className="fw-bold mb-4">Sector Distribution</h5>
  {Object.entries(sectorData).map(([sector, value]) => {
    const pct = ((value ?? 0) / (totalValue ?? 1) * 100).toFixed(1);
    return (
      <div key={sector} className="mb-3">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <div className="d-flex align-items-center">
            <div style={{ width: 12, height: 12, backgroundColor: sectorColors[sector], marginRight: 8, borderRadius: 3 }}></div>
            <span className="fw-semibold">{sector}</span>
          </div>
          <span className="fw-bold">{pct}%</span>
        </div>
        <div className="progress" style={{ height: 20, borderRadius: 8 }}>
          <div className="progress-bar" style={{ width: `${pct}%`, backgroundColor: sectorColors[sector] }}>
            <span className="small fw-semibold">${((value ?? 0)/1000).toFixed(1)}K</span>
          </div>
        </div>
      </div>
    )
  })}
</div>


      {/* Top Holdings Table */}
     <div className="card shadow-sm p-4 rounded">
  <h5 className="fw-bold mb-4">Top Holdings</h5>
  <table className="table table-striped mb-0">
    <thead className="bg-light">
      <tr>
        <th>SYMBOL</th>
        <th>COMPANY</th>
        <th className="text-end">VALUE</th>
        <th className="text-end">RETURN</th>
      </tr>
    </thead>
    <tbody>
      {enrichedData
        .sort((a, b) => (b.totalValue ?? 0) - (a.totalValue ?? 0))
        .map(item => (
        <tr key={item.symbol}>
          <td className="fw-bold">{item.symbol}</td>
          <td>{item.name}</td>
          <td className="text-end">${(item.totalValue ?? 0).toLocaleString()}</td>
          <td className="text-end">
            <span className={`badge rounded-pill px-3 ${item.gainLossPercent >= 0 ? "bg-success" : "bg-danger"}`}>
              {item.gainLossPercent >= 0 ? "+" : ""}{item.gainLossPercent}%
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default PortfolioDashboardPage;
