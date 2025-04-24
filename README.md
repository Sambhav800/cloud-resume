# Cloud Resume Challenge

A professionally designed, cloud-native resume showcasing modern web and cloud engineering skills. This project demonstrates best practices in cloud architecture, CI/CD, and Infrastructure as Code.

## Live Demo

View the live resume at: https://sambhav800.github.io/cloud-resume/

## Architecture

![Architecture Diagram](https://your-image-link-here.png)

This project implements a serverless architecture with:
- Frontend hosted on GitHub Pages
- Serverless API built with Firebase Cloud Functions
- Data persistence using Firebase Realtime Database
- CI/CD pipeline with GitHub Actions
- Infrastructure as Code using Terraform

## Features

- Responsive design with dark/light mode toggle
- Real-time visitor counter with serverless backend
- Automated testing and deployment pipeline
- Secure API design with proper separation of concerns
- Infrastructure defined and managed as code

## Technical Implementation

### Frontend
- HTML5, CSS3, and modern JavaScript
- Responsive design for all device sizes
- Dark/light mode with local storage persistence
- Fetch API for backend communication

### Backend
- Serverless API with Firebase Cloud Functions
- Transaction-based visitor counter for concurrency support
- CORS-enabled endpoints for security
- Proper error handling and status codes

### CI/CD Pipeline
- Automated testing and validation
- GitHub Actions for continuous deployment
- Automatic deployment on push to main branch

### Infrastructure as Code
- Terraform configuration in a [separate repository](https://github.com/Sambhav800/cloud-resume-terraform)
- Cloud resources defined as code
- Scalable and reproducible infrastructure

## Development

### Prerequisites
- Node.js and npm
- Firebase CLI
- Terraform (for infrastructure management)

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Run locally: `npm start`

## Deployment
The project is automatically deployed via GitHub Actions when changes are pushed to the main branch.

To deploy manually:
```bash
npm run build
firebase deploy --only functions
