# Minecraft Server Checker Discord Bot

A Discord bot that checks if your Minecraft server is online by testing if port 25565 is open on the specified IP address.

## Features

- ✅ Check if Minecraft server port (25565) is open
- 📋 Get server information (IP and port)
- ⏰ Timestamp of last check
- 🎯 Simple slash commands
- ☁️ Free hosting setup included!

---

## 🔒 Security Note

**IMPORTANT:** Your `.env` file contains your bot token (like a password). 
- ✅ The `.gitignore` file is already set up to **prevent** `.env` from being uploaded to GitHub
- ✅ When you push to GitHub, your `.env` file stays on your computer only
- ✅ For hosting (Railway), you'll add the environment variables directly in their dashboard, not through GitHub
- ❌ **NEVER** share your bot token or commit `.env` to git

---

## 🚀 Complete Setup Guide (From Scratch)

### **PART 1: Create Discord Bot Application**

#### Step 1: Go to Discord Developer Portal
1. Open your browser and go to: https://discord.com/developers/applications
2. Log in with your Discord account

#### Step 2: Create New Application
1. Click the **"New Application"** button (top right)
2. Give it a name (e.g., "Minecraft Server Checker")
3. Click **"Create"**

#### Step 3: Get Your Bot Token
1. In the left sidebar, click **"Bot"**
2. Click **"Add Bot"** → **"Yes, do it!"**
3. Under **"Token"**, click **"Reset Token"** → **"Yes, do it!"**
4. Click **"Copy"** to copy your bot token
   - ⚠️ **SAVE THIS TOKEN SOMEWHERE SAFE!** You'll need it later
   - Don't share it with anyone!

#### Step 4: Enable Bot Settings
1. Scroll down to **"Privileged Gateway Intents"**
2. Enable **"Message Content Intent"** (if available)
3. Click **"Save Changes"**

#### Step 5: Get Your Client ID
1. In the left sidebar, click **"General Information"**
2. Copy the **"Application ID"** (this is your Client ID)
   - ⚠️ **SAVE THIS TOO!** You'll need it later

#### Step 6: Invite Bot to Your Server
1. In the left sidebar, click **"OAuth2"** → **"URL Generator"**
2. Under **"Scopes"**, check:
   - ✅ `bot`
   - ✅ `applications.commands`
3. Under **"Bot Permissions"**, check:
   - ✅ `Send Messages`
   - ✅ `Use Slash Commands`
4. Scroll down and copy the **"Generated URL"** at the bottom
5. Paste the URL in a new browser tab
6. Select your Discord server
7. Click **"Authorize"**
8. Complete any CAPTCHA if prompted

✅ **Your bot is now in your server!** (It will be offline until we deploy it)

---

### **PART 2: Set Up Code Locally (For Testing)**

#### Step 7: Install Node.js
1. Go to: https://nodejs.org/
2. Download the **LTS version** (recommended)
3. Install it (just click Next, Next, Next)
4. Open a new terminal/command prompt
5. Verify installation:
   ```bash
   node --version
   npm --version
   ```
   (You should see version numbers)

#### Step 8: Install Dependencies
1. Open terminal/command prompt in your bot folder
2. Run:
   ```bash
   npm install
   ```
   (This will install discord.js and other packages)

#### Step 9: Create .env File
1. In your bot folder, create a new file named `.env` (no extension!)
2. Open it in a text editor and add:
   ```
   DISCORD_TOKEN=paste_your_bot_token_here
   CLIENT_ID=paste_your_client_id_here
   ```
3. Replace `paste_your_bot_token_here` with the token you copied in Step 3
4. Replace `paste_your_client_id_here` with the Client ID you copied in Step 5
5. Save the file

#### Step 10: Test Locally (Optional)
1. In terminal, run:
   ```bash
   npm start
   ```
2. You should see: `✅ Bot is online! Logged in as YourBotName#1234`
3. Go to Discord and try `/check` command
4. If it works, press `Ctrl+C` to stop the bot

---

### **PART 3: Deploy to Free Hosting**

**Choose one of these free hosting options:**
- **Replit** (Easiest - see instructions below) ⭐ Recommended
- **Fly.io** (See alternatives section)
- **Koyeb** (See alternatives section)
- **Glitch** (See alternatives section)

#### **Option A: Replit (Easiest - Recommended!)**

#### Step 11: Sign Up for Replit
1. Go to: https://replit.com/
2. Click **"Sign up"** and sign up with **GitHub** (easiest option)
3. Complete the signup process

#### Step 12: Import Your Repository
1. In Replit, click **"Create Repl"** (or the **"+"** button)
2. Click **"Import from GitHub"**
3. Paste your GitHub repo URL: `https://github.com/Leviathan-42/123`
4. Click **"Import"**
5. Wait for it to load your files

#### Step 13: Add Environment Variables (Secrets)
1. In Replit, look for the **"Secrets"** tab (🔒 lock icon) in the left sidebar
2. Click **"Secrets"** (or the lock icon)
3. Click **"New Secret"**
4. Add your first secret:
   - **Key:** `DISCORD_TOKEN`
   - **Value:** (paste your bot token from your `.env` file)
   - Click **"Add Secret"**
5. Add your second secret:
   - **Key:** `CLIENT_ID`
   - **Value:** (paste your client ID from your `.env` file)
   - Click **"Add Secret"**

#### Step 14: Install Dependencies
1. In the Replit console (bottom panel), you'll see a terminal
2. Type: `npm install`
3. Press Enter
4. Wait for it to install (you'll see "added X packages")

#### Step 15: Run Your Bot!
1. Click the big **"Run"** button at the top (or press `Ctrl+Enter`)
2. You should see: `✅ Bot is online! Logged in as YourBotName#1234`
3. Go to Discord and try `/check` - it should work!

✅ **Your bot is now running!**

**Note:** Replit free tier will sleep after 1 hour of inactivity. To keep it running 24/7, see the "Keep-Alive" section below.

---

#### **Option B: Railway (If you have credits)**

#### Step 11: Create GitHub Account (If Needed)
1. Go to: https://github.com/
2. Sign up for a free account (if you don't have one)

#### Step 12: Create GitHub Repository
1. On GitHub, click the **"+"** icon → **"New repository"**
2. Name it: `minecraft-server-checker-bot` (or any name you want)
3. Make it **Public** (free hosting requires public repos)
4. **DO NOT** check "Add a README file" (you already have one)
5. Click **"Create repository"**

#### Step 13: Upload Code to GitHub
**Option A: Upload via Web Interface (Easiest)**
1. Go to your new repository on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop these files:
   - `bot.js`
   - `package.json`
   - `README.md`
   - `.gitignore`
   - `package-lock.json` (if it exists)
4. **DO NOT** upload `.env` file! (It contains your token)
5. Scroll down and click **"Commit changes"**

**Option B: Upload via Git Commands**
1. In your bot folder, open terminal/command prompt
2. Run these commands one by one:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
   (Replace with your actual GitHub username and repo name)
   - If asked for login, use GitHub username and a Personal Access Token (not password)

   ✅ **Security Note:** Your `.env` file is automatically ignored by git (it's in `.gitignore`), so your bot token will **NOT** be uploaded to GitHub. This is safe!

---

### **PART 4: Test Your Bot**

1. Go to your Discord server
2. Type `/check` and press Enter
3. The bot should respond with server status!

---

## 🎮 Commands

- `/check` - Check if the Minecraft server is online
- `/serverinfo` - Display server IP and port information

---

## ⚙️ Configuration

The server IP and port are configured in `bot.js`:
- Server IP: `35.138.243.230`
- Server Port: `25565`
- Timeout: `5000ms` (5 seconds)

To change these, edit `bot.js` and look for:
```javascript
const SERVER_IP = '35.138.243.230';
const SERVER_PORT = 25565;
```

---

## 🔄 Updating Your Bot

If you make changes to the code:
1. Edit files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Updated bot"
   git push
   ```
3. Railway will automatically redeploy!

---

## 🆓 Free Hosting Alternatives

### **Option 1: Replit** (Easiest - Recommended!)

Replit is free and super easy to use:

#### Step 1: Sign Up
1. Go to: https://replit.com/
2. Sign up with GitHub (easiest option)

#### Step 2: Create Repl
1. Click **"Create Repl"** (or the **"+"** button)
2. Click **"Import from GitHub"**
3. Paste your repo URL: `https://github.com/Leviathan-42/123`
4. Click **"Import"**

#### Step 3: Add Environment Variables
1. In Replit, look for the **"Secrets"** tab (lock icon) in the left sidebar
2. Click **"Secrets"** (or the lock icon)
3. Click **"New Secret"**
4. Add two secrets:
   - **Key:** `DISCORD_TOKEN` → **Value:** (paste your bot token)
   - **Key:** `CLIENT_ID` → **Value:** (paste your client ID)
5. Click **"Add"** for each

#### Step 4: Install Dependencies & Run
1. In the Replit console (bottom), run:
   ```bash
   npm install
   ```
2. Click the **"Run"** button (or press `Ctrl+Enter`)
3. Your bot should start! Look for: `✅ Bot is online!`

#### Step 5: Keep It Running (Important!)
- **Replit free tier:** Your bot will sleep after 1 hour of inactivity
- **To keep it running 24/7 for FREE:**
  1. Go to: https://uptimerobot.com/ (free service)
  2. Sign up for free account
  3. Click **"Add New Monitor"**
  4. Monitor Type: **"HTTP(s)"**
  5. Friendly Name: `Discord Bot Keep-Alive`
  6. URL: Your Repl URL (looks like `https://your-repl-name.your-username.repl.co`)
  7. Monitoring Interval: **5 minutes**
  8. Click **"Create Monitor"**
  9. This will ping your Repl every 5 minutes to keep it awake!

- **Alternative:** Upgrade to Replit Core ($7/month) for always-on hosting

---

### **Option 2: Fly.io** (Free Tier Available)

1. Go to: https://fly.io/
2. Sign up and install Fly CLI
3. Run: `fly launch` in your project folder
4. Add secrets: `fly secrets set DISCORD_TOKEN=your_token CLIENT_ID=your_id`
5. Deploy: `fly deploy`

---

### **Option 3: Koyeb** (Free Tier)

1. Go to: https://www.koyeb.com/
2. Sign up with GitHub
3. Create App → GitHub
4. Select your repository
5. Add environment variables in settings
6. Deploy!

---

### **Option 4: Glitch** (Free)

1. Go to: https://glitch.com/
2. Click **"New Project"** → **"Import from GitHub"**
3. Paste your repo URL
4. Click **".env"** file → Add your variables
5. Your bot runs automatically!

---

## 📝 Notes

- Railway gives you **$5 free credit** per month (plenty for a small bot)
- The bot checks if the port is open, which indicates the server is running
- Some firewalls may block connections even if the server is running
- The timeout is set to 5 seconds to prevent long waits

---

## 🆘 Troubleshooting

**Bot is offline:**
- Check Railway logs for errors
- Verify environment variables are set correctly
- Make sure bot token is correct

**Commands not working:**
- Wait a few minutes after inviting bot (Discord needs time to sync)
- Try kicking and re-inviting the bot

**Deployment fails:**
- Check that all files are pushed to GitHub
- Verify `package.json` is correct
- Check Railway logs for specific errors

---

## 🎉 You're Done!

Your bot should now be running 24/7 and checking your Minecraft server status!

