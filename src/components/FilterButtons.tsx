export type FilterType = "all" | "present" | "absent";

type FilterButtonsProps = {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {

  function getButtonClass(filter: FilterType) {
    const base = "px-4 py-2 text-sm font-medium rounded-md transition duration-150";
    const active = "bg-slate-900 text-white";
    const inactive = "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50";

    return `${base} ${activeFilter === filter ? active : inactive}`;
  }

  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onFilterChange("all")}
        className={getButtonClass("all")}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("present")}
        className={getButtonClass("present")}
      >
        Present
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("absent")}
        className={getButtonClass("absent")}
      >
        Absent
      </button>
    </div>
  );
}

export default FilterButtons;
