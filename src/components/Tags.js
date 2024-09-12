export const Tags = (props) => {
  const { text } = props;
  return (
    <p onClick={handleSelectTag} className="text-xs font-bold text-[#495057]">
      {text}
    </p>
  );
};
