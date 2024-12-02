export default function ProductCard({ name, price, image, rating, category }) {
  const handleCardClick = () => {
    console.log("Card clicked: ", name);
  };

  const handleBuyClick = () => {
    console.log("Buy button clicked: ", name);
  };

  return (
    <div
      className="card bg-neutral-5 w-[313px] shadow-xl flex-shrink-0 transform transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95 hover:shadow-2xl cursor-pointer"
      onClick={handleCardClick}
    >
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="p-4">
        <div className="flex justify-between top-0">
          <h2 className="text-xl font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
            {name}
          </h2>
          <h2 className="text-xl font-semibold w-40 text-end max-w-[120px] overflow-hidden text-ellipsis">
            {price}
          </h2>
        </div>
        <p className="font-normal text-[14px]">{category}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <p className="font-semibold text-[14px]">{rating}</p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.14168 1.02179L5.18879 4.90022L0.819452 5.52416C0.035902 5.63548 -0.278116 6.58165 0.290107 7.12358L3.45122 10.1408L2.70356 14.4029C2.56898 15.1734 3.39739 15.7504 4.09122 15.3901L8 13.3777L11.9088 15.3901C12.6026 15.7475 13.431 15.1734 13.2964 14.4029L12.5488 10.1408L15.7099 7.12358C16.2781 6.58165 15.9641 5.63548 15.1805 5.52416L10.8112 4.90022L8.85832 1.02179C8.50841 0.33047 7.49458 0.321683 7.14168 1.02179Z"
                fill="#1F92C5"
              />
            </svg>
          </div>
          <button
            className="btn bg-primary-4 px-5 text-neutral-5"
            onClick={(e) => {
              e.stopPropagation();
              handleBuyClick();
            }}
          >
            Beli
          </button>
        </div>
      </div>
    </div>
  );
}