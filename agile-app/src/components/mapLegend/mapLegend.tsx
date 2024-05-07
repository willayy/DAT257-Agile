import React from 'react';
import styles from './mapLegend.module.css';

/**
 * Represents a legend component for displaying color-coded labels.
 * 
 * This component renders a legend with color-coded items, typically used to
 * represent different categories or levels in a visualization.
 * 
 * @remarks
 * This component is designed to be used alongside maps or visualizations to provide
 * a key for interpreting color codes.
 * 
 * @example
 * ```tsx
 * <MapLegend legendItems={legendItems} />
 * ```
 */

interface LegendItem {
  color: string;
  label: string;
}

interface MapLegendProps {
  legendItems: LegendItem[];
}
/**
 * A functional component for rendering a legend with color-coded items.
 * 
 * @param props - The props object containing legend items.
 * @returns JSX element representing the legend.
 */
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
