import { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipFormProps = {
  setTip: Dispatch<SetStateAction<number>>;
  tip: number;
};

export default function TipForm({ setTip, tip: tipState }: TipFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propinas:</h3>
      <form>
        {tipOptions.map((tip) => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input
              id={tip.id}
              type="radio"
              name="tip"
              value={tip.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tip.value === tipState}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
