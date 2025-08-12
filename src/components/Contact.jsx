import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const splitTitle = SplitText.create("#contact h2", {
      type: "words",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      },
      ease: "power1.inOut",
    });

    scrollTimeline
      .from(splitTitle.words, {
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
      })
      .from("#contact h3, #contact p", {
        yPercent: 100,
        opacity: 0,
        stagger: 0.02,
      })
      .fromTo(
        "#f-left-leaf",
        {
          y: 100,
          x: -100,
        },
        {
          y: 0,
          x: 0,
          duration: 1,
          ease: "power1.inOut",
        },
        "<"
      )
      .to("#f-right-leaf", { y: -50, duration: 1, ease: "power1.inOut" }, "<");
  }, []);

  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />

      <div className="content">
        <h2>Where to Find Us 👇</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>(555) 987-6543</p>
          <p>vanshchauhan1106@gmail.com</p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((hour) => (
            <p key={hour.day}>
              {hour.day}: {hour.time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>

          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
