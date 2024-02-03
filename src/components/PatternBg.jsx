import heroImgDesktop from "../../images/bg-main-desktop.png";
import heroImgMobile from "../../images/bg-main-mobile.png";
export default function PatternBg() {
  return (
    <picture className="absolute h-full w-full lg:h-screen">
      <source srcSet={heroImgDesktop} media="(min-width: 1024px)" />
      <img
        src={heroImgMobile}
        alt="hero img"
        className="max-h-[60vh] w-full bg-cover bg-center lg:h-full lg:max-h-none lg:w-[75vh] xl:w-[50vh]"
      />
    </picture>
  );
}
