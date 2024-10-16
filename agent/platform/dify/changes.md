1) Replace Logos:
cp ../brand/favicon/favicon.ico agent/platform/dify/dify-0.8.3/web/public/favicon.ico
cp ../brand/AgentWhiteLogo.png agent/platform/dify/dify-0.8.3/web/public/logo-site.png
cp ../brand/AgentWhiteLogo.png agent/platform/dify/dify-0.8.3/web/public/logo-site-dark.png
cp ../brand/AgentWhiteLogo.png agent/platform/dify/dify-0.8.3/web/public/logo/logo-site.png
cp ../brand/AgentWhiteLogo.png agent/platform/dify/dify-0.8.3/web/public/logo/logo-site-dark.png
cp ../brand/AXLogo.png agent/platform/dify/dify-0.8.3/web/public/logo-embedded-chat-avatar.png
cp ../brand/AXLogo.png agent/platform/dify/dify-0.8.3/web/public/logo-embedded-chat-header.png
cp ../brand/AXLogo.png agent/platform/dify/dify-0.8.3/web/public/logo/logo-embedded-chat-avatar.png
cp ../brand/AXLogo.png agent/platform/dify/dify-0.8.3/web/public/logo/logo-embedded-chat-header.png


2) Replace Dify with AXAgent:
- Replace all 'dify.ai' with 'automatx.ai' in 'dify-0.8.3/web/app'
- Search for 'dify' word in 'dify-0.8.3/web/app' directory and replace anything and also remove links to dify related pages