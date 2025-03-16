# Using Langflow

# import langflow

# # Define notification flow
# flow = langflow.Flow()

# # Generate a reminder using an LLM
# flow.add_step("Generate Reminder", 
#               langflow.llm_generate(
#                   prompt="Generate a (jokingly) shaming reminder for a user that they have overdue tasks in their to-do list."
#               ))

# # Execute the flow to get the reminder message
# response = flow.run()

# # Print the generated message
# print(response["Generate Reminder"])


from langflow.load import load_flow_from_json

# Load your exported Langflow JSON file
flow = load_flow_from_json("path/to/your/flow.json")  # Update with actual file path

# Run the flow with an input
response = flow.invoke({"input": "Remind me about my overdue tasks in a funny way"})

print(response)