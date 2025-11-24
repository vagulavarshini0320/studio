export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageId: string;
}

export const projects: Project[] = [
  {
    title: 'Before Doctor AI',
    description: 'An AI-powered diagnostic tool that provides preliminary medical advice based on user-reported symptoms.',
    tags: ['Next.js', 'TypeScript', 'Genkit', 'AI', 'Healthcare'],
    imageId: 'project1',
  },
  {
    title: 'Hostel Management App',
    description: 'A comprehensive application for managing hostel operations, including bookings, resident management, and billing.',
    tags: ['React Native', 'Firebase', 'Node.js', 'Mobile'],
    imageId: 'project2',
  },
  {
    title: 'AI-Powered Chat',
    description: 'An intelligent chatbot solution for customer support, capable of understanding and responding to complex user queries in real-time.',
    tags: ['React', 'Genkit', 'WebSocket', 'NLP', 'AI'],
    imageId: 'project3',
  },
  {
    title: 'Enterprise ERP System',
    description: 'A scalable and modular Enterprise Resource Planning system to streamline business processes across departments.',
    tags: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL', 'Cloud'],
    imageId: 'project4',
  },
  {
    title: 'AI Task Automation',
    description: 'A platform that automates repetitive business tasks using AI agents, improving efficiency and reducing operational costs.',
    tags: ['Vue.js', 'Python', 'n8n', 'Genkit', 'Automation'],
imageId: 'project5',
  },
  {
    title: 'Business CRM',
    description: 'A full-featured Customer Relationship Management platform to manage sales pipelines, customer interactions, and marketing campaigns.',
    tags: ['Next.js', 'Node.js', 'SQL', 'CRM'],
    imageId: 'project6',
  },
];
