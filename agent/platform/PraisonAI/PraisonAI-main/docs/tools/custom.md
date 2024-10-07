# Create Custom Tools

Sure! Let's go through the steps to install and set up the PraisonAI tool.

Quickstart: Use [PraisonAI Tools Creator GPT](../tools/gpt.md) to get started quickly.

## Step 1: Install the `praisonai` Package

First, you need to install the `praisonai` package. Open your terminal and run the following command:

```bash
pip install praisonai
```

## Step 2: Create the `InternetSearchTool`

Next, create a file named `tools.py` and add the following code to define the `InternetSearchTool`:

```python
from duckduckgo_search import DDGS
from praisonai_tools import BaseTool

class InternetSearchTool(BaseTool):
    name: str = "Internet Search Tool"
    description: str = "Search Internet for relevant information based on a query or latest news"

    def _run(self, query: str):
        ddgs = DDGS()
        results = ddgs.text(keywords=query, region='wt-wt', safesearch='moderate', max_results=5)
        return results
```

## Step 3: Define the Agent Configuration

Create a file named `agents.yaml` and add the following content to configure the agent:

```yaml
framework: crewai
topic: research about the causes of lung disease
roles:
  research_analyst:
    backstory: Experienced in analyzing scientific data related to respiratory health.
    goal: Analyze data on lung diseases
    role: Research Analyst
    tasks:
      data_analysis:
        description: Gather and analyze data on the causes and risk factors of lung diseases.
        expected_output: Report detailing key findings on lung disease causes.
    tools:
    - InternetSearchTool
```

## Step 4: Run the PraisonAI Tool

To run the PraisonAI tool, simply type the following command in your terminal:

```bash
praisonai
```

If you want to run the `autogen` framework, use:

```bash
praisonai --framework autogen
```

## Prerequisites

Ensure you have the `duckduckgo_search` package installed. If not, you can install it using:

```bash
pip install duckduckgo_search
```

That's it! You should now have the PraisonAI tool installed and configured.

## Other information

### TL;DR to Create a Custom Tool

```bash
pip install praisonai duckduckgo-search
export OPENAI_API_KEY="Enter your API key"
praisonai --init research about the latest AI News and prepare a detailed report
```

- Add `- InternetSearchTool` in the agents.yaml file in the tools section. 
- Create a file called tools.py and add this code [tools.py](tools.py)

```bash
praisonai
```

### Pre-requisite to Create a Custom Tool
`agents.yaml` file should be present in the current directory. 

If it doesn't exist, create it by running the command `praisonai --init research about the latest AI News and prepare a detailed report`.

#### Step 1 to Create a Custom Tool

Create a file called tools.py in the same directory as the agents.yaml file.

```python
# example tools.py
from duckduckgo_search import DDGS
from praisonai_tools import BaseTool

class InternetSearchTool(BaseTool):
    name: str = "InternetSearchTool"
    description: str = "Search Internet for relevant information based on a query or latest news"

    def _run(self, query: str):
        ddgs = DDGS()
        results = ddgs.text(keywords=query, region='wt-wt', safesearch='moderate', max_results=5)
        return results
```

#### Step 2 to Create a Custom Tool

Add the tool to the agents.yaml file as show below under the tools section `- InternetSearchTool`.

```yaml
framework: crewai
topic: research about the latest AI News and prepare a detailed report
roles:
  research_analyst:
    backstory: Experienced in gathering and analyzing data related to AI news trends.
    goal: Analyze AI News trends
    role: Research Analyst
    tasks:
      gather_data:
        description: Conduct in-depth research on the latest AI News trends from reputable
          sources.
        expected_output: Comprehensive report on current AI News trends.
    tools:
    - InternetSearchTool
```
