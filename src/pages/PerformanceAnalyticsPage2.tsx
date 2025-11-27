import  {monthlyData, enrichedData, totalValue, totalCost, totalGainLoss, totalReturn, sectorData, sectorColors} from '../constants/portfolio.constants';
export default function PerformanceAnalyticsPage() {
  return (
  <> 
     <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      
      <style>{`
        body { background-color: #f8f9fa; margin: 0; }
        .stat-card { background: white; border-radius: 12px; padding: 24px; border-left: 4px solid; box-shadow: 0 2px 8px rgba(0,0,0,0.08); transition: all 0.3s; }
        .stat-card:hover { transform: translateY(-4px); box-shadow: 0 6px 20px rgba(0,0,0,0.12); }
        .card-white { background: white; border-radius: 12px; border: 1px solid #dee2e6; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
        .nav-btn { background: transparent; border: 2px solid #dee2e6; color: #495057; padding: 10px 24px; margin: 0 6px; border-radius: 8px; font-weight: 600; transition: all 0.3s; }
        .nav-btn:hover { border-color: #0d6efd; color: #0d6efd; background: #e7f1ff; }
        .nav-btn.active { background: #0d6efd; color: white; border-color: #0d6efd; }
      `}</style>

      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <nav className="bg-white border-bottom" style={{ padding: '20px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <div className="container-fluid px-4">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="mb-0 fw-bold" style={{ color: '#212529', fontSize: '28px' }}>💼 Wealth Management Pro</h1>
              <div>
                <button className={activeTab === 'home' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActiveTab('home')}>Dashboard</button>
                <button className={activeTab === 'portfolio' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActiveTab('portfolio')}>Holdings</button>
                <button className={activeTab === 'analytics' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActiveTab('analytics')}>Analytics</button>
              </div>
            </div>
          </div>
        </nav>

        <div className="container-fluid px-4 py-4">
          {activeTab === 'home' && (
            <div>
              <h2 className="mb-4 fw-bold" style={{ fontSize: '24px', color: '#212529' }}>Portfolio Dashboard</h2>
              
              <div className="row g-4 mb-4">
                <div className="col-lg-3 col-md-6">
                  <div className="stat-card" style={{ borderLeftColor: '#0d6efd' }}>
                    <div style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase' }}>Portfolio Value</div>
                    <div className="fw-bold" style={{ fontSize: '32px', color: '#212529' }}>${(totalValue / 1000).toFixed(1)}K</div>
                    <div style={{ fontSize: '13px', color: '#6c757d' }}>${totalValue.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stat-card" style={{ borderLeftColor: '#6c757d' }}>
                    <div style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase' }}>Cost Basis</div>
                    <div className="fw-bold" style={{ fontSize: '32px', color: '#212529' }}>${(totalCost / 1000).toFixed(1)}K</div>
                    <div style={{ fontSize: '13px', color: '#6c757d' }}>${totalCost.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stat-card" style={{ borderLeftColor: totalGainLoss >= 0 ? '#198754' : '#dc3545' }}>
                    <div style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase' }}>Gain/Loss</div>
                    <div className="fw-bold" style={{ fontSize: '32px', color: totalGainLoss >= 0 ? '#198754' : '#dc3545' }}>{totalGainLoss >= 0 ? '+' : ''}${(Math.abs(totalGainLoss) / 1000).toFixed(1)}K</div>
                    <div style={{ fontSize: '13px', color: '#6c757d' }}>{totalGainLoss >= 0 ? '+' : ''}${totalGainLoss.toLocaleString('en-US', {minimumFractionDigits: 2})}</div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="stat-card" style={{ borderLeftColor: totalReturn >= 0 ? '#198754' : '#dc3545' }}>
                    <div style={{ fontSize: '13px', color: '#6c757d', marginBottom: '8px', fontWeight: '600', textTransform: 'uppercase' }}>Total Return</div>
                    <div className="fw-bold" style={{ fontSize: '32px', color: totalReturn >= 0 ? '#198754' : '#dc3545' }}>{totalReturn >= 0 ? '+' : ''}{totalReturn}%</div>
                    <div style={{ fontSize: '13px', color: '#6c757d' }}>Since inception</div>
                  </div>
                </div>
              </div>

              <div className="row g-4 mb-4">
                <div className="col-lg-8">
                  <div className="card-white p-4">
                    <h5 className="fw-bold mb-4">Portfolio Growth (6 Months)</h5>
                    <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '10px', borderBottom: '2px solid #dee2e6', paddingBottom: '10px' }}>
                      {monthlyData.map(item => {
                        const maxVal = Math.max(...monthlyData.map(d => d.value));
                        const height = (item.value / maxVal) * 100;
                        return (
                          <div key={item.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: '12px', fontWeight: '600', color: '#0d6efd', marginBottom: '5px' }}>${(item.value / 1000).toFixed(0)}K</div>
                            <div style={{ width: '100%', height: `${height}%`, background: 'linear-gradient(180deg, #0d6efd, #0a58ca)', borderRadius: '6px 6px 0 0', minHeight: '20px' }}></div>
                            <div style={{ marginTop: '10px', fontSize: '13px', fontWeight: '600', color: '#6c757d' }}>{item.month}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-center mt-3">
                      <span className="badge bg-success px-3 py-2">+{((totalValue - monthlyData[0].value) / monthlyData[0].value * 100).toFixed(1)}% Growth</span>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-4">
                  <div className="card-white p-4">
                    <h5 className="fw-bold mb-4">Sector Distribution</h5>
                    {Object.entries(sectorData).map(([sector, value]) => {
                      const pct = ((value / totalValue) * 100).toFixed(1);
                      return (
                        <div key={sector} className="mb-3">
                          <div className="d-flex justify-content-between mb-2">
                            <div className="d-flex align-items-center">
                              <div style={{ width: '12px', height: '12px', borderRadius: '3px', backgroundColor: sectorColors[sector], marginRight: '10px' }}></div>
                              <span className="fw-semibold">{sector}</span>
                            </div>
                            <span className="fw-bold">{pct}%</span>
                          </div>
                          <div className="progress" style={{ height: '24px', borderRadius: '8px' }}>
                            <div className="progress-bar" style={{ width: `${pct}%`, backgroundColor: sectorColors[sector] }}>
                              <span style={{ fontSize: '12px', fontWeight: '600' }}>${(value / 1000).toFixed(1)}K</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="card-white p-4">
                <h5 className="fw-bold mb-4">Top Holdings</h5>
                <table className="table mb-0">
                  <thead style={{ backgroundColor: '#f8f9fa' }}>
                    <tr>
                      <th className="fw-bold border-0 p-3">SYMBOL</th>
                      <th className="fw-bold border-0 p-3">COMPANY</th>
                      <th className="fw-bold border-0 p-3 text-end">VALUE</th>
                      <th className="fw-bold border-0 p-3 text-end">RETURN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enrichedData.sort((a, b) => b.totalValue - a.totalValue).map(item => (
                      <tr key={item.symbol}>
                        <td className="fw-bold p-3">{item.symbol}</td>
                        <td className="p-3">{item.name}</td>
                        <td className="text-end p-3">${item.totalValue.toLocaleString('en-US', {maximumFractionDigits: 0})}</td>
                        <td className="text-end p-3">
                          <span className={`badge rounded-pill px-3 ${parseFloat(item.gainLossPercent) >= 0 ? 'bg-success' : 'bg-danger'}`}>
                            {item.gainLossPercent >= 0 ? '+' : ''}{item.gainLossPercent}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'portfolio' && (
            <div>
              <h2 className="mb-4 fw-bold" style={{ fontSize: '24px', color: '#212529' }}>All Holdings</h2>
              <div className="card-white p-4">
                <table className="table mb-0">
                  <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
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
                    {enrichedData.map(item => (
                      <tr key={item.symbol}>
                        <td className="fw-bold p-3">{item.symbol}</td>
                        <td className="p-3">{item.name}</td>
                        <td className="p-3">
                          <span className="badge rounded-pill px-3" style={{ backgroundColor: sectorColors[item.sector], color: 'white' }}>{item.sector}</span>
                        </td>
                        <td className="text-end p-3">{item.shares}</td>
                        <td className="text-end p-3">${item.currentPrice.toFixed(2)}</td>
                        <td className="text-end fw-bold p-3">${item.totalValue.toLocaleString('en-US', {maximumFractionDigits: 0})}</td>
                        <td className="text-end fw-bold p-3" style={{ color: item.gainLoss >= 0 ? '#198754' : '#dc3545' }}>
                          {item.gainLoss >= 0 ? '+' : ''}${item.gainLoss.toLocaleString('en-US', {maximumFractionDigits: 0})}
                        </td>
                        <td className="text-end p-3">
                          <span className={`badge rounded-pill px-3 ${parseFloat(item.gainLossPercent) >= 0 ? 'bg-success' : 'bg-danger'}`}>
                            {item.gainLossPercent >= 0 ? '+' : ''}{item.gainLossPercent}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
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
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#212529' }}>
                      {enrichedData.filter(item => item.gainLoss > 0).length} profitable holdings
                    </div>
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
          )}
        </div>
      </div>
    </div>
  </>
  )
}

