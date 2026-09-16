# Shek Rasel — Portfolio

A responsive React and TypeScript portfolio for a frontend-focused software engineer. The Obsidian & Burnished Copper design includes Home, About, professional experience, education, Projects, individual project galleries, Journal, Contact, and a not-found page.

## Run locally

```sh
npm install
npm run dev
```

The development site runs at http://localhost:3000. On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm`.

## Validate and build

```sh
npm run lint
npm run build
npm run preview
```

Production output is written to `dist`. Configure your hosting provider to serve `index.html` for client-side routes such as `/about`, `/projects`, and `/project/:slug`.

## Profile and CV content

`src/data/profile.ts` contains the professional title, summary, public contact details, work history, education, and categorized skills. Edit this file to keep Home, About, Experience, Skills, and Contact consistent.

The Experience section appears on both Home and About. About also includes the education entry. Existing GitHub and LinkedIn URLs are retained because the pasted CV contained placeholder profile links. The résumé download continues to use the existing PDF at `src/assets/cv/Shek_Rasel_DIU_P_2.pdf`; replace that file separately when updating the downloadable document.

## Contact

The form validates a visitor’s name, email, and message and opens a prepared email addressed to `swe.rasel@gmail.com`. It does not automatically send email. The visitor reviews and sends the draft in their mail app. The prepared message also remains visible with a copy button in case no email app is configured. If clipboard permission is unavailable, it can be selected and copied manually.

To override the public recipient, copy `.env.example` to `.env.local`, set `VITE_CONTACT_EMAIL`, and restart the development server or rebuild. Automatic delivery requires a separate backend or form service.

## Customize

- Design tokens, responsive layouts, and animation styles: `src/index.css`.
- Profile, experience, education, and skills: `src/data/profile.ts`.
- Project content, screenshots, live URLs, and repositories: `src/projects/project.ts` and `src/utilities/assets.ts`.
- Page routes: `src/routes/index.tsx`. The old `/about me` URL redirects to `/about`.
- The Journal page intentionally shows an unpublished state until real posts are available.
- Google Fonts are used with local sans-serif fallbacks. The résumé and project imagery are local assets.

Navigation includes active states, a mobile menu with Escape and outside-click dismissal, a skip link, and focus management. Galleries support keyboard arrows and thumbnails. Motion follows the visitor’s reduced-motion preference.
