const Footer = () => {
  return (
    <footer className="bg-brand-primary border-t border-brand-accent py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <span className="text-gray-300 text-sm">
            Powered by{' '}
            <a
              href="https://quadrate.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:text-brand-accent-alt transition-colors duration-300 font-medium"
            >
              Quadrate Tech Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
