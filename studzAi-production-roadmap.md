# studzAi: Step-by-Step Roadmap from Prototype to Production

This roadmap is based on what is in the `studz` repository today: a React + Vite + TypeScript + Tailwind frontend with a landing site, auth screens, and a dashboard mockup. There is no backend yet. The logos in `public/logos/` (NestJS, MongoDB, OpenAI, Google) suggest the intended stack, and this plan assumes it. Change the stack choices in Phase 2 if you decide differently.

---

## Phase 0: Set up the project properly (Week 1)

1. **Confirm the project runs.**
   - Run `npm install`, then `npm run dev`, and open http://localhost:5173.
   - Run `npm run build` and fix any TypeScript errors.
2. **Clean the repository.**
   - Delete the empty `.dist` folder.
   - Decide whether `dist/` should be committed. The current `.gitignore` excludes it, so keep it excluded.
   - Remove `tsconfig.tsbuildinfo` from version control and add it to `.gitignore`.
3. **Set up version control workflow.**
   - Create a `develop` branch from `main`.
   - Use feature branches (`feature/auth`, `feature/dashboard-api`) and pull requests into `develop`.
   - Protect `main` so that only tested releases merge into it.
4. **Set up environments.**
   - Create `.env.example` files for the frontend and backend listing every variable, with no real secrets.
   - Plan three environments: local, staging, and production.
5. **Write the product requirements.**
   - The `§3.x` references in `src/data/capabilities.ts` point to a specification document. Store that document in the repository under `docs/`.
   - Decide the MVP scope. Recommended: authentication, a student dashboard with real data, AI lesson explanations, and homework help. Defer teacher insights and payments.

**Done when:** the app builds cleanly, the repo has a branch strategy, and the MVP scope is written down.

---

## Phase 1: Finish and clean the frontend (Weeks 2–3)

1. **Fix content and branding.**
   - Replace the Nubien-inspired copy and the placeholder team and testimonials with real content.
   - Replace the placeholder avatar in `TimelineStats.tsx`.
   - Check that all legal pages (Privacy, Terms) reflect the real company details.
2. **Make the pages responsive and accessible.**
   - Test every page at phone, tablet, and desktop widths.
   - Check keyboard navigation, focus states, colour contrast, and alt text for images.
3. **Add routing and layout guards.**
   - Create a `ProtectedRoute` component so that `/dashboard` is only available to signed-in users.
   - Add a real 404 flow to `NotFoundPage`.
4. **Replace mock data with a data layer.**
   - Create `src/services/api.ts` as the single place that calls the backend.
   - Keep the hard-coded values in `DashboardPage.tsx` until the backend endpoints exist, then switch them over.
5. **Add forms validation.**
   - Use a library such as `react-hook-form` with `zod` for the auth and contact forms.

**Done when:** every public page is finished and the dashboard reads from a service layer, even if that layer still returns mock data.

---

## Phase 2: Build the backend (Weeks 3–6)

1. **Scaffold the API.**
   - Create a `backend/` folder with NestJS, TypeScript, and MongoDB (via Mongoose or the official driver).
   - Add ESLint, Prettier, and a test runner (Jest).
2. **Design the data model.** Core collections:
   - `users` (name, email, password hash, role: student, teacher, or admin, email verified flag)
   - `sessions` or refresh tokens
   - `lessons`, `notes`, `homeworkSessions`
   - `progress` (per user, per topic: score, time spent, mastery level)
   - `learningModes` (exam, exploration, revision preference)
3. **Implement authentication.**
   - Register, login, email verification with a 6-digit code, forgot and reset password.
   - Hash passwords with bcrypt or argon2.
   - Issue short-lived access tokens and rotating refresh tokens. Store refresh tokens securely (httpOnly cookies).
   - Add rate limiting on login and password reset.
4. **Implement the core endpoints.**
   - `GET /dashboard/summary` for the real dashboard numbers.
   - `POST /lessons/explain` for AI explanations (basic, detailed, or exam-focused).
   - `POST /homework/help` for hints and step-by-step guidance that does not give away final answers.
   - `POST /notes/summarize` for smart notes.
   - `GET/PUT /progress` for tracking.
5. **Connect the frontend.**
   - Replace the `setTimeout` redirects in `AuthPage.tsx` with real API calls.
   - Replace mock dashboard data with calls to `GET /dashboard/summary`.

**Done when:** a user can register, verify, log in, and see their own dashboard data from the database.

---

## Phase 3: Add the AI layer (Weeks 6–9)

1. **Create an AI service module** in the backend. It wraps the model provider so that the rest of the app never calls OpenAI directly.
2. **Write prompts as versioned templates** for each feature:
   - Lesson explanations in three styles (basic, detailed, exam-focused).
   - Homework help that gives hints and identifies mistakes without copying answers.
   - Note and summary generation adjusted to education level.
3. **Personalization logic.**
   - Use the `progress` collection to choose difficulty and explanation style.
   - Start simple: rules based on recent scores. Add more sophisticated models later.
4. **Guardrails.**
   - Restrict topics to the educational scope.
   - Add a moderation check on user input and model output.
   - Cap tokens per request and per user per day to control cost.
5. **Evaluate quality.**
   - Build a set of 50 to 100 sample questions with expected qualities (correct, age-appropriate, does not reveal homework answers).
   - Re-run them whenever a prompt changes.
6. **Log AI usage** (tokens, latency, errors) without storing sensitive student content longer than needed.

**Done when:** each AI feature returns useful answers on the evaluation set and respects the usage limits.

---

## Phase 4: Testing and quality (ongoing, with a dedicated push in Weeks 9–10)

1. **Unit tests** for services and utility functions (backend and frontend).
2. **API tests** with Supertest for every endpoint, including auth failures.
3. **End-to-end tests** with Playwright for the main journeys: register, verify, log in, use a lesson explainer, and log out.
4. **Accessibility and performance checks** with Lighthouse and axe on each public page.
5. **Security review:**
   - Check dependencies with `npm audit`.
   - Check for injection, broken access control, and exposed secrets.
   - Confirm that users can only read their own data.
6. **Beta testing** with a small group of real students and at least one teacher. Collect feedback and fix the top issues.

**Done when:** all automated tests pass in CI, there are no high-severity security findings, and the beta group can complete the core journeys.

---

## Phase 5: Deployment infrastructure (Weeks 9–11)

1. **Choose hosting.**
   - Frontend: Vercel (the repo already includes `vercel.json`).
   - Backend: a container host such as Render, Railway, Fly.io, or AWS (ECS or App Runner).
   - Database: MongoDB Atlas.
   - Secrets: the host's secret manager, never committed files.
2. **Containerize the backend** with a Dockerfile and a health-check endpoint (`GET /health`).
3. **Set up CI/CD** (GitHub Actions):
   - On every pull request: install, lint, type-check, test, build.
   - On merge to `develop`: deploy to staging.
   - On a tagged release: deploy to production after a manual approval.
4. **Set up the domain, HTTPS, and DNS.** Point the domain to Vercel for the frontend and to the API host under a subdomain such as `api.`.
5. **Configure CORS, security headers, and cookies** (`Secure`, `SameSite`, `HttpOnly`).
6. **Set up backups** for MongoDB Atlas, with point-in-time recovery enabled.

**Done when:** a merge to `develop` reaches staging automatically and a tagged release reaches production on approval.

---

## Phase 6: Legal, privacy, and compliance (in parallel with Phases 2–5)

1. **Privacy policy and terms** that match what the app actually does (data collected, AI providers used, retention periods).
2. **Children's data.** If students may be under 13 (or under 16 in parts of Europe), you need parental consent flows and must follow COPPA or GDPR-K rules.
3. **Data subject rights.** Build export and deletion of a user's data.
4. **AI provider terms.** Confirm that student data sent to the model provider is not used for training, and document it.
5. **Cookie consent** on the landing page, as the Privacy page already mentions.

**Done when:** legal review is complete and the app supports data export and deletion.

---

## Phase 7: Launch preparation (Weeks 11–12)

1. **Monitoring and error tracking.** Add Sentry (frontend and backend), uptime checks, and dashboards for API latency, error rate, and AI cost.
2. **Analytics.** Add privacy-friendly analytics for the landing page and key funnel steps (sign-up, verification, first lesson).
3. **Performance.** Code-split the routes in Vite, compress images, and check Core Web Vitals.
4. **Runbook.** Write how to roll back a release, rotate secrets, restore a backup, and handle an AI provider outage.
5. **Support channel.** Set up the contact form to reach a real inbox, and write a basic help center from the FAQ content.
6. **Final checklist:**
   - All tests green in CI.
   - Staging matches production configuration.
   - Secrets rotated after beta.
   - Legal pages final.
   - Monitoring alerts tested.

**Done when:** the final checklist is complete and a rollback has been rehearsed in staging.

---

## Phase 8: Production launch and after (Week 12 onward)

1. **Soft launch** to a limited group (for example, one school or a waitlist of 100 users).
2. **Watch the metrics** for the first two weeks: errors, sign-up completion, AI cost per user, and feedback.
3. **Full launch** once the soft launch meets the agreed thresholds.
4. **Post-launch cycle:**
   - Prioritize bugs first, then the features teachers asked for (teacher insights, §-level reporting).
   - Review AI costs and quality every two weeks.
   - Review security and dependencies monthly.
   - Plan payments and pricing (the Pricing section is currently a placeholder) only after usage is proven.

---

## Summary timeline

| Phase | Focus | Approx. weeks |
|---|---|---|
| 0 | Setup and scope | 1 |
| 1 | Frontend finish | 2–3 |
| 2 | Backend and auth | 3–6 |
| 3 | AI features | 6–9 |
| 4 | Testing and security | 9–10 (ongoing) |
| 5 | Deployment and CI/CD | 9–11 |
| 6 | Legal and privacy | parallel |
| 7 | Launch preparation | 11–12 |
| 8 | Launch and iteration | 12 onward |

Timelines assume one or two developers working part-time. Adjust them to your actual capacity.
