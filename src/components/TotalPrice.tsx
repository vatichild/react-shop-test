const TotalPrice = ({ totalPrice }: { totalPrice: number }) => {
  return (
    <div className="flex p-8 flex-row w-full justify-end text-base">
      Total Price: £{totalPrice}
    </div>
  );
};

export default TotalPrice;
