# Contributing to Task-Master 🎯

Welcome to **Task-Master**! This is a simple React + Vite task management app. We've kept the contribution process straightforward - no complex testing setup, just clean code and good collaboration.

## 🚀 Quick Start

### Get the Code
```bash
# 1. Fork the repo on GitHub (click the Fork button)
# 2. Clone YOUR fork (not the original)
git clone https://github.com/YOUR_USERNAME/Task-Master.git
cd Task-Master

# 3. Add the original repo as upstream
git remote add upstream https://github.com/ashintv/Task-Master.git

# 4. Install and run
npm install
npm run dev
```

Open http://localhost:5173 and you should see the Task-Master app! 🎉

## 🎯 What Can You Contribute?

### 🐛 Bug Fixes
- Task not saving correctly
- UI glitches on mobile
- Performance issues
- Accessibility improvements

### ✨ New Features
- Task categories/tags
- Due date reminders  
- Dark mode toggle
- Task search/filtering
- Drag & drop reordering
- Export functionality

### 🎨 UI/UX Improvements
- Better mobile responsive design
- Improved color schemes
- Better animations/transitions
- Icon improvements
- Layout optimizations

### 📚 Documentation
- Update README
- Add code comments
- Create user guides
- Improve setup instructions

## 📋 How to Contribute

### Step 1: Find Something to Work On
1. Check [Issues](https://github.com/ashintv/Task-Master/issues)
2. Look for `good first issue` labels (great for beginners!)
3. Found something? Comment: "I'd like to work on this"
4. Wait for @ashintv to assign it to you

### Step 2: Create Your Branch
```bash
# Always start from the latest develop
git checkout develop
git pull upstream develop

# Create your feature branch
git checkout -b feature/task-search
# or for bugs
git checkout -b fix/mobile-layout-issue
```

### Step 3: Make Your Changes
```bash
# Start the dev server (it auto-reloads!)
npm run dev

# Edit files in src/
# - src/components/ for React components
# - src/styles/ for CSS
# - src/utils/ for helper functions
```

### Step 4: Test Your Changes
```bash
# Make sure the app still builds
npm run build

# Check for code quality issues  
npm run lint
npm run lint:fix  # Auto-fixes what it can

# Test in browser
# - Does it work on desktop?
# - Does it work on mobile?
# - Any console errors?
```

### Step 5: Commit and Push
```bash
# Add your changes
git add .

# Write a clear commit message
git commit -m "feat: add task search with filter options"

# Push to YOUR fork
git push origin feature/task-search
```

### Step 6: Create Pull Request
1. Go to GitHub
2. Click "New Pull Request"
3. Choose: `your-branch` → `ashintv/Task-Master` `develop`
4. Fill out the description
5. Submit and wait for review!

## 📝 Code Guidelines

### React Best Practices
```jsx
// ✅ Good: Functional component with clear naming
const TaskCard = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

// ❌ Avoid: Class components (we prefer hooks)
class TaskCard extends Component {
  // ...old style
}
```

### CSS Guidelines
```css
/* ✅ Use meaningful class names */
.task-card {
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.task-card__title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* ✅ Mobile-first responsive design */
.task-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .task-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Commit Message Format
Keep it simple but descriptive:

```bash
# Feature additions
git commit -m "feat: add dark mode toggle"
git commit -m "feat: implement task categories"

# Bug fixes
git commit -m "fix: resolve task deletion error"
git commit -m "fix: improve mobile layout on small screens"

# Styling changes
git commit -m "style: update button hover effects"
git commit -m "style: improve task card design"

# Documentation
git commit -m "docs: update README installation steps"
```

## 🚨 What Happens When You Submit a PR?

### Automatic Checks
When you create a PR, GitHub will automatically:
1. ✅ **Lint Check** - Make sure code follows style rules
2. ✅ **Build Check** - Ensure the app builds successfully  
3. ✅ **Comment** - Bot comments when checks are done

### Review Process
1. @ashintv gets notified of your PR
2. Code review happens (usually within 1-2 days)
3. If changes needed, you'll get feedback
4. Once approved, merged to `develop`
5. Later, `develop` gets merged to `master` (production)

## 🛠️ Development Environment Setup

### Recommended VS Code Extensions
```json
// In VS Code, install these extensions:
- ES7+ React/Redux/React-Native snippets
- Prettier - Code formatter  
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer
```

### VS Code Settings (Optional)
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 🎨 Project Structure

```
Task-Master/
├── src/
│   ├── components/          # React components
│   │   ├── TaskCard.jsx     # Individual task display
│   │   ├── TaskList.jsx     # List of tasks  
│   │   ├── TaskForm.jsx     # Add/edit task form
│   │   └── Header.jsx       # App header
│   ├── hooks/               # Custom React hooks
│   │   ├── useLocalStorage.js
│   │   └── useTasks.js
│   ├── utils/               # Helper functions
│   │   ├── taskUtils.js     # Task-related utilities
│   │   └── dateUtils.js     # Date formatting
│   ├── styles/              # CSS files
│   │   ├── global.css       # Global styles
│   │   └── components/      # Component-specific styles
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Vite entry point
├── public/                  # Static assets
│   ├── favicon.ico
│   └── index.html
├── dist/                    # Build output (auto-generated)
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
└── README.md               # Project info
```

## 💡 Development Tips

### Getting Started with the Codebase
1. **Start with small changes** - Fix a typo, adjust spacing
2. **Read the existing code** - See how components are structured
3. **Use the dev server** - `npm run dev` for instant feedback
4. **Check browser console** - Spot errors and warnings

### Common Tasks

#### Adding a New Component
```bash
# Create component file
touch src/components/TaskFilter.jsx

# Create CSS file (optional)
touch src/styles/TaskFilter.css
```

```jsx
// src/components/TaskFilter.jsx
import React from 'react';
import './TaskFilter.css'; // if using separate CSS

const TaskFilter = ({ onFilterChange }) => {
  return (
    <div className="task-filter">
      <select onChange={onFilterChange}>
        <option value="all">All Tasks</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </div>
  );
};

export default TaskFilter;
```

#### Adding State Management
```jsx
// Using useState for simple state
const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  
  // Component logic...
};
```

#### Working with Local Storage
```jsx
// Custom hook for localStorage
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };
  
  return [value, setStoredValue];
};
```

## 🚫 What NOT to Do

### Don't:
- ❌ Push directly to `master` or `develop`
- ❌ Work on issues assigned to others
- ❌ Make huge PRs (keep changes focused)
- ❌ Ignore linting errors
- ❌ Forget to test in browser
- ❌ Add complex dependencies without discussion

### Do:
- ✅ Create focused, single-purpose PRs
- ✅ Test changes locally before pushing
- ✅ Write clear commit messages
- ✅ Ask questions when unsure
- ✅ Follow the existing code style
- ✅ Update documentation if needed

## 🆘 Getting Help

### Stuck on Something?
1. **Check existing issues** - Someone might have the same problem
2. **Look at the code** - See how similar features are implemented
3. **Ask in GitHub Issues** - Create an issue with your question
4. **Check Vite docs** - For build/dev server issues

### Reporting Bugs
When reporting a bug, include:
- What you were trying to do
- What actually happened  
- Steps to reproduce
- Screenshot (if visual bug)
- Browser and OS info

**Example Bug Report:**
```
**Bug**: Task doesn't save when pressing Enter

**Steps to reproduce:**
1. Click "Add Task" button
2. Type task title
3. Press Enter key
4. Task disappears instead of saving

**Expected**: Task should be saved and appear in list
**Browser**: Chrome 120, Windows 11
```

## 🎉 Recognition

Contributors are recognized:
- In the [Contributors](https://github.com/ashintv/Task-Master/graphs/contributors) page
- In release notes for significant features
- Mentioned when their features go live!

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

## 🙏 Thank You!

Every contribution makes Task-Master better! Whether it's:
- 🐛 Fixing a small bug
- ✨ Adding a cool feature  
- 📚 Improving documentation
- 🎨 Making it look better

**You're making a difference!** 🚀

**Questions?** Reach out to [@ashintv](https://github.com/ashintv) or create an issue!

---

*Happy coding!* ⚡