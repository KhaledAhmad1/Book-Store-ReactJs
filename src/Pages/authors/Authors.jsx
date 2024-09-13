import { useState } from "react";
import authors from "../../data/authors";
import styles from "./authors.module.css"
const Authors = () => {
  const [search, setSearch] = useState("");
  return (
    <section className={styles.authors}>
      <div className={styles.searchWrapper}>
        <input type="search" placeholder="Search in authors" value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <div className={styles.authorsWrapper}>
        {authors.filter((ele) => ele.name.toLocaleLowerCase().includes(search)).map(author => (
          <div className={styles.author} key={author.id}>
            <img src={author.image} alt={author.name} className={styles.authorImage} />
            <h2 className={author.name}>{author.name}</h2>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Authors;
