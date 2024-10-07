# Build&Deploy
1) cp .example.env .env
2) Change configs [https://docs.gptr.dev/docs/gpt-researcher/gptr/config]:
***
    # Scraper
    RETRIEVER="tavily", "google", "bing", "duckduckgo"
    TAVILY_API_KEY=""
    # LLM
    LLM_PROVIDER=="openai"
    #OPENAI_BASE_URL="http://llm.automatx.ai:1234/v1"
    OPENAI_API_KEY="Your Key"
    FAST_LLM_MODEL="gpt-4o-mini"
    SMART_LLM_MODEL="gpt-4o"
    EMBEDDING_PROVIDER="openai"
    OPENAI_EMBEDDING_MODEL="custom_model"
    # Behaivour
    REPORT_FORMAT="APA", "MLA", "CMS", "Harvard style", "IEEE"
    #AGENT_ROLE=

***
3) npm install --legacy-peer-deps
4) npm run dev
5) you can use the docker-compose for deploy core & ui
    - but you nead to replace 'gptr-nextjs' container with customized built ui 