<p align="center"><a href="https://www.ajpartnersltd.com.com" target="_blank"><img src="https://www.ajpartnersltd.com/wp-content/uploads/2023/03/aj-partners-ltd-low-resolution-logo-color-on-transparent-background2.png" width="400" alt="AJ Partners Ltd. Logo"></a></p>

# Laravel Breeze - Next.js Edition - (AJ Partners Ltd Edition)

## Introduction

This repository is a customized implementation of the [Laravel Breeze](https://laravel.com/docs/starter-kits) application / authentication starter kit frontend in [Next.js](https://nextjs.org). Based on the original code from [laravel/breeze-next](https://github.com/laravel/breeze-next), this version is tailored by [AJ Partners Ltd](https://www.ajpartnersltd.com/) and serves as the frontend to the [Laravel API](https://github.com/animasoul/laravel-api) for a job search application.

### Demo Application

The application allows users to search for jobs through the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch). Users can create accounts, log in, and access various job search functionalities. You can find the demo of the working project [here](https://jobs.meta.mt/).

> Note: To interact with the JSearch API, users will need to sign up on [RapidAPI](https://rapidapi.com/) and obtain API access keys.

## Official Documentation

### Installation

The steps for installation remain unchanged from the original Laravel Breeze Next.js Edition. Here's how you can set it up:

1. Create the Laravel backend by following the instructions [here](https://github.com/animasoul/laravel-api#installation).
2. Clone this repository and proceed with the frontend setup:

```bash
# Clone the repository...
git clone https://github.com/animasoul/laravel-next.git

cd laravel-next

# Install dependencies...
yarn install # or npm install

# Copy the example env file and configure...
cp .env.example .env.local
# Set the backend URL
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000

# Run the application...
npm run dev
```

Next, ensure that your application's `APP_URL` and `FRONTEND_URL` environment variables are set to `http://localhost:8000` and `http://localhost:3000`, respectively.

After defining the appropriate environment variables, you may serve the Laravel application using the `serve` Artisan command:

```bash
# Serve the application...
php artisan serve
```

Next, clone this repository and install its dependencies with `yarn install` or `npm install`. Then, copy the `.env.example` file to `.env.local` and supply the URL of your backend:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```

Finally, run the application via `npm run dev`. The application will be available at `http://localhost:3000`:

```
npm run dev
```

> Note: Currently, we recommend using `localhost` during local development of your backend and frontend to avoid CORS "Same-Origin" issues.

### Authentication Hook

This Next.js application contains a custom `useAuth` React hook, designed to abstract all authentication logic away from your pages. In addition, the hook can be used to access the currently authenticated user:

```js
const ExamplePage = () => {
    const { logout, user } = useAuth({ middleware: 'auth' })

    return (
        <>
            <p>{user?.name}</p>

            <button onClick={logout}>Sign out</button>
        </>
    )
}

export default ExamplePage
```

> Note: You will need to use [optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) (`user?.name` instead of `user.name`) when accessing properties on the user object to account for Next.js's initial server-side render.

### Named Routes

For convenience, [Ziggy](https://github.com/tighten/ziggy#spas-or-separate-repos) may be used to reference your Laravel application's named route URLs from your React application.

## Contributing

Thank you for considering contributing to Breeze Next! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

Please review [our security policy](https://github.com/laravel/breeze-next/security/policy) on how to report security vulnerabilities.

## License

Laravel Breeze Next is open-sourced software licensed under the [MIT license](LICENSE.md).
