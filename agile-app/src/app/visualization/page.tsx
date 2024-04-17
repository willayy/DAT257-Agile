import ParentSearchComboBox from "@/components/searchComboBox/parentSearchComboBox";
import styles from './page.module.css';

const visualization = () => {
    return (
        <div className={styles.page}>
            <h1>Visualisering</h1>
            <ParentSearchComboBox></ParentSearchComboBox>
            <button className={styles.button}>Create Graph</button>
        </div> 
    )
}

export default visualization;