export default function DynamicDashboard () {
    const user = "John Doe";
    const isUserPremium = true;
    const taskList = [
        {taskName: 'Do the dishes', completed: true},
        {taskName: 'Do the laundry', completed: false},
        {taskName: 'Meal prep for the week', completed: false},
        {taskName: 'Scoop the kitty litter', completed: true}
    ];

    return (
        <div>
            <header>
            <p>{new Date().toLocaleDateString()}</p>
            <h1>Hello, {user}</h1>
            <p>{isUserPremium ? 'Thank you for being a premium member!' : 'Upgrade to premium to enjoy exclusive features!'}</p>
            <h2>Task List</h2>
            <ul>
                {taskList.map((task) => (
                    <li key={task.taskName} className={task.completed ? 'text-green' : ''}>
                        {task.taskName} {task.completed ? '✅' : '❌'}
                    </li>
                ))}
            </ul>
            </header>
        </div>
    );
}