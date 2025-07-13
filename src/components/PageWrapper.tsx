import { motion } from 'framer-motion';

type Props = {
    children: React.ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down';
};

const getVariants = (direction: Props['direction']) => {
    const offset = 100;

    switch (direction) {
        case 'left':
            return {
                initial: { x: offset, opacity: 0 },
                animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
                exit: { x: -offset, opacity: 0, transition: { duration: 0.2 } },
            };
        case 'right':
            return {
                initial: { x: -offset, opacity: 0 },
                animate: { x: 0, opacity: 1, transition: { duration: 0.3 } },
                exit: { x: offset, opacity: 0, transition: { duration: 0.2 } },
            };
        case 'up':
            return {
                initial: { y: offset, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
                exit: { y: -offset, opacity: 0, transition: { duration: 0.2 } },
            };
        case 'down':
            return {
                initial: { y: -offset, opacity: 0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.3 } },
                exit: { y: offset, opacity: 0, transition: { duration: 0.2 } },
            };
        default:
            return {
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { duration: 0.2 } },
                exit: { opacity: 0, transition: { duration: 0.3 } },
            };
    }
};

export default function PageWrapper({ children, direction = 'down' }: Props) {
    const variants = getVariants(direction);

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen"
        >
            {children}
        </motion.div>
    );
}
