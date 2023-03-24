import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function App() {
  // let { scrollYProgress } = useScroll();
  // let x = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  // const widthRef = useRef(null);
  // let { scrollYProgress } = useScroll({
  //   target: widthRef,
  //   offset: ["end end", "end start"],
  // });
  // let width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="App">
      <div ref={heroRef}>
        <motion.h1 className="title" style={{ y, opacity }}>
          This is a fancy title, with scroll animations.
        </motion.h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, sint!
        </h2>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>

      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>

      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        possimus, minus inventore magni ad dolor! Fuga accusantium iure,
        voluptas ullam quas adipisci eligendi modi, ipsum dignissimos quaerat
        provident reiciendis temporibus rem veritatis autem eius iusto
        aspernatur quibusdam consequuntur quod doloribus odio. Architecto
        voluptatum rem in minima ipsum labore nulla necessitatibus, beatae sequi
        eveniet sint quaerat aut autem commodi, ea quod incidunt dolores
        explicabo quia officiis dolorum! Hic explicabo neque ipsum ipsam? A
        labore voluptates vitae eveniet similique minus, minima quibusdam,
        officia quaerat architecto odit pariatur. Molestiae asperiores pariatur
        aspernatur tempora, blanditiis sint vero harum numquam ab eos? Tempore,
        optio assumenda.
      </p>
    </div>
  );
}

export default App;
