import React from 'react';
import styles from './mapLegend.module.css';

interface LegendItem {
  color: string;
  label: string;
}

interface MapLegendProps {
  legendItems: LegendItem[];
}

const MapLegend: React.FC<MapLegendProps> = ({ legendItems }) => {
  return (
    <div className={styles.legend}>
      {legendItems.map((item, index) => (
        <div key={index} className={styles.legendItem}>
          <span className={styles.legendColor} style={{ backgroundColor: item.color }}></span>
          <span className={styles.legendLabel}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default MapLegend;
