type Props = {
  children: React.ReactNode;
};
export default function Button({ children }: Props) {
  return <button className="outline-none shadow-lg px-1">{children}</button>;
}
