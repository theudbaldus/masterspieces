import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Social = () => {
    return (
        <div className="w-fit h-fit fixed bottom-[32px] left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:left-[32px] lg:left-[64px] hidden md:flex flex-row md:flex-col gap-8 backdrop-blur">
            <FaTwitter className="w-5 h-5 text-white cursor-pointer" />
            <FaInstagram className="w-5 h-5 text-white cursor-pointer" />
            <FaFacebook className="w-5 h-5 text-white cursor-pointer" />
        </div>
    );
};

export default Social;