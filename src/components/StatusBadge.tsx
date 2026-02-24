type StatusBadgeProps = {
  attendance: number;
};

function StatusBadge({ attendance }: StatusBadgeProps) {
  const isLow = attendance < 75;

  return (
    <span
      className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
        isLow ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
      }`}
    >
      {isLow ? "Low" : "Good"}
    </span>
  );
}

export default StatusBadge;