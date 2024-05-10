import { useRef } from "react";
import style from "./Animation.module.css"
import { useInView } from "framer-motion";

function Section({ children,segundos }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className={style.section} ref={ref}>
            <span style={{ transform: isInView ? "none" : "translateY(100px)", opacity: isInView ? 1 : 0, transition: 'all 0.'+segundos+'s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'}}>
                {children}
            </span>
        </div>
    );
}

export default Section