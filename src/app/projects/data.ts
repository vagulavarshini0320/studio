export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageId: string;
}

export const projects: Project[] = [
  {
    title: 'Enterprise ERP System',
    description: 'A comprehensive ERP solution for large-scale enterprises, integrating inventory, HR, and finance modules.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
    imageId: 'project1',
  },
  {
    title: 'AI-Powered Sales Analytics',
    description: 'A platform that uses machine learning to provide predictive sales analytics and lead scoring for B2B companies.',
    tags: ['React', 'Python', 'TensorFlow', 'FastAPI', 'GCP'],
    imageId: 'project2',
  },
  {
    title: 'Cross-Platform Mobile App',
    description: 'A consumer-facing mobile application for on-demand services, available on both iOS and Android.',
    tags: ['React Native', 'Firebase', 'Node.js', 'GraphQL'],
    imageId: 'project3',
  },
  {
    title: 'IoT Fleet Management',
    description: 'A real-time dashboard for tracking and managing a large fleet of vehicles using IoT sensors and geolocation.',
    tags: ['Angular', 'Java', 'Spring Boot', 'Kafka', 'Azure'],
    imageId: 'project4',
  },
  {
    title: 'E-commerce Marketplace',
    description: 'A multi-vendor e-commerce platform with a custom payment gateway and advanced inventory management.',
    tags: ['Vue.js', 'Go', 'Stripe', 'Kubernetes'],
    imageId: 'project5',
  },
  {
    title: 'Healthcare Patient Portal',
    description: 'A secure, HIPAA-compliant web portal for patients to access medical records, book appointments, and communicate with doctors.',
    tags: ['Blazor', '.NET Core', 'SQL Server', 'FHIR'],
    imageId: 'project6',
  },
];
