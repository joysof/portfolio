const Footer = () => {
  return (
    <footer className="bg-gray-200 rounded-3xl dark:bg-gray-800 text-center py-6 mt-20">
      <p className="text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Sajib.dev | All Rights Reserved.
      </p>
      <div className="flex justify-center gap-6 mt-3 text-xl">
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          <i className="fab fa-github"></i>
        </a>
        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
