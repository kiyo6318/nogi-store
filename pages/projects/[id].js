import styles from '../../styles/ProjectDetail.module.css';
import MediaQuery from 'react-responsive';

const ProjectId = ({ project }) => {
  function createMarkup() {
    return { __html: project.body };
  }

  return (
    <>
      <MediaQuery query="(min-width: 767px)">
        <div className={styles.pc_container}>
          <div className={styles.title}>{project.title_ja}</div>
          {/* {project.image ? (
        <div className={styles.img}>
          <img src={project.image.url} alt="image" />
        </div>
      ) : null}
      <p className={styles.category_ja}>{project.category_ja}</p>
      <p className={styles.year}>{project.year}</p> */}
          <div className={styles.body} dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </MediaQuery>
      <MediaQuery query="(max-width: 767px)">
        <div className={styles.sp_container}>
          <div className={styles.sp_title}>{project.title_ja}</div>
          <div className={styles.sp_body} dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </MediaQuery>
    </>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const res = await fetch('https://nogi-store.microcms.io/api/v1/projects/', key);
  const repos = await res.json();

  const paths = repos.contents.map((repo) => `/projects/${repo.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const res = await fetch(`https://nogi-store.microcms.io/api/v1/projects/${id}`, key);
  const project = await res.json();

  return {
    props: {
      project: project,
    },
  };
};

export default ProjectId;
