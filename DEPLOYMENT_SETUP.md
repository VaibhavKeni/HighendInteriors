# GitHub Actions Deployment Setup

## Steps to Enable Automatic Deployment:

### 1. Generate SSH Key for Deployment
On your local machine, run:
```bash
ssh-keygen -t rsa -b 4096 -f deploy_key -N ""
```

This creates two files:
- `deploy_key` (private key)
- `deploy_key.pub` (public key)

### 2. Add Public Key to Your Server
SSH into your server and add the public key:
```bash
cat deploy_key.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### 3. Add GitHub Secrets
Go to your GitHub repository:
1. Click **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these secrets:

| Name | Value |
|------|-------|
| `DEPLOY_KEY` | (Content of `deploy_key` file - private key) |
| `DEPLOY_HOST` | Your server IP or hostname (e.g., 192.168.1.1) |
| `DEPLOY_USER` | Your SSH username (e.g., root) |
| `DEPLOY_PATH` | Path to your project on server (e.g., /home/user/highendinteriors) |

### 4. Setup PM2 on Your Server
SSH into your server and run:
```bash
npm install -g pm2
pm2 startup
pm2 save
```

### 5. Push to GitHub
```bash
git add .
git commit -m "Setup Node.js deployment"
git push origin main
```

GitHub Actions will automatically deploy your app!

## Environment Variables on Server

The `.env.production` file contains:
- `GMAIL_USER=highendinteriors9@gmail.com`
- `GMAIL_PASSWORD=rcci yjpa xnrq hpck`

These will be used when the app runs on your server.

## Troubleshooting

If deployment fails:
1. Check GitHub Actions logs: Go to **Actions** tab in your repo
2. Verify SSH credentials are correct
3. Ensure PM2 is installed on server
4. Check server has Node.js 20+ installed
