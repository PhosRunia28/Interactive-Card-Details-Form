import cn from "classnames";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
export default function CardForm({
  submitSuccess,
  setSubmitSuccess,
  watchInput,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    watch,
  } = useForm({
    defaultValues: {
      cardName: "Jane Appleseed",
      cardNumber: "0000 0000 0000 0000",
      month: 0,
      year: 0,
      cvc: 0,
    },
  });

  // submit reset
  useEffect(() => {
    if (isSubmitSuccessful) {
      setSubmitSuccess(!submitSuccess);
      reset();
    }
  }, [isSubmitSuccessful, reset, submitSuccess, setSubmitSuccess]);

  // watch value
  useEffect(() => {
    const subscription = watch((value) => {
      watchInput(value);
    });
    return () => subscription.unsubscribe();
  }, [watch, watchInput]);

  function onSubmit(data) {
    watchInput(data);
  }
  return (
    <form
      action=""
      className="relative z-40 mx-4 mb-16 mt-14 flex w-full max-w-sm flex-col gap-5 lg:max-w-xl lg:px-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-3">
        <label
          htmlFor="cardName"
          className="text-xs font-bold uppercase tracking-[0.1em]"
        >
          Cardholder Name
        </label>
        <input
          type="text"
          placeholder="e.g. Jane Appleseed"
          className={cn(
            "rounded-lg border-2 border-lightGrayishViolet px-6 py-2 placeholder:text-lg placeholder:font-semibold  placeholder:text-darkGrayishViolet focus:border-veryDarkViolet focus:outline-none",
            {
              "focus:border-error": isSubmitted,
              "focus:border-veryDarkViolet": !isSubmitted,
            },
          )}
          name="cardName"
          {...register("cardName", {
            required: {
              value: true,
              message: "Can't be blank",
            },
          })}
        />
        <p className="text-xs text-error">{errors.cardName?.message}</p>
      </div>
      <div className="flex flex-col gap-3">
        <label
          htmlFor="cardNumber"
          className="text-xs font-bold uppercase tracking-[0.1em]"
        >
          Card Number
        </label>
        <input
          type="text"
          placeholder="e.g. 1234 5678 9123 0000"
          className={cn(
            "rounded-lg border-2 border-lightGrayishViolet px-6 py-2 placeholder:text-lg placeholder:font-semibold  placeholder:text-darkGrayishViolet focus:border-veryDarkViolet focus:outline-none",
            {
              "focus:border-error": isSubmitted,
              "focus:border-veryDarkViolet": !isSubmitted,
            },
          )}
          name="cardNumber"
          {...register("cardNumber", {
            required: {
              value: true,
              message: "Can't be blank",
            },
            pattern: {
              value: /^[0-9]+$/,
              // value: /^(0?[1-9]|1[0-2])$/,
              message: "Wrong format, numbers only",
            },
          })}
        />
        <p className="text-xs text-error">{errors.cardNumber?.message}</p>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="month"
            className="text-xs font-bold uppercase tracking-[0.1em]"
          >
            Exp. Date
          </label>
          <input
            type="number"
            placeholder="MM"
            className={cn(
              "w-full max-w-[6rem] rounded-lg border-2 border-lightGrayishViolet px-4 py-2 placeholder:text-lg placeholder:font-semibold placeholder:text-darkGrayishViolet focus:border-veryDarkViolet focus:outline-none",
              {
                "focus:border-veryDarkViolet": !isSubmitted,
                "focus:border-error": isSubmitted,
              },
            )}
            name="month"
            max={12}
            min={1}
            {...register("month", {
              required: {
                value: true,
                message: "Can't be blank",
                valueAsNumber: true,
              },
            })}
          />
          <p className="text-xs text-error">{errors.month?.message}</p>
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="year"
            className="text-xs font-bold uppercase tracking-[0.1em]"
          >
            (MM/YY)
          </label>
          <input
            type="number"
            placeholder="YY"
            className={cn(
              "w-full max-w-[6rem] rounded-lg border-2 border-lightGrayishViolet px-4 py-2 placeholder:text-lg placeholder:font-semibold placeholder:text-darkGrayishViolet focus:border-veryDarkViolet focus:outline-none",
              {
                "focus:border-veryDarkViolet": !isSubmitted,
                "focus:border-error": isSubmitted,
              },
            )}
            name="year"
            min={0}
            max={100}
            {...register("year", {
              required: {
                value: true,
                message: "Can't be blank",
                valueAsNumber: true,
              },
            })}
          />
          <p className="text-xs text-error">{errors.year?.message}</p>
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="cvc"
            className="text-xs font-bold uppercase tracking-[0.1em]"
          >
            CVC
          </label>
          <input
            type="number"
            placeholder="e.g. 123"
            className={cn(
              "w-full max-w-xs rounded-lg border-2 border-lightGrayishViolet px-4 py-2 placeholder:text-lg placeholder:font-semibold placeholder:text-darkGrayishViolet focus:border-veryDarkViolet focus:outline-none",
              {
                "focus:border-veryDarkViolet": !isSubmitted,
                "focus:border-error": isSubmitted,
              },
            )}
            name="cvc"
            min={0}
            {...register("cvc", {
              required: {
                value: true,
                message: "Can't be blank",
                valueAsNumber: true,
              },
            })}
          />
          <p className="text-xs text-error">{errors.cvc?.message}</p>
        </div>
      </div>
      <button
        type="submit"
        className=" mt-4 w-full rounded-md bg-veryDarkViolet px-8 py-3 text-center text-white"
      >
        Confirm
      </button>
    </form>
  );
}
