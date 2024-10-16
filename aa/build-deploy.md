# Deploy
1) curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml
2) set env in docker-compose.yml
***
   environment:
      - TRUST_PROXY_HEADER=1
      - DB_URL=postgres://postgres:p0stgr3s@postgres:5432/logto
      # Mandatory for GitPod to map host env to the container, thus GitPod can dynamically configure the public URL of Logto;
      # Or, you can leverage it for local testing.
      - ENDPOINT
      - ADMIN_ENDPOINT
***

3) docker compose -p logto -f - up
