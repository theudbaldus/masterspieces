import { Gallery } from "../components";

const Home = () => {
    return (
        <main className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-88px)] flex flex-col items-center justify-center gap-8 px-8 lg:px-16 mt-[48px] md:mt-[88px]">
            <Gallery />
        </main>
    );
};

export default Home;