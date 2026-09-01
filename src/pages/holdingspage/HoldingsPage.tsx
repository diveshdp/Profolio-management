import { AgGridReact } from "ag-grid-react";
import { holdingsColumnDefs } from "./HoldingsPage.config";
import { enrichedData } from "../../constants/portfolio.constants";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const HoldingsPage = () => {
  return (
    <div className="container py-4">

      <h2 className="mb-4 fw-bold" style={{ fontSize: "24px", color: "#212529" }}>
        All Holdings
      </h2>

      <div className="card-white p-4" style={{ height: "600px" }}>
        <div className="ag-theme-quartz" style={{ height: "100%", width: "100%" }}>
          <AgGridReact
            theme="quartz"
            rowData={enrichedData}
            columnDefs={holdingsColumnDefs}
            enableCellTextSelection={true}
            suppressMovableColumns={true}
            animateRows={true}
            pagination={true}
            paginationPageSize={10}
          />
        </div>
      </div>
    </div>
  );
};

export default HoldingsPage;
