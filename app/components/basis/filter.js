import styles from '../../styles/filter.module.css';

export function Filter () {
    return(
        <>
            <div className={styles.filterSection}>
                <div className={styles.filterContainer}>
                    <h4>Filter</h4>
                    <div className={styles.filters}>
                        <div className={styles.filter}>
                            <input type="checkbox" className={styles.filterCheckbox}/>
                            <label>All tasks</label>
                        </div>
                        <div className={styles.filter}>
                            <input type="checkbox" className={styles.filterCheckbox}/>
                            <label>Completed tasks</label>
                        </div>
                        <div className={styles.filter}>
                            <input type="checkbox" className={styles.filterCheckbox}/>
                            <label>Uncompleted tasks</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}