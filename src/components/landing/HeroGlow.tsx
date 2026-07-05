import { motion } from "framer-motion";

export function HeroGlow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="absolute top-0 inset-x-0 -z-10 pointer-events-none"
    >
      <div className="relative h-[600px] sm:h-[800px] w-full overflow-hidden">
        <div
          className="absolute -top-[20%] -left-[20%] w-[60%] h-[80%] rounded-full opacity-40 mix-blend-screen"
          style={{
            background: "radial-gradient(circle, rgba(255,94,20,0.4) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute top-[10%] -right-[20%] w-[60%] h-[80%] rounded-full opacity-30 mix-blend-screen"
          style={{
            background: "radial-gradient(circle, rgba(255,61,0,0.4) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>
    </motion.div>
  );
}
