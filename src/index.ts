import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  try {
    // Read input defined in action.yml
    const name = core.getInput("name");
    // Create a greeting
    const message = `Hello, ${name}!`;

    // Print to logs
    core.info(message);

    // Set output
    core.setOutput("greeting", message);

    // Access GitHub context (optional)
    core.info(`Triggered by: ${github.context.actor}`);
    core.info(`Repository: ${github.context.repo.owner}/${github.context.repo.repo}`);
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
