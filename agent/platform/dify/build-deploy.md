# UI Build&Deploy

### Build UI from source:
1) Install Install NodeJS + NPM: Node.js v18.x (LTS) and NPM version 8.x.x or Yarn.
2) cd web
3) npm install
4) Change configs in '.env.local' file
***
    NEXT_PUBLIC_DEPLOY_ENV=PRODUCTION
    NEXT_PUBLIC_EDITION=SELF_HOSTED 
    NEXT_PUBLIC_API_PREFIX=http://axagent.console.automatx.ai/console/api
    NEXT_PUBLIC_PUBLIC_API_PREFIX=http://axagent.console.automatx.ai/api
***
5) npm run build
6) npm run start [I prefer to deploy it in httpd]

### Build UI docker image:
1) cd web
2) docker build . -t dify-web


### Run UI:
1) docker run -it -p 3000:80 dify-web

---
---

# Core Build&Deploy
You should us docker compose but after running it you should remove bellow containers:
 - Webapp(ui) container and run it by local webapp version
 - Weaviate container and run it sepratelly 

1) cd docker
2) cp .env.example .env
3) Change configs in '.env':
***
    # Commons
    CONSOLE_API_URL=https://axagent.api.console.automatx.ai
    CONSOLE_WEB_URL=https://axagent.console.automatx.ai
    SERVICE_API_URL=https://axagent.api.automatx.ai
    APP_API_URL=https://axagent.api.app.automatx.ai
    APP_WEB_URL=https://axagent.app.automatx.ai
    SECRET_KEY=12345678901234567890123456789012
    DEPLOY_ENV=PRODUCTION
    DIFY_BIND_ADDRESS=0.0.0.0
    DIFY_PORT=80
    WEB_API_CORS_ALLOW_ORIGINS=*
    CONSOLE_CORS_ALLOW_ORIGINS=*
    STORAGE_TYPE=local

    # Nginx
    NGINX_PORT=80
    NGINX_SSL_PORT=443
    EXPOSE_NGINX_PORT=80
    EXPOSE_NGINX_SSL_PORT=443
    NGINX_SSL_CERT_FILENAME=automatx.crt
    NGINX_SSL_CERT_KEY_FILENAME=automatx.key
    NGINX_SSL_PROTOCOLS=TLSv1.1 TLSv1.2 TLSv1.3
    
    # PostgreSQL
    DB_USERNAME=postgres
    DB_PASSWORD=difyai123456
    DB_HOST=db
    DB_PORT=5432
    DB_DATABASE=dify
    SQLALCHEMY_POOL_SIZE=30

    # Redis
    REDIS_HOST=redis
    REDIS_PORT=6379
    REDIS_USERNAME=
    REDIS_PASSWORD=difyai123456
    REDIS_USE_SSL=false
    
    # Celery
    CELERY_BROKER_URL=redis://:difyai123456@redis:6379/1
    BROKER_USE_SSL=false

    # VectorDB: weaviate or mulvis
    VECTOR_STORE=weaviate
    WEAVIATE_ENDPOINT=http://weaviate:8080
    WEAVIATE_API_KEY=WVF5YThaHlkYwhGUSmCRgsX3tD5ngdN8pkih
    
    UPLOAD_FILE_SIZE_LIMIT=15
    UPLOAD_FILE_BATCH_LIMIT=5
    ETL_TYPE=dify
    #ETL_TYPE=Unstructured
    UNSTRUCTURED_API_URL=http://unstructured:8000/general/v0/general
    
    # Multi modal conf
    MULTIMODAL_SEND_IMAGE_FORMAT=base64
    UPLOAD_IMAGE_FILE_SIZE_LIMIT=10

    # Mail conf
    MAIL_TYPE=smtp
    MAIL_DEFAULT_SEND_FROM=
    SMTP_SERVER=
    SMTP_PORT=465
    SMTP_USERNAME=
    SMTP_PASSWORD=
    SMTP_USE_TLS=true
    SMTP_OPPORTUNISTIC_TLS=false
***
4) docker compose up -d
5) remove and seprate Weaviate container
6) remove and seprate Ui container