# GitHub Gists Clone

A full stack clone of GitHub Gists. The project uses:

- Next.js
- TypeScript
- Tailwind
- [**shadcn/ui**](https://ui.shadcn.com/)
- [**Shiki**](https://shiki.matsu.io/) (displaying code)
- [**Supabase**](https://supabase.com/) (Postgres Database)
- [**Drizzle**](https://orm.drizzle.team/) (ORM)
- [**NextAuth**](https://next-auth.js.org/) (Authentication)

[next-auth][error][OAUTH_CALLBACK_HANDLER_ERROR]
https://next-auth.js.org/errors#oauth_callback_handler_error redirect_uri_mismatch {
error: {
message: 'redirect_uri_mismatch',
stack: 'Error: redirect_uri_mismatch\n' +
' at oAuthCallback (webpack-internal:///(rsc)/./node_modules/next-auth/core/lib/oauth/callback.js:56:23)\n' +
' at Object.callback (webpack-internal:///(rsc)/./node_modules/next-auth/core/routes/callback.js:18:107)\n' +
' at AuthHandler (webpack-internal:///(rsc)/./node_modules/next-auth/core/index.js:202:51)\n' +
' at async NextAuthRouteHandler (webpack-internal:///(rsc)/./node_modules/next-auth/next/index.js:50:30)\n' +
' at async NextAuth.\_args$ (webpack-internal:///(rsc)/./node_modules/next-auth/next/index.js:84:24)\n' +
' at async /home/andrew/Documents/web-dev/personal/nextjs-13/projects/github-gists-clone/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:61466',
name: 'Error'
},
error_description: 'The redirect_uri MUST match the registered callback URL for this application.',
providerId: 'github',
message: 'redirect_uri_mismatch'
}
[next-auth][error][OAUTH_CALLBACK_ERROR]
https://next-auth.js.org/errors#oauth_callback_error redirect_uri_mismatch {
message: 'redirect_uri_mismatch',
stack: 'Error: redirect_uri_mismatch\n' +
' at oAuthCallback (webpack-internal:///(rsc)/./node_modules/next-auth/core/lib/oauth/callback.js:56:23)\n' +
' at Object.callback (webpack-internal:///(rsc)/./node_modules/next-auth/core/routes/callback.js:18:107)\n' +
' at AuthHandler (webpack-internal:///(rsc)/./node_modules/next-auth/core/index.js:202:51)\n' +
' at async NextAuthRouteHandler (webpack-internal:///(rsc)/./node_modules/next-auth/next/index.js:50:30)\n' +
' at async NextAuth.\_args$ (webpack-internal:///(rsc)/./node_modules/next-auth/next/index.js:84:24)\n' +
' at async /home/andrew/Documents/web-dev/personal/nextjs-13/projects/github-gists-clone/node_modules/next/dist/compiled/next-server/app-route.runtime.dev.js:6:61466',
name: 'Error'
}
