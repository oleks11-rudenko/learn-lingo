import css from './Container.module.css';

interface ContainerProps {
  children: React.ReactNode;
  paddings?: number;
}

export default function Container({ children, paddings }: ContainerProps) {
  return (
    <div className={css.container} style={{ paddingLeft: paddings, paddingRight: paddings }}>
      {children}
    </div>
  );
}
