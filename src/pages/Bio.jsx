import { michelangelo } from "../assets";
import { motion } from "framer-motion";

const Bio = () => {
    return (
        <main className="min-h-[calc(100vh-48px)] md:min-h-[calc(100vh-88px)] flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 py-8 px-8 lg:px-24 mt-[48px] md:mt-[88px]">
            <motion.img 
                src={michelangelo} alt="michelangelo" 
                className="w-full md:w-2/3 lg:w-1/3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            />

            <motion.div 
                className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4 text-white leading-normal text-justify"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <p>{`Michelangelo Buonarroti, born on March 6, 1475, in Caprese, Italy, was one of the most renowned artists of the Italian Renaissance. From a young age, Michelangelo showed exceptional talent and passion for the arts, leading him to become a master sculptor, painter, and architect. His artistic journey began under the patronage of Lorenzo de' Medici, where he honed his skills alongside other celebrated artists of the time. Michelangelo's works reflect his unparalleled skill, emotional intensity, and dedication to perfection.`}</p>

                <p>{`Michelangelo's most famous works include the breathtaking ceiling frescoes in the Sistine Chapel in Vatican City. Completed over a span of four years, these frescoes depict biblical stories and figures with extraordinary detail and composition. The Creation of Adam, a centerpiece of the ceiling, has become an iconic symbol of Western art. His magnificent sculptures, such as the marble statue of David, demonstrate his ability to capture human anatomy and emotion in a powerful and realistic manner. Additionally, Michelangelo left an indelible mark on architecture with his design of St. Peter's Basilica in Rome, showcasing his innovative vision and technical prowess.`}</p>

                <p>{`Michelangelo's legacy as a true Renaissance genius continues to inspire generations of artists and art enthusiasts worldwide. His contributions to the fields of sculpture, painting, and architecture were unparalleled during his time, and he played a pivotal role in shaping the artistic landscape of the Renaissance. His mastery of the human form, his ability to evoke deep emotions through his art, and his dedication to perfection remain an enduring testament to his genius. Michelangelo's works have left an indelible mark on art history, and his influence can be seen in countless works of art and architectural masterpieces that followed his time. He is regarded as one of the greatest artists of all time, and his legacy continues to inspire and captivate audiences to this day.`}</p>
            </motion.div>
        </main>
    );
};

export default Bio;