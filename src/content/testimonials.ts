export type Testimonial = {
  /** Stable identity for React keys — never derive keys from name/index. */
  id: string;
  name: string;
  quote: string;
  rating: number;
};

export const testimonialFeed: Testimonial[] = [
  { id: 'amanpreet-kaur', name: 'Amanpreet Kaur', quote: 'Very helpful mentorship with clear guidance on where and how to apply', rating: 5 },
  { id: 'preeti-sharma', name: 'Preeti Sharma', quote: 'Very informative helped me in reshaping my resume as per industry standards', rating: 5 },
  { id: 'udit-gupta', name: 'Udit Gupta', quote: 'He clearly explains what to do and what not to do in real interviews', rating: 5 },
  { id: 'prasad-patil', name: 'Prasad Patil', quote: 'His answers to the doubts were very helpful and friendly throughout', rating: 5 },
  { id: 'aditya-chaudhary', name: 'Aditya Chaudhary', quote: 'Big thanks for such a helpful and inspiring session! Learned a lot', rating: 5 },
  { id: 'shaina', name: 'Shaina', quote: "They shared their experience and provided a DSA sheet that's helped me grow", rating: 5 },
  { id: 'nandhavarman-g', name: 'Nandhavarman G', quote: 'Very talented and well explained', rating: 5 },
  { id: 'abhirath', name: 'Abhirath', quote: 'Great list. Thanks :)', rating: 5 },
  { id: 'anonymous-1', name: 'Anonymous', quote: 'He answered all of my queries very patiently in a very insightful manner', rating: 5 },
  { id: 'rohitjc', name: 'rohitjc', quote: 'Your insights and guidance have been truly impactful in shaping my perspective', rating: 5 },
  { id: 'pranav', name: 'Pranav', quote: 'He is knowledgeable :)', rating: 5 },
];
