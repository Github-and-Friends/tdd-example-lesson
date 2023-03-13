import logo from "./logo.svg";

interface Props {
  items: string[];
}

export default function ListItems({ items }: Props) {
  return (
    <ul>
      {items?.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
