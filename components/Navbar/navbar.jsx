import Link from "next/link";
import "./style.css";
export const Navbar = () => {
  return (
    <div className="nav">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </div>
  );
};
