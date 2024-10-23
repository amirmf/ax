1) Replace Logos:
cp ../brand/favicon/favicon.ico agent/platform/dify/dify-latest/web/public/favicon.ico
cp ../brand/AgentWhiteLogo.png agent/platform/dify/dify-latest/web/public/logo-site.png
cp ../brand/AgentWhiteLogo.png agent/platform/dify/dify-latest/web/public/logo-site-dark.png
cp ../brand/AgentWhiteLogo.png agent/platform/dify/dify-latest/web/public/logo/logo-site.png
cp ../brand/AgentWhiteLogo.png agent/platform/dify/dify-latest/web/public/logo/logo-site-dark.png
cp ../brand/AXLogo.png agent/platform/dify/dify-latest/web/public/logo-embedded-chat-avatar.png
cp ../brand/AXLogo.png agent/platform/dify/dify-latest/web/public/logo-embedded-chat-header.png
cp ../brand/AXLogo.png agent/platform/dify/dify-latest/web/public/logo/logo-embedded-chat-avatar.png
cp ../brand/AXLogo.png agent/platform/dify/dify-latest/web/public/logo/logo-embedded-chat-header.png


2) Replace Dify with AXAgent:
- Replace all 'dify.ai' & 'LangGenius' with 'AutomatX.ai' in 'dify-latest/web/'
- Search for 'dify' , 'دیفای' word in 'dify-latest/web/' directory and replace anything and also remove links to dify related pages
    - replace dify in language.json files, both persian and english files. 