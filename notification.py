# Using Langflow

import langflow

# Define notification flow
flow = langflow.Flow()

# Generate a reminder using an LLM
flow.add_step("Generate Reminder", 
              langflow.llm_generate(
                  prompt="Generate a (jokingly) shaming reminder for a user that they have overdue tasks in their to-do list."
              ))

# Execute the flow to get the reminder message
response = flow.run()

# Print the generated message
print(response["Generate Reminder"])