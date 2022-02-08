import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Footer() {
  return (
    <div
      className="flex justify-between m-auto py-4 w-4/5"
      id="footer"
    >
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default Footer;
