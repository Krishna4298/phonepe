import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#5F259F] py-8 mt-10 w-full">
      <div className="phonepe-container">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mb-6">
            <div className="text-white text-4xl font-bold mb-4">PhonePe</div>
            <Image
              src="/images/phonepe-footer.png"
              alt="PhonePe"
              width={300}
              height={150}
              className="max-w-[280px] h-auto"
            />
          </div>
          <div className="text-center text-white">
            <p className="text-sm max-w-[300px]">
              Quick and easy mobile recharges and bill payments
            </p>
            <div className="mt-6 text-xs opacity-80">
              © {new Date().getFullYear()} PhonePe. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
