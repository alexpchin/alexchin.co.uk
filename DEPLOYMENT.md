# Deployment Guide

## Automatic Deployment with GitHub Actions

This project is configured to automatically deploy to Vercel when you push to the main/master branch.

### Setup Instructions

1. **Install Vercel CLI** (if you haven't already):
   ```bash
   npm install -g vercel
   ```

2. **Link your project to Vercel**:
   ```bash
   vercel link
   ```
   Follow the prompts to link to your Vercel project.

3. **Get your Vercel credentials**:
   
   After linking, you'll find these in `.vercel/project.json`:
   - `projectId` - This is your `VERCEL_PROJECT_ID`
   - `orgId` - This is your `VERCEL_ORG_ID`

4. **Get your Vercel Token**:
   - Go to https://vercel.com/account/tokens
   - Create a new token
   - Copy the token value

5. **Add GitHub Secrets**:
   
   Go to your GitHub repository → Settings → Secrets and variables → Actions
   
   Add these three secrets:
   - `VERCEL_TOKEN` - Your Vercel token from step 4
   - `VERCEL_ORG_ID` - The orgId from `.vercel/project.json`
   - `VERCEL_PROJECT_ID` - The projectId from `.vercel/project.json`

6. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push origin main
   ```

### How it works

- **Push to main/master**: Automatically deploys to production
- **Pull requests**: Creates a preview deployment
- **Build checks**: Runs on every push to ensure the build succeeds

### Manual Deployment

You can still deploy manually using:

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Vercel Configuration

The `vercel.json` file handles client-side routing for React Router.

## Environment Variables

If you need environment variables in production:

1. Add them in Vercel Dashboard → Settings → Environment Variables
2. Or use the Vercel CLI:
   ```bash
   vercel env add VARIABLE_NAME
   ```
