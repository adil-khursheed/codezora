import React from "react";

import NewsletterForm from "./newsletter-form";

const NewsletterBlock = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2 place-items-center">
      <div>
        <h3 className="text-lg md:text-2xl">
          Join the
          <br />
          <span className="text-2xl md:text-4xl capitalize">community</span>
        </h3>
        <p className="text-xs md:text-sm mt-2 leading-relaxed text-muted-foreground">
          We share fresh ideas on design, development and marketing &mdash;
          straight to your inbox. Join our growing community and let&apos;s
          build something great together.
        </p>
      </div>

      <NewsletterForm />
    </div>
  );
};

export default NewsletterBlock;
