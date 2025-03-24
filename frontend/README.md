# Foundation Repair Adelaide Website

## Environment Variables

To run this project, you need to set up the following environment variables in a `.env` file:

```bash
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDER_MAIL_ADDRESS=sender-mail-address
RECEIVER_MAIL_ADDRESS=receiver-mail-address
```

## Email Configuration

The contact form uses SendGrid for email delivery. To set this up:

1. Create a SendGrid account
2. Get your API key from the SendGrid dashboard
3. Add the API key to your `.env` file
4. Verify your sender email address in SendGrid

## Adding Content

### Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Include the required frontmatter:
```markdown
---
title: "Your Post Title"
description: "Post description"
publishDate: 2024-03-21
author: "Author Name"
image: "/images/blog/your-image.jpg"
category: "Category Name"
featured: false
---
```

### Adding Services

1. Create a new `.md` file in `src/content/services/`
2. Include the required frontmatter:
```markdown
---
title: "Service Title"
description: "Service description"
icon: "🔧"
image: "/images/services/your-image.jpg"
order: 1
featured: false
---
```

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```