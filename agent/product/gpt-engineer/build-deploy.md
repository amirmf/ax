TODO: need to develop a simple UI for it 
1) cp .env.template .env
2) Change configs:
***
    # LLM
    OPENAI_API_BASE="http://localhost:8000/v1"
    OPENAI_API_KEY="sk-xxx"
    MODEL_NAME="CodeLLama"
    LOCAL_MODEL=true

***
3) use docker-compose file [https://github.com/gpt-engineer-org/gpt-engineer/blob/main/docker/README.md]