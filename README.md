# Code Nicer | Portfolio

## Overview

full-stack web developer portfolio built with Next.js 14 and TypeScript. This project showcases my skills, experiences, and projects, providing a platform for potential clients and employers to learn more about my work.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Dynamic Content**: Fetches user profile data from a Redis database.
- **CORS Middleware**: Ensures secure API access.
- **Light/Dark Theme Toggle**: User-friendly theme switching.
- **Smooth Transitions**: Enhances user experience with animations.

## Technologies Used

- **Frontend**: Next.js, React, TypeScript, SCSS, Zustand
- **Backend**: Node.js, Redis
- **APIs**: Google APIs, OpenAI
- **Deployment**: Netlify | Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Redis (for local development)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/who-am-i-v2.git
   cd who-am-i-v2
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up your environment variables in a `.env.local` file:

   ```env
   REDIS_URL_PERSONAL=your_redis_url
   PRODUCTION_URL=https://your-production-url.com
   ```

4. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Navigate through the portfolio sections: About, Experience, Projects, and Contact.
- Use the theme toggle button to switch between light and dark modes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [Next.js](https://nextjs.org/) for the amazing framework.
- Thanks to [Redis](https://redis.io/) for the fast in-memory database.
