const AddButton = ({ onClick }: { onClick: () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="text-xs p-2 rounded border border-gray-300 bg-gray-200 hover:bg-gray-300 hover:bg-gray-400"
    >
      Add to Basket
    </button>
  );
};

export default AddButton;
