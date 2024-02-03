import completeIcon from "../../images/icon-complete.svg";

export default function CompleteMessage({ setSubmitSuccess }) {
  return (
    <div className="mx-4 mb-16 mt-14 flex w-full max-w-sm flex-col items-center lg:mb-0 lg:max-w-xl xl:max-w-2xl">
      <img
        src={completeIcon}
        alt="complete icon"
        className="mb-7 w-full max-w-[4rem] bg-cover bg-center"
      />
      <h3 className="text-2xl font-semibold uppercase tracking-[0.1em] text-veryDarkViolet">
        thank you!
      </h3>
      <p className="pt-3 font-semibold text-darkGrayishViolet">
        We've added your card details
      </p>
      <button
        type="button"
        className="mt-10 w-full rounded-md bg-veryDarkViolet px-8 py-3 text-center text-white lg:mx-auto lg:max-w-xs"
        onClick={() => setSubmitSuccess(false)}
      >
        Continue
      </button>
    </div>
  );
}
