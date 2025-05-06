const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What is PAGEX?",
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 2,
      question: "How does PAGEX reduce post-harvest loss and manage agrowaste?",
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 3,
      question: "What types of users can benefit from PAGEX?",
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 4,
      question: "How do I create an account on PAGEX?",
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 5,
      question: "What are the subscription packages available?",
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: 6,
      question: "How can I access credit or loan opportunities through PAGEX?",
      response:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];
  return (
    <div className="w-full bg-[#A3772E]/10 p-4 md:p-10 2xl:p-10 font-nunito">
      <div className="space-y-2">
        <p className="text-[#308F1E]">FAQ</p>
        <p className="text-black-400 font-bold text-2xl md:text-5xl">
          Frequently asked questions
        </p>
        <p className="text-black-100">
          Explore to learn more about how Pazelgreen can empower your
          <br className="hidden md:block" /> agribusiness with tech-driven solutions
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-10 2xl:gap-20 my-4 md:my-10">
        {faqs.map((faq) => (
          <div key={faq.id} className="space-y-3">
            <p className="font-semibold text-[#308F1E] md:text-lg">
              {faq.question}
            </p>
            <p className="text-[#151411]/60">{faq.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
