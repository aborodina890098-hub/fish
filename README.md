
# Blue Harbor Seafood Landing Page

A premium, high-converting landing page for a seafood restaurant in Cairo, Egypt. Built with React, TypeScript, and Tailwind CSS.

## Features
- **Modern Design**: Premium coastal aesthetic (Navy/Teal).
- **Interactive Menu**: Signature dish grid with detail cards.
- **AI Recommender**: Personalized dish suggestions using Gemini 3 Flash.
- **Reservation System**: Functional frontend form with success states.
- **SEO Optimized**: Includes Restaurant Schema JSON-LD.
- **Responsive**: Perfected for mobile, tablet, and desktop.
- **Conversion Focused**: WhatsApp integration, sticky nav, and multiple CTAs.

## Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file and add:
     ```
     API_KEY=your_gemini_api_key
     ```
4. Run locally:
   ```bash
   npm start
   ```

## Deployment
This project is ready to be deployed on **Vercel**:
1. Push your code to a GitHub repository.
2. Link your repository to a new Vercel project.
3. Add the `API_KEY` to the Vercel project environment variables.
4. Click Deploy.

## Content Management
- **Text & Hours**: Edit `constants.ts`.
- **Menu Items**: Add/Remove items in the `MENU_HIGHLIGHTS` array in `constants.ts`.
- **Images**: Replace URLs in `constants.ts` and `Hero.tsx`.
- **Colors**: Customize the Tailwind theme in `index.html`.
