import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Reveal({ as: Tag = 'div', className = '', delay, children, ...props }) {
  const ref = useScrollReveal();
  const delayClass = delay ? `reveal-on-scroll--delay-${delay}` : '';

  return (
    <Tag
      ref={ref}
      className={`reveal-on-scroll ${delayClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
