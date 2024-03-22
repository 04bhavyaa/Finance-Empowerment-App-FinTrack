function addGoal() {
    const goalName = document.getElementById('goalName').value;
    const goalDate = document.getElementById('goalDate').value;
  
    if (goalName && goalDate) {
        const goalsList = document.getElementById('goalsList');
        const li = document.createElement('li');
        li.textContent = `${goalName} - ${goalDate}`;
        goalsList.appendChild(li);
  
        document.getElementById('goalName').value = '';
        document.getElementById('goalDate').value = '';
    } else {
        alert('Please enter both goal name and date.');
    }
  }
  
  function toggleGoals() {
    const goals = document.getElementById('goals');
    if (goals.style.display === 'none') {
        goals.style.display = 'block';
    } else {
        goals.style.display = 'none';
    }
  }

  function searchGoals() {
    // Get the search term from the input field
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
  
    // Get the list of goals element
    const goalsList = document.getElementById('goalsList');
  
    // Clear the current list items
    goalsList.innerHTML = '';
  
    // Loop through all goals (assuming you have an array of goals)
    for (const goal of goals) {
      const goalName = goal.name.toLowerCase();
      if (goalName.includes(searchTerm)) {
        // If the goal name includes the search term, add it to the list
        const goalItem = document.createElement('li');
        goalItem.textContent = goal.name;
        goalsList.appendChild(goalItem);
      }
    }
  }
  