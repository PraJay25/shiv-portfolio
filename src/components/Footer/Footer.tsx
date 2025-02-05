export default function Footer() {
  return (
    <footer className="bg-secondary py-4 text-center">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Shiv. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com"
          target="_blank"
          className="hover:text-accent"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-accent"
        >
          LinkedIn
        </a>
        <a href="mailto:youremail@example.com" className="hover:text-accent">
          Email
        </a>
      </div>
    </footer>
  );
}
