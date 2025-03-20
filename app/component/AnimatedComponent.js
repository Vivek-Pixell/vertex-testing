import { useEffect } from "react";
import gsap from "gsap";

export default function AnimatedComponent() {
  useEffect(() => {
    gsap.from(".box", { opacity: 0, duration: 1 });

  }, []);

  return <div className="box w-20 h-20 bg-blue-500"></div>;
}
