import Link from 'next/link'
import classes from './page.module.css'
import ImageShow from './images/image-show';

export default function Home() {
  return (
    <>
    <header className={classes.header}>
      <div className={classes.slideshow}>
        <ImageShow />
      </div>
      <div>
        <div className={classes.hero}>
          <h2>Next Level For Next Level Foodies</h2>
          <p>Taste & Share the food from all over the world!!!</p>
        </div>
        <div className={classes.cta}> 
          <Link href="/meals"> Share the Meal</Link>
          <Link href="/community">Welcome to Food Community</Link>
        </div>
      </div>
    </header>
    <main>
    <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

    </main>
    </>
  );
}
