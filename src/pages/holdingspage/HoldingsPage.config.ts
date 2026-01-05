// src/pages/holdings/HoldingsPage.config.ts
import { sectorColors } from "../../constants/portfolio.constants";

export const holdingsColumnDefs = [
  { headerName: "SYMBOL", field: "symbol", width: 120, cellClass: "fw-bold" },
  { headerName: "COMPANY", field: "name", flex: 1 },
  { headerName: "SECTOR", field: "sector", width: 150 },
  { headerName: "SHARES", field: "shares", width: 120, type: "rightAligned" },
  {
    headerName: "PRICE",
    field: "currentPrice",
    width: 120,
    type: "rightAligned",
    valueFormatter: (p: any) => `$${p.value.toFixed(2)}`,
  },
  {
    headerName: "VALUE",
    field: "totalValue",
    width: 140,
    type: "rightAligned",
    valueFormatter: (p: any) =>
      `$${p.value.toLocaleString("en-US", { maximumFractionDigits: 0 })}`,
  },
  {
    headerName: "GAIN / LOSS",
    field: "gainLoss",
    width: 140,
    type: "rightAligned",
    cellStyle: (p: any) => ({
      color: p.value >= 0 ? "#198754" : "#dc3545",
      fontWeight: 600,
    }),
    valueFormatter: (p: any) =>
      `${p.value >= 0 ? "+" : ""}$${p.value.toLocaleString("en-US")}`,
  },
  {
    headerName: "RETURN",
    field: "gainLossPercent",
    width: 120,
    type: "rightAligned",
  },
];
