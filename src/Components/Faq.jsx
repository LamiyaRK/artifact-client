import React from 'react';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';

const Faq = () => {
    const faqs = [
  {
    id: 1,
    question: "What is this platform about?",
    answer: "This platform allows you to explore, like, and contribute historical artifacts from various time periods and cultures."
  },
  {
    id: 2,
    question: "Can I upload my own artifact discovery?",
    answer: "Yes! Registered users can upload their own artifact images and information for others to view."
  },
  {
    id: 3,
    question: "Is the content verified?",
    answer: "All featured artifacts go through a curation process to ensure accuracy and authenticity."
  },
  {
    id: 4,
    question: "How can I save artifacts I like?",
    answer: "You can click the heart icon on any artifact to add it to your favorites collection."
  },
  {
    id: 5,
    question: "Can I use the platform on mobile devices?",
    answer: "Absolutely! The platform is fully responsive and works smoothly on phones and tablets."
  },
  
];

    return (
      <div className=' py-10 w-5/6 mx-auto my-[10px]'>
        <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
        <AnimatedText
        text="Frequently Asked Questions"
        as="h1"
        className='text-4xl font-bold text-neutral '
      />
            </AnimatedSection>
 <AnimatedSection>
    <p className='font-medium text-neutral opacity-80'>Find quick answers to common questions about using our platform.</p>
 </AnimatedSection>
 </div>
        <div>
           {
            faqs.map(faq=>
                <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">{faq.question}</div>
  <div className="collapse-content text-sm">
    {faq.answer}
  </div>
</div>
            )
           } 
        </div>
        </div>
    );
};

export default Faq;