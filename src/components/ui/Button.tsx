type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};
export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="outline-none shadow-lg px-1"
      aria-label="clipboard copy"
    >
      {children}
    </button>
  );
}
