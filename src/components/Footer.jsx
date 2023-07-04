import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 px-8 lg:px-16 py-4 md:py-8 border-t border-gray-500 text-white">
            <a href="/" className="text-xs md:text-base font-bold uppercase">{`Master's Pieces`}</a>

            <p className="text-xs md:text-base text-center">A showcase of the top five major works by Michelangelo, inspired by <a className="font-bold underline" href="https://dribbble.com/shots/16386948-NFT-Marketplace-Header" target="_blank" rel="noreferrer">Permadi Satria Dewanto</a>.</p>

            <p className="text-xs md:text-base text-center">Coded by Thibault Thomas (Theudbaldus)</p>

            <a href="https://github.com/theudbaldus" target="_blank" rel="noreferrer">
                <FaGithub className="w-5 h-5 text-white" />
            </a>
        </div>
    );
};

export default Footer