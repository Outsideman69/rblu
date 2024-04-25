import gsap from 'gsap';

// QUIZ section lotties 

const redactedSt = () => {

gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".redacted").forEach((redacted) => {
    ScrollTrigger.create({
      trigger: redacted,
      start: "top 92%",
      onEnter: () => redacted.classList.add("actif"),
    });
   });
}

  export default redactedSt;