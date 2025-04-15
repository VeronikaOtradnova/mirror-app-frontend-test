interface IProps {
  message: string;
};

export function ErrorMessage ({ message }: IProps) {
  return (
    <div className="bg-transparent text-red-700 text-sm text-center">
      {message}
    </div>
  );
};