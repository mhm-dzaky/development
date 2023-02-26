interface Props {
  text: string;
  type?: "primary" | "secondary";
  className?: string;
}

export default function Button(Props: Props) {
  return (
    <button
      className={`bg-black px-3 py-2 text-white hover:bg-zinc-800
    ${
      Props.type === "secondary" &&
      "bg-white border-2 border-black text-black hover:text-white"
    }
    ${Props.className}
    `}
    >
      {Props.text}
    </button>
  );
}


//https://youtu.be/IlNRFc2d2dU?t=5155