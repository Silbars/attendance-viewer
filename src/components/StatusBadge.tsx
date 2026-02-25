type StatusBadgeProps = {
  presentToday: boolean;
};

function StatusBadge({ presentToday }: StatusBadgeProps) {
  const isLow = !presentToday;

  return (
    <span
      className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
        isLow ? "bg-red-900/40 text-red-300" : "bg-green-900/40 text-green-300"
      }`}
    >
      {isLow ? "Absent" : "Present"}
    </span>
  );
}

export default StatusBadge;