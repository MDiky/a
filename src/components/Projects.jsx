import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {/* Placeholder image or actual image */}
        <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
          {project.image ? <img src={project.image} alt={project.title} /> : 'Project Image'}
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
              <FaGithub size={18} /> Code
            </a>
          )}
          {project.demo && (
            <a href={project.demo} className="project-link" target="_blank" rel="noreferrer">
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing online stores, featuring real-time analytics, inventory management, and sales reporting.',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Chat Interface',
      description: 'A responsive and modern chat interface integrating with OpenAI API, featuring streaming responses and markdown support.',
      tags: ['React', 'OpenAI', 'Tailwind', 'Vite'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Finance Tracker App',
      description: 'Personal finance management application that helps users track expenses, set budgets, and visualize their financial health.',
      tags: ['React Native', 'Firebase', 'Redux'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management Pro',
      description: 'A collaborative project management tool with Kanban boards, real-time updates, and team collaboration features.',
      tags: ['React', 'Supabase', 'Socket.io'],
      github: '#',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
