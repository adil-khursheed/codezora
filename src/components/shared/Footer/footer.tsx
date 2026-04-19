import NewsletterBlock from "./newsletter-block";
import QuickLinks from "./quick-links";

const Footer = () => {
  return (
    <footer className="px-4">
      <div className="max-w-7xl w-full mx-auto glassmorphism rounded-t-4xl p-4 lg:p-10 flex flex-col gap-10">
        <NewsletterBlock />
        <QuickLinks />
      </div>
    </footer>
  );
};

export default Footer;
