import ButtonProps from './ButtonProps';

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <div className="mb-5">
      <button
        type="submit"
        onClick={onClick}
        value="Create account"
        className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:scale-105 hover:bg-opacity-90 active:scale-95"
      >
        {children}
      </button>
    </div>
  );
}
