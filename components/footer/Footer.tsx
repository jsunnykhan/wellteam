import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Footer() {
  return (
    <div className="flex justify-between my-auto" id="footer">
      <LeftSection />
      <RightSection />
    </div>
  );
}

export default Footer;
