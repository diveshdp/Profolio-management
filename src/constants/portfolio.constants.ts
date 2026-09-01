// mock portfolio data
export const portfolioData = [
  { symbol: 'AAPL', name: 'Apple Inc.', shares: 150, buyPrice: 145.30, currentPrice: 178.50, sector: 'Technology' },
  { symbol: 'MSFT', name: 'Microsoft Corp.', shares: 100, buyPrice: 320.00, currentPrice: 378.91, sector: 'Technology' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.', shares: 75, buyPrice: 125.50, currentPrice: 141.80, sector: 'Technology' },
  { symbol: 'JPM', name: 'JPMorgan Chase', shares: 200, buyPrice: 142.10, currentPrice: 158.30, sector: 'Financial' },
  { symbol: 'JNJ', name: 'Johnson & Johnson', shares: 120, buyPrice: 162.00, currentPrice: 156.25, sector: 'Healthcare' },
  { symbol: 'V', name: 'Visa Inc.', shares: 90, buyPrice: 225.00, currentPrice: 267.45, sector: 'Financial' },
];

// enrich portfolio data with calculated fields
export const enrichedData = portfolioData.map(item => {
  const totalValue = item.shares * item.currentPrice;
  const totalCost = item.shares * item.buyPrice;
  const gainLoss = totalValue - totalCost;
  const gainLossPercent = ((gainLoss / totalCost) * 100).toFixed(2);

  return {
    ...item,
    totalValue,
    totalCost,
    gainLoss,
    gainLossPercent,
  };
});

// aggregate portfolio metrics
export const totalValue = enrichedData.reduce((sum, item) => sum + item.totalValue, 0);

export const totalCost = enrichedData.reduce((sum, item) => sum + item.totalCost, 0);

export const totalGainLoss = totalValue - totalCost;

export const totalReturn = ((totalGainLoss / totalCost) * 100).toFixed(2);


// sector-wise distribution
export const sectorData: Record<string, number> = {};

enrichedData.forEach(item => {
  if (!sectorData[item.sector]) {
    sectorData[item.sector] = 0;
  }
  sectorData[item.sector] += item.totalValue;
});

// monthly portfolio value data 
export const monthlyData = [
  { month: 'Jun', value: 82000 },
  { month: 'Jul', value: 85000 },
  { month: 'Aug', value: 88000 },
  { month: 'Sep', value: 91000 },
  { month: 'Oct', value: 95000 },
  { month: 'Nov', value: totalValue },
];

// sector colors
export const sectorColors: Record<string, string> = {
  Technology: '#0d6efd',
  Financial: '#198754',
  Healthcare: '#6f42c1',
};
