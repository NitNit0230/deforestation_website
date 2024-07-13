// Selecting elements
const goalForm = document.getElementById('goalForm');
const goalList = document.getElementById('goalList');

// Event listener for form submission
goalForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form values
    const goalInput = document.getElementById('goal');
    const descriptionInput = document.getElementById('description');
    const deadlineInput = document.getElementById('deadline');

    // Validate goal input
    if (!goalInput.value.trim()) {
        alert('Please enter a goal.');
        return;
    }

    // Create a new goal object
    const newGoal = {
        goal: goalInput.value,
        description: descriptionInput.value,
        deadline: deadlineInput.value || 'No deadline'
    };

    // Add the goal to the list
    addGoalToList(newGoal);

    // Reset form inputs
    goalInput.value = '';
    descriptionInput.value = '';
    deadlineInput.value = '';
});

// Function to add a goal to the list
function addGoalToList(goal) {
    // Create elements for displaying goal details
    const goalItem = document.createElement('div');
    goalItem.classList.add('goal-item');
    
    const goalInfo = document.createElement('div');
    goalInfo.innerHTML = `
        <p><strong>Goal:</strong> ${goal.goal}</p>
        <p><strong>Description:</strong> ${goal.description}</p>
        <p><strong>Deadline:</strong> ${goal.deadline}</p>
    `;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Goal';
    deleteButton.addEventListener('click', function() {
        goalItem.remove(); // Remove the goal item from the list
    });

    // Append goal details and delete button to goal item
    goalItem.appendChild(goalInfo);
    goalItem.appendChild(deleteButton);

    // Append goal item to the goal list
    goalList.appendChild(goalItem);
}
