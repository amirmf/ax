# Build&Deploy
1) cd SuperAGI
2) cp config_template.yaml config.yaml.
3) Change config in config.yaml:
 ***
    ENCRYPTION_KEY: abcdefghijklmnopqrstuvwxyz123456
    OPENAI_API_BASE: https://api.openai.com/v1
    OPENAI_API_KEY: YOUR_OPEN_API_KEY
    MODEL_NAME: "gpt-3.5-turbo-0301"
    RESOURCES_SUMMARY_MODEL_NAME: "gpt-3.5-turbo"
    MAX_TOOL_TOKEN_LIMIT: 800
    MAX_MODEL_TOKEN_LIMIT: 4032
    # PG DB
    DB_NAME: super_agi_main
    DB_HOST: super__postgres
    DB_USERNAME: superagi
    DB_PASSWORD: password
    DB_URL: postgresql://superagi:password@super__postgres:5432/super_agi_main
    # Redis
    REDIS_URL: "super__redis:6379"
    # VectorDB
    WEAVIATE_USE_EMBEDDED: false
    WEAVIATE_URL: YOUR_WEAVIATE_URL
    WEAVIATE_API_KEY: YOUR_WEAVIATE_API_KEY
    # Email
    EMAIL_ADDRESS: YOUR_EMAIL_ADDRESS
    EMAIL_PASSWORD: YOUR_EMAIL_APP_PASSWORD 
    EMAIL_SMTP_HOST: smtp.gmail.com 
    EMAIL_SMTP_PORT: 587 
    EMAIL_IMAP_SERVER: imap.gmail.com 
    EMAIL_SIGNATURE: Email sent by AXAgentAuto
    EMAIL_DRAFT_MODE_WITH_FOLDER: YOUR_DRAFTS_FOLDER
    EMAIL_ATTACHMENT_BASE_PATH: YOUR_DIRECTORY_FOR_EMAIL_ATTACHMENTS
***
4) docker compose -f docker-compose-gpu.yml up --build
or
4) docker compose -f docker-compose.yaml up --build
    5) Remove PG container & connect to remote one
    6) Remove Redis container & connect to remote one 
    7) Remoe gui container & deploy it using local version