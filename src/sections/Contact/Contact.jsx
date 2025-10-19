import styles from './ContactStyles.module.css';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mjkazwlv");

  if (state.succeeded) {
    return (
      <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <p>✅ Thanks for your message! I’ll get back to you soon.</p>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <div className={styles.primaryButtondiv}>
          <button
          type="submit"
          disabled={state.submitting}
          className={styles.primaryButton}
        >
          {state.submitting ? 'Sending...' : 'Submit'}
        </button>
        </div>
        
      </form>
    </section>
  );
}

export default Contact;
