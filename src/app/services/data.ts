import { Smartphone, Code, Monitor, ShoppingCart, Workflow, Brush, Bot, BarChart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  price: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: 'Mobile App Development',
    price: '₹19,000',
    icon: Smartphone,
  },
  {
    title: 'Website Development',
    price: '₹7,000',
    icon: Monitor,
  },
  {
    title: 'Software Development',
    price: '₹20,000',
    icon: Code,
  },
  {
    title: 'POS System',
    price: '₹10,000',
    icon: ShoppingCart,
  },
  {
    title: 'Billing Software',
    price: '₹12,000',
    icon: BarChart,
  },
  {
    title: 'Workflow Automation (n8n)',
    price: '₹15,000',
    icon: Workflow,
  },
  {
    title: 'UI Design & Wireframe',
    price: '₹5,000',
    icon: Brush,
  },
  {
    title: 'AI Integration Solutions',
    price: '₹20,000',
    icon: Bot,
  },
];
