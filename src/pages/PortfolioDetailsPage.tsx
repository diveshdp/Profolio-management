import React from "react";

interface HoldingItem {
  symbol: string;
  name: string;
  sector: string;
  shares: number;
  currentPrice: number;
  totalValue: number;
  gainLoss: number;
  gainLossPercent: number;
}

interface Props {
  enrichedData: HoldingItem[];
  sectorColors: Record<string, string>;
}

const PortfolioDetailsPage: React.FC<Props> = ({ enrichedData, sectorColors }) => {
  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold" style={{ fontSize: "24px", color: "#212529" }}>
        All Holdings
      </h2>

      <div className="card-white p-4">
        <table className="table mb-0">
          <thead
            style={{ backgroundColor: "#f8f9fa", borderBottom: "2px solid #dee2e6" }}
          >
            <tr>
              <th className="fw-bold p-3">SYMBOL</th>
              <th className="fw-bold p-3">COMPANY</th>
              <th className="fw-bold p-3">SECTOR</th>
              <th className="fw-bold p-3 text-end">SHARES</th>
              <th className="fw-bold p-3 text-end">PRICE</th>
              <th className="fw-bold p-3 text-end">VALUE</th>
              <th className="fw-bold p-3 text-end">GAIN/LOSS</th>
              <th className="fw-bold p-3 text-end">RETURN</th>
            </tr>
          </thead>

          <tbody>
            {enrichedData.map((item) => (
              <tr key={item.symbol}>
                <td className="fw-bold p-3">{item.symbol}</td>
                <td className="p-3">{item.name}</td>

                <td className="p-3">
                  <span
                    className="badge rounded-pill px-3"
                    style={{
                      backgroundColor: sectorColors[item.sector],
                      color: "white",
                    }}
                  >
                    {item.sector}
                  </span>
                </td>

                <td className="text-end p-3">{item.shares}</td>

                <td className="text-end p-3">
                  ${item.currentPrice.toFixed(2)}
                </td>

                <td className="text-end fw-bold p-3">
                  $
                  {item.totalValue.toLocaleString("en-US", {
                    maximumFractionDigits: 0,
                  })}
                </td>

                <td
                  className="text-end fw-bold p-3"
                  style={{
                    color: item.gainLoss >= 0 ? "#198754" : "#dc3545",
                  }}
                >
                  {item.gainLoss >= 0 ? "+" : "-"}$
                  {Math.abs(item.gainLoss).toLocaleString("en-US", {
                    maximumFractionDigits: 0,
                  })}
                </td>

                <td className="text-end p-3">
                  <span
                    className={`badge rounded-pill px-3 ${
                      item.gainLossPercent >= 0 ? "bg-success" : "bg-danger"
                    }`}
                  >
                    {item.gainLossPercent >= 0 ? "+" : ""}
                    {item.gainLossPercent}%
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

export default PortfolioDetailsPage;
