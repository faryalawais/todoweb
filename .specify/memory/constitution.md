# to do web Constitution (Minimal

Purpose: Define non‑negotiable engineering rules for this repository. Interpret each section for the stated tech stack; amend formally when scope or stack changes.

## 1. Project Overview
- **Description**: A to-do app that lists all tasks with different statuses and keeps track of tasks.
- **Tech stack**: NestJS, React, Supabase
- **Scope**:
  - Implement a RESTful API using NestJS for task management.
  - Use React for building a responsive and interactive user interface.
  - Integrate Supabase for database management and authentication.
  - Ensure real-time updates for task status changes.
  - Provide user authentication and authorization features.

## 2. Required File Structure
``` 
to-do-web/
├── client/                # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   ├── pages/          # Page components
│   │   ├── styles/         # CSS/SCSS files
│   │   └── utils/          # Utility functions
│   └── package.json        # Frontend dependencies
├── server/                # NestJS backend
│   ├── src/               # Source files
│   │   ├── modules/        # Feature modules
│   │   ├── controllers/    # API controllers
│   │   ├── services/       # Business logic
│   │   ├── entities/       # Database entities
│   │   └── main.ts         # Entry point
│   └── package.json        # Backend dependencies
└── README.md              # Project documentation
```

## 3. Entry Points & Configuration
- The main entry point for the backend is `server/src/main.ts`, which initializes the NestJS application.
- The React application starts from `client/src/index.js`, rendering the main App component.
- Environment variables MUST be managed using a `.env` file for both client and server configurations.
- Use `dotenv` for loading environment variables in the NestJS application.

## 4. Presentation & Styling
- Use CSS Modules or styled-components for styling React components to avoid global scope issues.
- Ensure that all styles are responsive and adhere to a mobile-first design approach.
- Use a consistent design system, including typography, color schemes, and spacing, across the application.

## 5. Core Logic & Data Flow
- The backend MUST expose a RESTful API for CRUD operations on tasks.
- Use Supabase as the primary database for storing tasks and user data.
- Ensure that the data flow between the frontend and backend is managed using Axios or Fetch API.
- Implement state management in React using Context API or Redux for global state handling.

## 6. Accessibility & Semantics
- All interactive elements MUST be accessible via keyboard navigation.
- Use semantic HTML elements (e.g., `<header>`, `<main>`, `<footer>`, `<article>`) to improve accessibility and SEO.
- Implement ARIA roles and attributes where necessary to enhance screen reader support.

## 7. Performance & Reliability
- Optimize images and assets to reduce load times.
- Implement lazy loading for components and routes in the React application.
- Use caching strategies in the NestJS API to improve response times for frequently accessed data.
- Monitor application performance using tools like Google Lighthouse.

## 8. Documentation, APIs & Discoverability
- Maintain a comprehensive `README.md` file that includes setup instructions, usage, and contribution guidelines.
- Document all API endpoints using Swagger or Postman for easy discoverability.
- Include JSDoc comments in the codebase to explain complex functions and modules.

## 9. Development & Version Control
- Use Git for version control, with a branching strategy based on feature development (e.g., Git Flow).
- Commit messages MUST follow a conventional format (e.g., "feat:", "fix:", "docs:").
- Ensure that all code is reviewed through pull requests before merging into the main branch.

## 10. Deployment & Operations
- Use a CI/CD pipeline for automated testing and deployment to platforms like Vercel for the frontend and Heroku for the backend.
- Ensure that environment variables are securely managed in the deployment environment.
- Monitor application health and performance using tools like Sentry or LogRocket.

## 11. Optional (but recommended)
- Implement unit and integration tests using Jest for both the frontend and backend.
- Consider using TypeScript for type safety across the codebase.
- Set up a linter (e.g., ESLint) and formatter (e.g., Prettier) to maintain code quality and consistency.

**Version**: 0.1.2 | **Last Updated**: 2026-05-18