import { motion } from "framer-motion";

const data = [30, 50, 80, 40, 70];

const BarGraph3D = () => {
  return (
    <div className="flex h-[100px] w-[100px] items-end gap-2 rounded-lg bg-secondary/30 p-4">
      {data.map((value, index) => (
        <motion.div
          key={index}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: `${value}%`, opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          // Replaced the inline style with theme-aware Tailwind classes
          className="relative w-8 rounded-md bg-gradient-to-b from-primary to-accent shadow-lg shadow-black/50"
        />
      ))}
    </div>
  );
};

export default BarGraph3D;