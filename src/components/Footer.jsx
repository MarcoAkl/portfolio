export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Built by Marco Akl &middot; {year} &middot; React + Vite, deployed on
        Netlify
      </p>
    </footer>
  );
}
