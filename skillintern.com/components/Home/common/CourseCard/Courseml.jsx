import Image from "next/image";
import styles from "./CourseCard.module.css";
import Link from "next/link";
import course from "../../../../public/assets/courseCard/course.png";
import lessons from "../../../../public/assets/courseCard/lessons.png";
import level from "../../../../public/assets/courseCard/level.png";
import rating4 from "../../../../public/assets/courseCard/rating4.png";
import students from "../../../../public/assets/courseCard/students.png";

const CourseCard = ({ slug }) => {
  return (
    <>
      <div className={styles.course_card}>
        <div className={styles.course_image_container}>
          <Image
            src={course}
            width={340}
            height={240}
            className={styles.course_image}
          />
        </div>
        <h1 className={styles.heading}>
          Cource : Mechine learning 
        </h1>
        <div className={styles.stats_contianer}>
          <div className={styles.stats}>
            <Image src={lessons} />
            content : 150+ hrs 
          </div>
          <div className={styles.stats}>
            <Image src={students} />
            projects : 4 mini,4 major 
          </div>
          <div className={styles.stats}>
            <Image src={level} />
            Beginner to advance level 
          </div>
        </div>
        <div className={styles.btn_rating}>
          <Link href={`/course/${slug}`}>
            <button className={styles.btn}><Apply></Apply> {">"}</button>
          </Link>
          <Image src={rating4} />
        </div>
      </div>
    </>
  );
};

export default CourseCard;
