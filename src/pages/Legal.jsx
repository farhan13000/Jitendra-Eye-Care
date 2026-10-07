import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import { SITE } from '../config/site';

/** Template legal copy. Have it reviewed before going live. */
export function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy" description={`How ${SITE.name} handles your information.`} />
      <PageHeader title="Privacy Policy" crumbs={[{ label: 'Privacy Policy' }]} />
      <section className="section section--tight">
        <div className="container container--narrow prose">
          <p>
            This website is an informational showroom for {SITE.name}. It does not have user accounts, online
            payments or a database, and it does not collect personal information through forms.
          </p>
          <h2>Information you share with us</h2>
          <p>
            When you tap an “Enquire” or “Book” button, WhatsApp opens with a pre-filled message. Anything you choose
            to send, such as your name, phone number or prescription, is shared with us through WhatsApp and is used
            only to respond to your enquiry and provide our services.
          </p>
          <h2>Third-party services</h2>
          <p>
            This website uses Google Maps (location map), Google Fonts (typography) and an image CDN. These services may
            process technical data such as your IP address according to their own privacy policies.
          </p>
          <h2>Contact</h2>
          <p>
            For any privacy-related questions, call us on {SITE.phone} or email {SITE.email}.
          </p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <Seo title="Terms & Conditions" description={`Terms of use for the ${SITE.name} website.`} />
      <PageHeader title="Terms & Conditions" crumbs={[{ label: 'Terms & Conditions' }]} />
      <section className="section section--tight">
        <div className="container container--narrow prose">
          <h2>Product information</h2>
          <p>
            Products shown on this website are for display and enquiry purposes. Availability, colours and prices may
            change without notice. Prices shown are for frames only; lens prices depend on your prescription and
            chosen lens type and will be confirmed before your order is placed in store.
          </p>
          <h2>No online sales</h2>
          <p>
            This website does not sell products online. All purchases are completed in store or as agreed directly
            with our team.
          </p>
          <h2>Medical information</h2>
          <p>
            Content on this website is general information and is not a substitute for a professional eye
            examination. If you notice sudden changes in your vision, please consult an eye-care professional
            promptly.
          </p>
          <h2>Images</h2>
          <p>Product images are representative. Actual colours may vary slightly depending on your screen.</p>
        </div>
      </section>
    </>
  );
}
