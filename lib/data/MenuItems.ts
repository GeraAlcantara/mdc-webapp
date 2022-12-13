export interface MenuItem {
  name: string;
  slug: string;
}
export const MENU_ITEMS: MenuItem[] = [
  { name: "inicio", slug: "/" },
  { name: "servicios", slug: "/servicios" },
  { name: "Librería", slug: "/libreria" },
  { name: "blog", slug: "/blog" },
];
export default MENU_ITEMS;
