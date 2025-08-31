export default function Footer() {
  return (
    <footer className="bg-black  text-white">
      <div className="container mx-auto px-4 py-3 border-t border-white/25">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Ege Ayan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
