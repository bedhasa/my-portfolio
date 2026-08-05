// src/data/testimonials.ts
// Static testimonials that always display on the site.
// To add or edit a testimonial, update this array and redeploy.
// The array is limited to the first 5 entries shown on the site.

export interface Testimonial {
  name: string;
  content: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Alex Johnson",
    content:
      "Bedasa is an incredible developer who delivered our platform on time and with exceptional quality. Highly recommended!",
    date: "January 2025",
  },
  {
    name: "Sarah Kim",
    content:
      "Working with Bedasa was a breeze. Great communication, clean code, and a beautiful final product.",
    date: "February 2025",
  },
  {
    name: "Michael Chen",
    content:
      "The IoT inventory system Bedasa built transformed our operations. Truly impressive technical skills.",
    date: "March 2025",
  },
  {
    name: "Priya Patel",
    content:
      "Bedasa's attention to detail and problem-solving ability are outstanding. Would definitely work together again.",
    date: "April 2025",
  },
  {
    name: "David Okafor",
    content:
      "Professional, reliable, and creative. Bedasa turned our vision into a stunning, functional website.",
    date: "May 2025",
  },
];
