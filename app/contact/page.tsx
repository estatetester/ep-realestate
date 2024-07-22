import ContactForm from "./_component/contact-form";

const ContactPage = async () => {
  return (
    <main className="min-h-screen py-6 mx-auto">
      {" "}
      <main>
        <section className="mx-auto container mt-10 font-medium">
          <header className="">
            <h1 className="text-5xl font-bold">
              Contact Us<span className="text-primary">.</span>
            </h1>
          </header>{" "}
          <hr className="hidden lg:block my-1" />
        </section>{" "}
        <div className="container mx-auto my-8 font-medium">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d222279.96740233462!2d7.539404606586941!3d9.094981017566415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1721481941731!5m2!1sen!2sng"
            className="w-full h-96 dark:bg-slate-600 rounded-2xl bg-gray-200"
            loading="lazy"
            style={{ border: "0px" }}
          ></iframe>
          <p>You can contact us via the following channels:</p>
          <section className="mt-10">
            <div className="prose max-w-full mt-8 space-y-3">
              <h2 className="text-2xl font-bold mb-4">Email</h2>
              <p>
                For inquiries about property listings, buying, selling, or
                renting, please feel free to contact us via email at{" "}
                <a href="mailto:info@ep-realestate.com" className="underline">
                  info@ep-realestate.com
                </a>
              </p>
              <p>
                For advertising inquiries or partnerships with{" "}
                <b>ep-realestate Site</b>, contact us via email at{" "}
                <a href="mailto:ads@ep-realestate.com" className="underline">
                  ads@ep-realestate.com
                </a>
              </p>
              <p>
                If you are interested in career opportunities at{" "}
                <b>ep-realestate Site</b>, please contact us via email at{" "}
                <a href="mailto:careers@ep-realestate.com" className="underline">
                  careers@ep-realestate.com
                </a>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
              <div>
                <div className="prose max-w-full space-y-3">
                  <h2 className="text-2xl font-bold mb-4">
                    Our Physical Address
                  </h2>
                  <p>
                    123 Real ep-realestate Avenue, Suite 100, Central Business
                    District, Abuja, Nigeria.
                  </p>
                  <p>Call: +2348091234567 or +2348051234567</p>
                </div>
                <div className="prose max-w-full mt-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Connect with us on Social Media
                  </h2>
                  <p>
                    You can also connect with us on social media through the
                    following platforms:
                  </p>
                  <ul className="list-disc pl-6 font-semibold my-2">
                    <li>
                      Twitter:{" "}
                      <a
                        href="https://twitter.com/ep-realestate"
                        target="_blank"
                        className="underline"
                      >
                        @ep-realestate
                      </a>
                    </li>
                    <li>
                      Instagram:{" "}
                      <a
                        href="https://www.instagram.com/ep-realestate"
                        target="_blank"
                        className="underline"
                      >
                        @ep-realestate
                      </a>
                    </li>
                    <li>
                      Facebook:{" "}
                      <a
                        href="https://www.facebook.com/ep-realestate"
                        target="_blank"
                        className="underline"
                      >
                        www.facebook.com/ep-realestate
                      </a>
                    </li>
                    <li>
                      YouTube:{" "}
                      <a
                        href="https://www.youtube.com/ep-realestate"
                        target="_blank"
                        className="underline"
                      >
                        Your Real ep-realestate Channel
                      </a>
                    </li>
                    <li>WhatsApp: +2348091234567</li>
                  </ul>
                </div>
                <p>
                  Thank you for choosing Your Real ep-realestate Site as your trusted
                  partner in property transactions.
                </p>
              </div>

              <ContactForm />
            </div>
          </section>
        </div>
      </main>
    </main>
  );
};

export default ContactPage;
