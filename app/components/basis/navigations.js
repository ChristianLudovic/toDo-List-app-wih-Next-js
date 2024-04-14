import styles from '../../styles/navigation.module.css';
import avatar from '../../assets/images/avatar.svg';
import { useState } from 'react';

export function Navigation (){

    const [openList, setOpenList] = useState(false);

    const toggleList = () => {
        setOpenList(!openList);
    }


    return (
        <>
            <div className={styles.navigationBar}>
                <div className={styles.navigationBarHeader}>
                    <div className={styles.nameAndImage}>
                        <div className={styles.userAvatar}>
                            <img src={avatar} alt="" />
                        </div>
                        <div className={styles.username}>
                            <p>Family Guy’s W...</p>
                            <div className={styles.switchAccount}>
                                <svg class="icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_54_123)">
                                        <path d="M6 1.47092L6.53246 0.84971L6 0.393311L5.46754 0.84971L6 1.47092ZM6 11.2891L5.46754 11.9103L6 12.3667L6.53246 11.9103L6 11.2891ZM2.71429 5.36485L6.53246 2.09213L5.46754 0.84971L1.64935 4.12244L2.71429 5.36485ZM5.46754 2.09213L9.28572 5.36485L10.3506 4.12244L6.53246 0.84971L5.46754 2.09213ZM1.64935 8.63758L5.46754 11.9103L6.53246 10.6679L2.71429 7.39517L1.64935 8.63758ZM6.53246 11.9103L10.3506 8.63758L9.28572 7.39517L5.46754 10.6679L6.53246 11.9103Z" fill="#37352F" fill-opacity="0.45" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_54_123">
                                            <rect width="12" height="12" fill="white" transform="translate(0 0.380005)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.accountEditBtn}>
                        <svg class="icon" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 2.805L14.3938 2.40656C14.6731 2.12625 14.6909 1.72219 14.4172 1.45969L14.2269 1.27594C13.9888 1.04344 13.5781 1.08563 13.3166 1.35281L12.9294 1.73344L14 2.805ZM7.01562 9.01875L8.31312 8.49469L13.5256 3.28781L12.4484 2.21719L7.24719 7.42969L6.70625 8.70375C6.62844 8.90063 6.8375 9.08438 7.01562 9.01875ZM4.61562 13.2009H11.4594C12.7203 13.2009 13.4647 12.4631 13.4647 11.1122V4.94719L11.9291 6.48281V10.9219C11.9291 11.4338 11.6731 11.6663 11.2916 11.6663H4.79C4.30813 11.6663 4.05219 11.4338 4.05219 10.9219V4.53094C4.05219 4.02469 4.30813 3.78656 4.79 3.78656H9.275L10.8097 2.25188H4.61656C3.25906 2.25188 2.51562 2.98969 2.51562 4.34063V11.1122C2.51562 12.4631 3.25906 13.2009 4.61562 13.2009Z" fill="#37352F" fill-opacity="0.85" />
                        </svg>
                    </div>
                </div>
                <div className={styles.navigationBarBody}>
                    <div className={styles.shared}>
                        <p className={styles.subtitle}>shared</p>
                        <div className={styles.taskList}>
                            <div className={styles.taskListContent}>
                                <div className={styles.taskTitleGroup} onClick={toggleList} >
                                    <div className={styles.taskListText}>
                                        <span>✔</span>
                                        <p>Tasks List</p>
                                    </div>
                                    <div className={styles.taskCounter}>
                                        <span>2</span>
                                    </div>
                                </div>
                                {openList &&
                                    <div className={styles.taskListGroup} >
                                        <div className={styles.allTask}>
                                            <input type="checkbox" name="allTask" id="allTask" />
                                            <label htmlFor="allTask">All Tasks</label>
                                        </div>
                                        <div className={styles.completedTask}>
                                            <input type="checkbox" name="taskCompleted" id="taskCompleted" />
                                            <label htmlFor="taskCompleted">Tasks Completed</label>
                                        </div>
                                        <div className={styles.uncompletedTask}>
                                            <input type="checkbox" name="taskUncompleted" id="taskUncompleted" />
                                            <label htmlFor="taskUncompleted">Tasks Uncompleted</label>
                                        </div>
                                    </div>
                                }
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.shared}>
                        <p>Private</p>
                        <div className={styles.privateContainer}>
                            <div className={styles.privateItem}>
                                <div className="template-icon">
                                    <svg class="icon" width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_54_106)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2539 1.07144L19.6539 2.3968L18.3671 10.5504L15.8214 6.5893L13.5971 10.05L9.92857 9.47144L11.2539 1.07144ZM9.44107 5.6893C8.64111 5.35469 7.75848 5.2706 6.90973 5.44814C6.06099 5.62569 5.28606 6.05651 4.68731 6.68371C4.08855 7.31091 3.69413 8.10498 3.55614 8.96105C3.41815 9.81711 3.54309 10.6949 3.91444 11.4785C4.28579 12.262 4.8861 12.9145 5.63607 13.3498C6.38604 13.785 7.25039 13.9825 8.11497 13.9162C8.97954 13.8499 9.80367 13.5229 10.4785 12.9784C11.1533 12.4339 11.6471 11.6975 11.8946 10.8664L8.70285 10.3629L9.44107 5.6893ZM11 16.0714L15.8214 8.57144L20.6429 16.0714H11Z" fill="#37352F" fill-opacity="0.45" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_54_106">
                                                <rect width="22" height="15" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <p>Pomodoro</p>
                            </div>
                            <div className={styles.privateItem}>
                                <div className="import-icon">
                                    <svg class="icon" width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5918 6.48981L14.3061 5.20409L11.9183 7.65843V1.07144H10.0816V7.65843L7.69386 5.20409L6.40815 6.48981L11 11.1735L15.5918 6.48981ZM4.57141 12.0918V13.9286H17.4286V12.0918H4.57141Z" fill="#37352F" fill-opacity="0.45" />
                                    </svg>
                                </div>
                                <p>import</p>
                            </div>
                            <div className={styles.privateItem}>
                                <div className="settings-icon">
                                    <svg class="icon" width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 12.27V10.67L12.06 10.03L11.61 8.94001L12.49 7.10001L11.36 5.97001L9.55 6.88001L8.46 6.43001L7.77 4.51001H6.17L5.54 6.45001L4.43 6.90001L2.59 6.02001L1.46 7.15001L2.37 8.96001L1.92 10.05L0 10.73V12.32L1.94 12.96L2.39 14.05L1.51 15.89L2.64 17.02L4.45 16.11L5.54 16.56L6.23 18.48H7.82L8.45 16.54L9.56 16.09L11.4 16.97L12.53 15.84L11.61 14.03L12.08 12.94L14 12.25V12.27ZM7 14.5C5.34 14.5 4 13.16 4 11.5C4 9.84001 5.34 8.50001 7 8.50001C8.66 8.50001 10 9.84001 10 11.5C10 13.16 8.66 14.5 7 14.5Z" fill="#37352F" fill-opacity="0.45" />
                                    </svg>
                                </div>
                                <p>settings</p>
                            </div>
                            <div className={styles.privateItem}>
                                <div className="trash-icon">
                                    <svg class="icon" width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5 7.73952C13.5 9.05848 11.923 16.5493 11.923 16.5782C11.923 17.1571 9.73825 18.5 7.04165 18.5C4.34504 18.5 2.16025 17.1571 2.16025 16.5782C2.16025 16.5541 0.5 9.05799 0.5 7.73952C0.5 6.4178 3.02713 4.5 7.03525 4.5C11.0433 4.5 13.5 6.4178 13.5 7.73952ZM7 6.5C3.625 6.5 2.5 7.75 2.5 8.5C2.5 9.25 3.625 10.5 7 10.5C10.375 10.5 11.5 9.25 11.5 8.5C11.5 7.75 10.375 6.5 7 6.5Z" fill="#37352F" fill-opacity="0.45" />
                                    </svg>
                                </div>
                                <p>Trash</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}