import BlogImg from "../../public/blog/blogimage.jpg";

/**
 * @typedef {{id:number, articleImg: string, tag: string, articleType: string, readTime: number, title: string, excerpt: string, authorAvatar: string, authorName: string, date: string, props?: object}} ArticleCardProps
 *
 */
export const Posts = {
  posts: [
    {
      id: 1,
      slug: "post-1",
      articleImg: BlogImg,
      tag: "SEO",
      articleType: "articulo",
      readTime: 5,
      title: "¿Qué es el SEO?",
      excerpt:
        "El SEO es una estrategia de marketing digital que busca posicionar tu sitio web en los primeros lugares de los resultados de búsqueda de Google.",
      author: {
        avatar: BlogImg,
        name: "Jaguar Ek",
      },
      date: "10 de noviembre de 2022",
    },
    {
      id: 2,
      slug: "post-2",
      articleImg: BlogImg,
      tag: "Inteligencia Artificial",
      articleType: "articulo",
      readTime: 8,
      title: "¿Qué es la Inteligencia Artificial?",
      excerpt:
        "La inteligencia artificial es una rama de la ciencia de la computación que se encarga de desarrollar sistemas que puedan realizar tareas que requieren inteligencia humana.",
      author: {
        avatar: BlogImg,
        name: "Jaguar Ek",
      },
      date: "12 de noviembre de 2022",
    },
    {
      id: 3,
      slug: "post-3",
      articleImg: BlogImg,
      tag: "Aprendizaje autodidacta",
      articleType: "articulo",
      readTime: 8,
      title: "¿Qué es el aprendizaje autodiactico?",
      excerpt: "El aprendizaje autodidacta es un proceso de aprendizaje que se realiza de manera independiente, sin la necesidad de un tutor o profesor.",
      author: {
        avatar: BlogImg,
        name: "Jaguar Ek",
      },
      date: "7 de diciembre de 2022",
    },
    {
      id: 4,
      slug: "post-4",
      articleImg: BlogImg,
      tag: "Economia Laboral",
      articleType: "noticias",
      readTime: 4,
      title: "¿Qué es la economía laboral?",
      excerpt:
        "La economía laboral es una rama de la economía que estudia el mercado laboral, es decir, el conjunto de personas que trabajan y las empresas que los contratan.",
      author: {
        avatar: BlogImg,
        name: "Queso Caliente 🧀",
      },
      date: "1 de diciembre de 2022",
    },
  ],
};
