import { useState, useRef, useEffect } from "react";
import { spring, Motion, presets } from "react-motion";
import "./skill.css";
import { CloseButton } from "react-bootstrap";

const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new window.IntersectionObserver(
      ([entry]) => updateEntry(entry),
      { root: root.current, rootMargin, threshold }
    );

    const { current: currentObserver } = observer;

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};

const Box = (props) => {
  const root = props.root;
  const [ref, entry] = useIntersect({ root, threshold: 0.5 });

  const inView = entry.intersectionRatio >= 0.5;
  const styles = {
    opacity: spring(inView ? 1 : 0, presets.stiff),
    scale: spring(inView ? 1 : 0.8, presets.wobbly),
  };
  return (
    <Motion defaultStyle={{ opacity: 0, scale: 0 }} style={styles}>
      {({ opacity, scale }) => (
        <div class="box" ref={ref} style={{ opacity }}>
          <div class="box__inner" style={{ transform: `scale(${scale})` }}>
            <h2 class="box__heading">{props.value} </h2>
            <CloseButton />
          </div>
        </div>
      )}
    </Motion>
  );
};

const App = (props) => {
  const ref = useRef(null);
  return (
    <div ref={ref} class="app">
      {props.list.map((k) => (
        <Box value={k} root={ref} />
      ))}
    </div>
  );
};

const Skill = (props) => {
  return <App list={props.list} />;
};

export default Skill;
