export const Item = (props) => {
  const { text } = props;
  return (
    <p className="font-['Work Sans'] text-base font normal text-[#3B3C4A]">
      {text}
    </p>
  );
};
