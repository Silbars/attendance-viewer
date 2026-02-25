export type SortType = "none" | "ascending" | "descending";

type SortProps = {
  sortType: SortType;
  onSort: (sortType: SortType) => void;
};

function Sort({ sortType, onSort }: SortProps) {
  return (
    <div>
      <select
        value={sortType}
        onChange={(e) => onSort(e.target.value as SortType)}
        className="px-3 py-2 rounded-md border border-slate-700 bg-slate-900 text-slate-200"
      >
        <option value="none" selected>
          None
        </option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
}

export default Sort;
