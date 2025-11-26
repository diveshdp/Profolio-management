import React from 'react'

export default function HoldingsPage(): JSX.Element {
      const portfolioData = [
    { symbol: 'AAPL', name: 'Apple Inc.', shares: 150, buyPrice: 145.30, currentPrice: 178.50, sector: 'Technology' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 100, buyPrice: 320.00, currentPrice: 378.91, sector: 'Technology' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 75, buyPrice: 125.50, currentPrice: 141.80, sector: 'Technology' },
    { symbol: 'JPM', name: 'JPMorgan Chase', shares: 200, buyPrice: 142.10, currentPrice: 158.30, sector: 'Financial' },
    { symbol: 'JNJ', name: 'Johnson & Johnson', shares: 120, buyPrice: 162.00, currentPrice: 156.25, sector: 'Healthcare' },
    { symbol: 'V', name: 'Visa Inc.', shares: 90, buyPrice: 225.00, currentPrice: 267.45, sector: 'Financial' },
  ];

  const enrichedData = portfolioData.map(item => {
    const totalValue = item.shares * item.currentPrice;
    const totalCost = item.shares * item.buyPrice;
    const gainLoss = totalValue - totalCost;
    const gainLossPercent = ((gainLoss / totalCost) * 100).toFixed(2);
    
    return { ...item, totalValue, totalCost, gainLoss, gainLossPercent };
  });

  return (
    <>
        <div className="container my-5">
              <h2 className="mb-4 fw-bold" style={{ fontSize: '24px', color: '#212529' }}>Performance Analytics</h2>           
              <div className="row g-4 mb-4">
                <div className="col-md-4">
                  <div className="card-white p-4">
                    <div style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase' }}>Best Performer</div>
                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#198754' }}>
                      {enrichedData.reduce((max, item) => parseFloat(item.gainLossPercent) > parseFloat(max.gainLossPercent) ? item : max).symbol}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#212529' }}>
                      +{enrichedData.reduce((max, item) => parseFloat(item.gainLossPercent) > parseFloat(max.gainLossPercent) ? item : max).gainLossPercent}% return
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-white p-4">
                    <div style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase' }}>Worst Performer</div>
                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#dc3545' }}>
                      {enrichedData.reduce((min, item) => parseFloat(item.gainLossPercent) < parseFloat(min.gainLossPercent) ? item : min).symbol}
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#212529' }}>
                      {enrichedData.reduce((min, item) => parseFloat(item.gainLossPercent) < parseFloat(min.gainLossPercent) ? item : min).gainLossPercent}% return
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-white p-4">
                    <div style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase' }}>Portfolio Stats</div>
                    <div style={{ fontSize: '28px', fontWeight: '700', color: '#0d6efd' }}>{enrichedData.length}</div>
                    {/* <div style={{ fontSize: '14px', fontWeight: '600', color: '#212529' }}>
                      {enrichedData.filter(item => item.gainLoss > 0).length} profitable holdings
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="card-white p-4">
                <h5 className="fw-bold mb-4">Individual Performance</h5>
                {enrichedData.sort((a, b) => parseFloat(b.gainLossPercent) - parseFloat(a.gainLossPercent)).map(item => (
                  <div key={item.symbol} className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="fw-bold">{item.symbol} - {item.name}</span>
                      <span className="fw-bold" style={{ color: item.gainLoss >= 0 ? '#198754' : '#dc3545' }}>
                        {item.gainLossPercent >= 0 ? '+' : ''}{item.gainLossPercent}%
                      </span>
                    </div>
                    <div className="progress" style={{ height: '32px', borderRadius: '8px' }}>
                      <div
                        className="progress-bar"
                        style={{
                          width: `${Math.min(Math.abs(parseFloat(item.gainLossPercent)) * 2, 100)}%`,
                          backgroundColor: item.gainLoss >= 0 ? '#198754' : '#dc3545'
                        }}
                      >
                        <span className="px-2 fw-semibold">{item.gainLoss >= 0 ? '+' : ''}${item.gainLoss.toLocaleString('en-US', {maximumFractionDigits: 0})}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      }

