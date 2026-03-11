import { useState, useEffect, useRef } from "react";

const useActiveSection = (sectionIds) => {
  const [activeSection, setActiveSection] = useState("");
  const idsRef = useRef(sectionIds);

  useEffect(() => {
    const observers = idsRef.current.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return activeSection;
};

export default useActiveSection;
