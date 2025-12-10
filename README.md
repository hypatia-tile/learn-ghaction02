# laern-ghaction02

This repository is the second point of a GitHub Actions learning series.
Now that, I have accustomed to the basic of GitHub Actions; I can create very simple wokrflows.
In this repository, I try to create a simple action.

## Composite Actions
I will start with creating a composite action, which I can make by only writing a YAML file.
Perfect for:  "I have a sequence of steps I repeat across many workflows; I want to bundle them"

```yaml
name: "Say hello"
description: "A simple composite action example"
inputs:
  who:
    description: "Who to greet"
    required: true
    default: "world"
outputs:
  result:
    description: "The greeting message"
runs:
  using: "composite"
  steps:
    - name: Run script
      shell: bash
      run: |
        msg="Hello, ${{ inputs.who }}!"
        echo "$msg"
        echo "result=$msg" >> "$GITHUB_OUTPUT"
```

This action takes one input, `who`, and produce one output, `result`
Now I can use it from another repo

```yaml
name: Use My Action

on:
  workflow_dispatch

jobs:
  use-action:
    runs-on: ubuntu-latest
    steps:
      - name: Use My Action
        uses: hypatia-tile/learn-ghaction02@main
        with:
          who: Sinokun
```
Composite actions are documented [here](https://docs.github.com/en/actions/tutorials/create-actions/create-a-composite-action?utm_source=chatgpt.com) and are great "first custom action" path.


