## Using Clerk Organizations to Create Role-Based (RBAC) Authentication in Next.js

 

### Overview

This project demonstrates how to implement Role-Based Access Control (RBAC) authentication in a Next.js application using Clerk Organizations. Clerk Organizations is a user authentication and management platform that allows you to easily add RBAC functionality to your web applications.

### Article Link 

[Implementing Role-Based Access Control in Next.js App Router using Clerk Organizations](https://dev.to/musebe/implementing-role-based-access-control-in-nextjs-app-router-using-clerk-organizations-566g)
### Deployed Website

[https://nextjs-clerk-organizations-rbac-authentication.vercel.app/](https://nextjs-clerk-organizations-rbac-authentication.vercel.app/)



### Prerequisites

Before getting started, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or Yarn

### Installation

To install and run the project, follow these steps:

1. Clone the repository: `git clone https://github.com/musebe/nextjs-clerk-organizations-rbac-authentication`
2. Navigate to the project folder: `cd your-project`
3. Install the dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`
5. Create a `.env` file and put in the credentials
5. Open your browser and visit `http://localhost:3000` to see the application.


### .env File Configs

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/


### Usage

#### Step 1: Sign Up and Create Organizations

- Sign up for an account on Clerk (https://clerk.com/) and create a new project.

#### Step 2: Integrate Clerk Organizations

- Follow the integration guide provided by Clerk (https://clerk.com/docs/organizations/overview) to use Clerk Organizations into your Next.js application.
- Use the Clerk API to manage user roles and permissions based on the organizations they belong to.
- You can follow this tutorial to set up Organizations : [Implementing Role-Based Access Control in Next.js App Router using Clerk Organizations](https://dev.to/musebe/implementing-role-based-access-control-in-nextjs-app-router-using-clerk-organizations-566g)

### Configuration

In the `.env.local` file, you can customize the following environment variables:

- `CLERK_FRONTEND_API`: Your Clerk Frontend API key.
- `CLERK_API_URL`: The URL for the Clerk API.
- `NEXT_PUBLIC_APP_URL`: The public URL of your Next.js application.

### Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Credits

- Clerk Organizations (https://clerk.dev/)
- Next.js (https://nextjs.org/)

### Contact

If you have any questions or need support, feel free to contact the project maintainers:

- Name - Eugene Musebe
- Email- emusebe9@gmail.com

---

