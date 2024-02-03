/* eslint-disable react/prop-types */
import cardBack from "../../images/bg-card-back.png";
import cardFront from "../../images/bg-card-front.png";
export default function CardImage({ inputForm }) {
  const formattedMonth = String(inputForm.month).padStart(2, "0");
  const formattedYear = String(inputForm.year).padStart(2, "0");
  const formattedCvc = String(inputForm.cvc).padStart(3, "0");
  return (
    <div className="flex w-full flex-col items-center lg:flex-col-reverse lg:gap-5">
      {/* card back */}
      <div className="relative left-20 max-w-sm">
        <img src={cardBack} alt="card back" className="bg-cover bg-center" />
        <div className="absolute right-[5.5rem] top-[5.6rem] min-[500px]:right-14">
          <p className=" font-light tracking-[0.1em] text-white">
            {formattedCvc}
          </p>
        </div>
      </div>
      {/* card front */}
      <div className="relative mx-4 -mt-16 max-w-sm shadow-xl lg:mt-0">
        <img
          src={cardFront}
          alt="card front"
          className="bg-cover bg-center shadow-xl"
        />
        <div className="absolute top-7 z-30 w-full px-4 font-spaceGrostesk text-white min-[425px]:px-8">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded-full bg-white"></div>
            <div className="h-4 w-4 rounded-full border border-white"></div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-light tracking-[0.1em]">
              {inputForm.cardNumber}
            </h3>
          </div>
          <div className="mt-5 flex justify-between text-lightGrayishViolet">
            <h4 className="text-sm uppercase tracking-widest">
              {inputForm.cardName}
            </h4>
            <p className="">
              {formattedMonth}/{formattedYear}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
