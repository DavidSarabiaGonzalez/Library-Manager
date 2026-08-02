interface AvailablePillProps {
  available?: string;
  quantity?: number;
}

export function AvailablePill(
  { available = "", quantity = 0 }: AvailablePillProps,
  { ...props },
) {
  {
    if (available == "") available = quantity > 0 ? "AVAILABLE" : "BORROWED";
  }

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
    <p className={`text-center rounded-xl w-25 mt-2 ${style}`} {...props}>
      {available}
    </p>
  );
}
