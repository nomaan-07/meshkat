import { LucideChevronLeft, LucideChevronRight } from "lucide-react";
import Button from "../buttons/Button";

function Pagination() {
  return (
    <div className="flex flex-col justify-between gap-6 text-sm select-none sm:flex-row sm:items-center">
      <div className="text-center">
        نمایش <span className="font-medium">1</span> تا{" "}
        <span className="font-medium">10</span> از{" "}
        <span className="font-medium">45</span> نتیجه
      </div>

      <div className="flex gap-2">
        <Button variant="pagination">
          <LucideChevronRight className="size-4" />
          <span>قبلی</span>
        </Button>
        <Button variant="pagination">
          <span>بعدی</span>
          <LucideChevronLeft className="size-4" />
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
