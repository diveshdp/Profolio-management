// src/pages/holdings/HoldingsPage.config.ts
import { sectorColors } from "../../constants/portfolio.constants";

export const holdingsColumnDefs = [
  { headerName: "SYMBOL", field: "symbol", width: 120, cellClass: "fw-bold" },
  { headerName: "COMPANY", field: "name", flex: 1 },

  // {
  //   headerName: "SECTOR",
  //   field: "sector",
  //   width: 150,
  //   cellRenderer: (params: any) => {
  //     const color = sectorColors[params.value] || "#6c757d";
  //     return `
  //       <span style="
  //         background:${color};
  //         padding:6px 12px;
  //         color:white;
  //         border-radius:16px;
  //         font-size:12px;
  //         font-weight:600;
  //       ">
  //         ${params.value}
  //       </span>
  //     `;
  //   },
  // },

  {
    headerName: "SECTOR",
    field: "sector",
    width: 150,
    cellRenderer: (params: any) => {
      const color = sectorColors[params.value] || "#0d6efd";

      return `
      <span style="
        display:inline-block;
        background-color:${color};
        padding:6px 14px;
        color:white;
        border-radius:20px;
        font-size:12px;
        font-weight:600;
        text-transform:uppercase;
      ">
        ${params.value}
      </span>
    `;
    },
  },

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
    cellRenderer: (p: any) => {
      const positive = parseFloat(p.value) >= 0;
      return `
        <span class="badge rounded-pill px-3 ${
          positive ? "bg-success" : "bg-danger"
        }">
          ${positive ? "+" : ""}${p.value}%
        </span>
      `;
    },
  },
];
