import styles from './EmptyComponent.module.css';

interface EmptyComponentProps {
  // Add your props here
}

const EmptyComponent: React.FC<EmptyComponentProps> = () => {
  return (
    <div className={styles.container}>
      
    </div>
  );
};

export default EmptyComponent; 