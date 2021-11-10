import { useState, useRef, useEffect } from 'react';
import { spring, Motion, presets }  from 'react-motion';
import './skill.css'



const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    
    observer.current = new window.IntersectionObserver(([entry]) => updateEntry(entry),
      { root: root.current, rootMargin, threshold }
    );
    
    const { current: currentObserver } = observer;
    
    if (node) currentObserver.observe(node);
    
    return () => currentObserver.disconnect();
  },
  [node, root, rootMargin, threshold]);

  return [setNode, entry];
};

// Generate collection
const generate = v => Array.from(Array(v), (_, x) => x);


const Box = ({ root }) => {
  const [ref, entry] = useIntersect({ root, threshold: 0.5 });
  console.log(entry.intersectionRatio);
  const inView = ( entry.intersectionRatio >= 0.5);
  const styles = {
    opacity: spring(inView? 1: 0, presets.stiff),
    scale: spring(inView? 1: 0.8, presets.wobbly),
  };
  return (
    <Motion defaultStyle={{ opacity: 0, scale: 0 }} style={styles}>
      {({ opacity, scale }) => 
        (<div class="box" ref={ref} style={{ opacity }}>
          <div class="box__inner" style={{ transform: `scale(${scale})` }}>
            <h2 class="box__heading">Option</h2>
          </div>
        </div>)
      }
    </Motion>
  );
}

const App = ({ list = [] }) => {
  const ref = useRef(null);
  return (

      <div ref={ref} class="app">
        {list.map(k => <Box key={k} root={ref} />)}
      </div>
  );
}

const list = generate(50);
const Skill=()=>{
    return (
    
        <App list={list} />);
};

export default Skill;