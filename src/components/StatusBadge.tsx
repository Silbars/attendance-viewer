type StatusBadgeProps = {
  presentToday: boolean;
};

function StatusBadge({ presentToday }: StatusBadgeProps) {
  const isLow = !presentToday;

  return (
    <span
      className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
        isLow ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
      }`}
    >
      {isLow ? "Absent" : "Present"}
    </span>
  );
}

export default StatusBadge;