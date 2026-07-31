interface AvailablePillProps {
  available: string;
}

export function AvailablePill({ available }: AvailablePillProps) {
  let style: string;
  switch (available) {
    case "AVAILABLE":
      style = "bg-green-600/30 text-green-800";
      available = "Disponible";
      break;
    case "BORROWED":
      style = "bg-orange-600/30 text-orange-800";
      available = "Prestado";
      break;
    case "LOST":
      style = "bg-gray-600/30 text-gray-800";
      available = "Perdido";
      break;
    case "DAMAGED":
      style = "bg-red-600/30 text-red-800";
      available = "Dañado";
      break;
    default:
      style = "bg-purple-600/30 text-purple-800";
      available = "Error";
      break;
  }

  return (
    <p className={`text-center rounded-xl w-25 mt-2 ${style}`}>{available}</p>
  );
}
