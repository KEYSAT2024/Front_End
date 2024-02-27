import React from "react";
import keysatRedLogo from "../../src/images/KEYSAT_red.png";
import keyin_logo from "../../src/images/Keyin_logo.png";
import styles from "../AdminCoursesPage.module.css";
import { useAuth } from "../auth/auth";

export const AdminCoursesPage = ({ className, ...props }) => {
  const auth = useAuth();
  const handleLogout = (event) => {
    auth.logout();
  };
  return (
    <div className={styles.adminCourses + " " + className}>
      <div className={styles.header}>
        <svg
          className={styles.taskBar}
          width="1728"
          height="71"
          viewBox="0 0 1728 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1728V71H0V0Z" fill="black" fillOpacity="0.09" />
        </svg>
        <div className={styles.keysatLogo}>
          <div className={styles.group4}>
            <img className={styles.keysat} src={keysatRedLogo} alt="KEYSAT" />
          </div>
        </div>
      </div>
      <div className={styles.sideBar}>
        <div className={styles.sideBar2}></div>
        <div className={styles.poweredByKeyinLogo}>
          <img
            className={styles.keyinLogo}
            src={keyin_logo}
            alt="Powered by Keyin"
          />
          <div className={styles.poweredBy}>Powered by </div>
        </div>
        <div className={styles.rectangle7}></div>
      </div>
      <div className={styles.courses}>
        <div className={styles.courses2}>Courses </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.dashboard2}>Dashboard </div>
      </div>
      <div className={styles.instructorsStudents}>
        <div className={styles.instructorsStudents2}>
          Instructors <br />
          &amp; Students{" "}
        </div>
      </div>
      <svg
        className={styles.line44}
        width="231"
        height="2"
        viewBox="0 0 231 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-0.0043335 1H231.004" stroke="white" strokeWidth="2" />
      </svg>
      <div className={styles.accountManagement}>
        <div className={styles.accountManagement2}>
          Account <br />
          Management{" "}
        </div>
      </div>
      <div className={styles.addAndDeleteACourse}>Add and Delete a Course </div>
      <div className={styles.attendanceTable}>
        <div className={styles.attendanceList}></div>
        <div className={styles.attendanceListHeader}></div>
        <div className={styles.attendanceListHeader2}></div>
        <div className={styles.attendanceListHeader3}></div>
        <div className={styles.attendanceListHeader4}></div>
        <div className={styles.courseName}>Course Name </div>
        <div className={styles.instructor}>Instructor </div>
        <div className={styles.studentNameList}>
          <div className={styles.group12}>
            <div className={styles.awsS4}>AWS - S4 </div>
            <div className={styles.devOps}>DevOps </div>
            <div className={styles.dataStructuresAlgorithms}>
              Data Structures &amp; Algorithms{" "}
            </div>
            <div className={styles.softwareDesignArchitectureAndTesting}>
              Software Design, Architecture and Testing{" "}
            </div>
            <div className={styles.industrySeminar}>Industry Seminar </div>
            <div className={styles.fullStackJavaScript}>
              Full Stack JavaScript{" "}
            </div>
            <div className={styles.databaseDevelopment}>
              Database Development{" "}
            </div>
          </div>
        </div>
        <div className={styles.saveChangeButton}>
          <div className={styles.frame15}>
            <div className={styles.delete}>Delete </div>
          </div>
          <div className={styles.frame9}>
            <div className={styles.delete}>Delete </div>
          </div>
          <div className={styles.frame10}>
            <div className={styles.delete}>Delete </div>
          </div>
          <div className={styles.frame11}>
            <div className={styles.delete}>Delete </div>
          </div>
          <div className={styles.frame12}>
            <div className={styles.delete}>Delete </div>
          </div>
          <div className={styles.frame13}>
            <div className={styles.delete}>Delete </div>
          </div>
          <div className={styles.frame14}>
            <div className={styles.delete}>Delete </div>
          </div>
        </div>
        <div className={styles.group13}>
          <div className={styles.kennedyAzupwah}>Kennedy Azupwah </div>
        </div>
        <div className={styles.group15}>
          <div className={styles.kennedyAzupwah2}>Kennedy Azupwah </div>
        </div>
        <div className={styles.group14}>
          <div className={styles.jamieCornick}>Jamie Cornick </div>
        </div>
        <div className={styles.group16}>
          <div className={styles.jamieCornick2}>Jamie Cornick </div>
        </div>
        <div className={styles.group17}>
          <div className={styles.jamieCornick3}>Jamie Cornick </div>
        </div>
        <div className={styles.group18}>
          <div className={styles.jessicaNoseworthy}>Jessica Noseworthy </div>
        </div>
        <div className={styles.group19}>
          <div className={styles.peterRawsthorne}>Peter Rawsthorne </div>
        </div>
      </div>
      <div className={styles.frame7}>
        <div className={styles.addCourse}>Add Course </div>
      </div>
      <div className={styles.addACourse}>Add a Course </div>
      <div className={styles.courseName2}>Course Name: </div>
      <div className={styles.instructorName}>Instructor Name: </div>
      <div className={styles.group13}>
        <div className={styles.rectangle14}></div>
      </div>
      <div className={styles.group14}>
        <div className={styles.rectangle142}></div>
      </div>
      <div className={styles.line35}></div>
      <div className={styles.line36}></div>
      <div className={styles.line45}></div>
      <div className={styles.signOutButton}>
        <div onClick={handleLogout} className={styles.signOut}>
          Sign Out{" "}
        </div>
      </div>
      <div style={{ clear: "both" }}></div> {/* Clear the float */}
    </div>
  );
};

export default AdminCoursesPage;
