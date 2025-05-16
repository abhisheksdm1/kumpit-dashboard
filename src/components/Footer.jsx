const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#f7f7fb] py-4 dark:bg-main-dark-bg text-white">
      <p className="text-center text-sm text-gray-500">
        &copy; {year} Bulk Contact Verifier
      </p>
    </footer>
  );
};

export default Footer;
